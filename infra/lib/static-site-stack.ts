import {
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
  type StackProps,
} from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import {
  AllowedMethods,
  CachePolicy,
  Distribution,
  Function,
  FunctionCode,
  FunctionEventType,
  HttpVersion,
  PriceClass,
  ResponseHeadersPolicy,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  FederatedPrincipal,
  OpenIdConnectProvider,
  PolicyDocument,
  PolicyStatement,
  Role,
} from "aws-cdk-lib/aws-iam";
import {
  ARecord,
  AaaaRecord,
  HostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
  ObjectOwnership,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import type { StaticSiteConfig } from "./config";

export interface StaticSiteStackProps extends StackProps {
  readonly config: StaticSiteConfig;
}

const githubActionsAudience = "sts.amazonaws.com";
const githubOidcUrl = "https://token.actions.githubusercontent.com";

export class StaticSiteStack extends Stack {
  constructor(scope: Construct, id: string, props: StaticSiteStackProps) {
    super(scope, id, props);

    const { config } = props;
    const allDomainNames = [config.domainName, ...config.alternateDomainNames];
    const hostedZone = HostedZone.fromLookup(this, "HostedZone", {
      domainName: config.hostedZoneDomainName,
    });

    const certificate = new Certificate(this, "Certificate", {
      domainName: config.domainName,
      subjectAlternativeNames: [...config.alternateDomainNames],
      validation: CertificateValidation.fromDns(hostedZone),
    });

    const siteBucket = new Bucket(this, "SiteBucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
      removalPolicy: RemovalPolicy.RETAIN,
      versioned: true,
    });

    const cleanUrlRewrite = new Function(this, "CleanUrlRewriteFunction", {
      code: FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
    return request;
  }

  if (!uri.includes(".")) {
    request.uri = uri + ".html";
  }

  return request;
}
`),
    });

    const distribution = new Distribution(this, "Distribution", {
      certificate,
      comment: `${config.domainName} static website`,
      defaultBehavior: {
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            eventType: FunctionEventType.VIEWER_REQUEST,
            function: cleanUrlRewrite,
          },
        ],
        origin: S3BucketOrigin.withOriginAccessControl(siteBucket),
        responseHeadersPolicy: ResponseHeadersPolicy.SECURITY_HEADERS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      domainNames: allDomainNames,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: "/404.html",
          ttl: Duration.minutes(5),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: "/404.html",
          ttl: Duration.minutes(5),
        },
      ],
      httpVersion: HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: PriceClass.PRICE_CLASS_100,
    });

    allDomainNames.forEach((recordName) => {
      const normalizedRecordName =
        recordName === config.hostedZoneDomainName ? undefined : recordName;

      new ARecord(this, `${this.toRecordId(recordName)}AliasA`, {
        zone: hostedZone,
        recordName: normalizedRecordName,
        target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      });

      new AaaaRecord(this, `${this.toRecordId(recordName)}AliasAAAA`, {
        zone: hostedZone,
        recordName: normalizedRecordName,
        target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      });
    });

    const deployRole = this.createGitHubDeployRole(config, siteBucket, distribution);

    new CfnOutput(this, "SiteUrl", {
      value: `https://${config.domainName}`,
    });
    new CfnOutput(this, "SiteBucketName", {
      value: siteBucket.bucketName,
    });
    new CfnOutput(this, "CloudFrontDistributionId", {
      value: distribution.distributionId,
    });
    new CfnOutput(this, "CloudFrontDomainName", {
      value: distribution.distributionDomainName,
    });
    new CfnOutput(this, "GitHubActionsRoleArn", {
      value: deployRole.roleArn,
    });
  }

  private createGitHubDeployRole(
    config: StaticSiteConfig,
    bucket: Bucket,
    distribution: Distribution,
  ): Role {
    const oidcProvider = config.githubOidcProviderArn
      ? OpenIdConnectProvider.fromOpenIdConnectProviderArn(
          this,
          "GitHubOidcProvider",
          config.githubOidcProviderArn,
        )
      : new OpenIdConnectProvider(this, "GitHubOidcProvider", {
          url: githubOidcUrl,
          clientIds: [githubActionsAudience],
        });

    const repositorySubject = `repo:${config.githubOwner}/${config.githubRepository}:ref:refs/heads/${config.githubBranch}`;

    const role = new Role(this, "GitHubActionsDeployRole", {
      assumedBy: new FederatedPrincipal(
        oidcProvider.openIdConnectProviderArn,
        {
          StringEquals: {
            "token.actions.githubusercontent.com:aud": githubActionsAudience,
            "token.actions.githubusercontent.com:sub": repositorySubject,
          },
        },
        "sts:AssumeRoleWithWebIdentity",
      ),
      description: `Deploy ${config.domainName} from GitHub Actions`,
      inlinePolicies: {
        DeployStaticSite: new PolicyDocument({
          statements: [
            new PolicyStatement({
              actions: [
                "s3:DeleteObject",
                "s3:GetBucketLocation",
                "s3:ListBucket",
                "s3:PutObject",
                "s3:PutObjectTagging",
              ],
              resources: [bucket.bucketArn, bucket.arnForObjects("*")],
            }),
            new PolicyStatement({
              actions: ["cloudfront:CreateInvalidation"],
              resources: [
                `arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`,
              ],
            }),
          ],
        }),
      },
    });

    return role;
  }

  private toRecordId(domainName: string): string {
    return domainName
      .replace(/[^A-Za-z0-9]/g, " ")
      .split(" ")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
  }
}
