# CodeLabs Web Infrastructure

AWS CDK v2 infrastructure for `codelabsecuador.com`.

## Architecture

- Private S3 bucket for static files.
- CloudFront distribution with Origin Access Control.
- ACM certificate in `us-east-1`.
- Route 53 alias records for `codelabsecuador.com` and `www.codelabsecuador.com`.
- GitHub Actions OIDC role with minimum permissions for content deployment.

## Commands

```bash
npm ci
npm run build
npm run synth -- -c stage=prod
```

Before deploying, confirm the AWS profile. For this repo the expected profile is `codelabs`.

```bash
npm run cdk -- deploy -c stage=prod --profile codelabs
```

The stack imports the GitHub OIDC provider from the current CDK account by default. If you need to override it, pass:

```bash
GITHUB_OIDC_PROVIDER_ARN=arn:aws:iam::<account-id>:oidc-provider/token.actions.githubusercontent.com \
  npm run cdk -- deploy -c stage=prod --profile codelabs
```

## GitHub repository variables

After the CDK deploy, configure these repository variables from stack outputs:

- `AWS_ROLE_TO_ASSUME`: `GitHubActionsRoleArn`
- `AWS_REGION`: `us-east-1`
- `SITE_BUCKET_NAME`: `SiteBucketName`
- `CLOUDFRONT_DISTRIBUTION_ID`: `CloudFrontDistributionId`
