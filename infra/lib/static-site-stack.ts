import {
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
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
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  FederatedPrincipal,
  type IOpenIdConnectProvider,
  OpenIdConnectProvider,
  PolicyDocument,
  PolicyStatement,
  Role,
} from "aws-cdk-lib/aws-iam";
import {
  ARecord,
  AaaaRecord,
  HostedZone,
  type IHostedZone,
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
import { buildCleanUrlHandler } from "./clean-url-handler";
import { addLeadIntakeRoute } from "./lead-intake-route";
import type { StaticSiteConfig } from "./config";
import { createSecurityHeadersPolicy } from "./security-headers-policy";
import type { StaticSiteStackProps } from "./static-site-stack-props";

const githubActionsAudience = "sts.amazonaws.com";
const githubOidcHost = "token.actions.githubusercontent.com";
const infraDeployRoleName = "codelabs-web-infra-deploy";
const cdkRolePattern = "cdk-hnb659fds-*";
const noncurrentVersionRetention = Duration.days(30);
const incompleteUploadRetention = Duration.days(7);
const notFoundPage = "/404.html";
const notFoundCacheTtl = Duration.minutes(5);

const productionSubject = (config: StaticSiteConfig): string =>
  `repo:${config.githubOwner}/${config.githubRepository}:environment:production`;

export class StaticSiteStack extends Stack {
  constructor(scope: Construct, stackId: string, props: StaticSiteStackProps) {
    super(scope, stackId, props);

    const { config } = props;
    const hostedZone = HostedZone.fromLookup(this, "HostedZone", { domainName: config.hostedZoneDomainName });
    const siteBucket = this.createSiteBucket();
    const distribution = this.createDistribution(config, siteBucket, this.createCertificate(config, hostedZone));
    this.createAliasRecords(config, hostedZone, distribution);
    const oidcProvider = this.gitHubOidcProvider();
    const deployRole = this.createGitHubDeployRole(config, siteBucket, distribution, oidcProvider);
    this.createGitHubInfraRole(config, oidcProvider);
    this.createOutputs(config, siteBucket, distribution, deployRole);
  }

  private createCertificate(config: StaticSiteConfig, hostedZone: IHostedZone): Certificate {
    return new Certificate(this, "Certificate", {
      domainName: config.domainName,
      subjectAlternativeNames: [...config.alternateDomainNames],
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }

  private createSiteBucket(): Bucket {
    return new Bucket(this, "SiteBucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      lifecycleRules: [
        {
          abortIncompleteMultipartUploadAfter: incompleteUploadRetention,
          expiredObjectDeleteMarker: true,
          noncurrentVersionExpiration: noncurrentVersionRetention,
        },
      ],
      objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
      removalPolicy: RemovalPolicy.RETAIN,
      versioned: true,
    });
  }

  private createDistribution(config: StaticSiteConfig, siteBucket: Bucket, certificate: Certificate): Distribution {
    const cleanUrlRewrite = new Function(this, "CleanUrlRewriteFunction", {
      code: FunctionCode.fromInline(buildCleanUrlHandler(config.domainName)),
    });
    const securityHeadersPolicy = createSecurityHeadersPolicy(this, config.domainName);
    const distribution = new Distribution(this, "Distribution", {
      certificate,
      comment: `${config.domainName} static website`,
      defaultBehavior: {
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [{ eventType: FunctionEventType.VIEWER_REQUEST, function: cleanUrlRewrite }],
        origin: S3BucketOrigin.withOriginAccessControl(siteBucket),
        responseHeadersPolicy: securityHeadersPolicy,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      domainNames: [config.domainName, ...config.alternateDomainNames],
      errorResponses: [403, 404].map((httpStatus) => ({
        httpStatus,
        responseHttpStatus: 404,
        responsePagePath: notFoundPage,
        ttl: notFoundCacheTtl,
      })),
      httpVersion: HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: PriceClass.PRICE_CLASS_100,
    });
    addLeadIntakeRoute(this, distribution, securityHeadersPolicy);
    return distribution;
  }

  private createAliasRecords(config: StaticSiteConfig, hostedZone: IHostedZone, distribution: Distribution): void {
    const target = RecordTarget.fromAlias(new CloudFrontTarget(distribution));
    [config.domainName, ...config.alternateDomainNames].forEach((domainName) => {
      const recordName = domainName === config.hostedZoneDomainName ? undefined : domainName;
      const recordId = this.toRecordId(domainName);
      new ARecord(this, `${recordId}AliasA`, { zone: hostedZone, recordName, target });
      new AaaaRecord(this, `${recordId}AliasAAAA`, { zone: hostedZone, recordName, target });
    });
  }

  private createOutputs(config: StaticSiteConfig, siteBucket: Bucket, distribution: Distribution, deployRole: Role): void {
    new CfnOutput(this, "SiteUrl", { value: `https://${config.domainName}` });
    new CfnOutput(this, "SiteBucketName", { value: siteBucket.bucketName });
    new CfnOutput(this, "CloudFrontDistributionId", { value: distribution.distributionId });
    new CfnOutput(this, "CloudFrontDomainName", { value: distribution.distributionDomainName });
    new CfnOutput(this, "GitHubActionsRoleArn", { value: deployRole.roleArn });
  }

  private gitHubPrincipal(config: StaticSiteConfig, oidcProvider: IOpenIdConnectProvider): FederatedPrincipal {
    return new FederatedPrincipal(
      oidcProvider.openIdConnectProviderArn,
      {
        StringEquals: {
          [`${githubOidcHost}:aud`]: githubActionsAudience,
          [`${githubOidcHost}:sub`]: productionSubject(config),
        },
      },
      "sts:AssumeRoleWithWebIdentity",
    );
  }

  private deployPolicy(bucket: Bucket, distribution: Distribution): PolicyDocument {
    return new PolicyDocument({
      statements: [
        new PolicyStatement({
          actions: ["s3:DeleteObject", "s3:GetBucketLocation", "s3:ListBucket", "s3:PutObject", "s3:PutObjectTagging"],
          resources: [bucket.bucketArn, bucket.arnForObjects("*")],
        }),
        new PolicyStatement({
          actions: ["cloudfront:CreateInvalidation"],
          resources: [`arn:aws:cloudfront::${this.account}:distribution/${distribution.distributionId}`],
        }),
      ],
    });
  }

  private createGitHubDeployRole(
    config: StaticSiteConfig,
    bucket: Bucket,
    distribution: Distribution,
    oidcProvider: IOpenIdConnectProvider,
  ): Role {
    return new Role(this, "GitHubActionsDeployRole", {
      assumedBy: this.gitHubPrincipal(config, oidcProvider),
      description: `Deploy ${config.domainName} from GitHub Actions`,
      inlinePolicies: { DeployStaticSite: this.deployPolicy(bucket, distribution) },
    });
  }

  private gitHubOidcProvider(): IOpenIdConnectProvider {
    return OpenIdConnectProvider.fromOpenIdConnectProviderArn(
      this,
      "GitHubOidcProvider",
      `arn:aws:iam::${this.account}:oidc-provider/${githubOidcHost}`,
    );
  }

  private createGitHubInfraRole(config: StaticSiteConfig, oidcProvider: IOpenIdConnectProvider): void {
    const role = new Role(this, "GitHubInfraDeployRole", {
      roleName: infraDeployRoleName,
      assumedBy: this.gitHubPrincipal(config, oidcProvider),
      description: `Deploy ${config.domainName} infrastructure from GitHub Actions`,
    });
    role.addToPolicy(
      new PolicyStatement({
        actions: ["sts:AssumeRole"],
        resources: [`arn:aws:iam::${this.account}:role/${cdkRolePattern}`],
      }),
    );
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
