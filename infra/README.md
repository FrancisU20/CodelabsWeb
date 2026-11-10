# Infraestructura de CodeLabs Web

Guía operativa de la aplicación AWS CDK v2 que publica `codelabsecuador.com`.

## Validación

```bash
npm ci
npm run build
npm run synth -- -c stage=prod --profile codelabs-prod
```

## Despliegue manual

Antes de desplegar se deben confirmar el perfil, la cuenta, la región y la hosted zone. El perfil local esperado es `codelabs-prod`.

```bash
npm run cdk -- deploy -c stage=prod --profile codelabs-prod
```

El stack usa el proveedor OIDC de GitHub que ya existe en la cuenta.

## Variables del repositorio GitHub

Después del deploy CDK, configurar desde los outputs del stack:

- `AWS_ROLE_TO_ASSUME`: `GitHubActionsRoleArn`.
- `AWS_REGION`: `us-east-1`.
- `SITE_BUCKET_NAME`: `SiteBucketName`.
- `CLOUDFRONT_DISTRIBUTION_ID`: `CloudFrontDistributionId`.

No almacenar access keys ni credenciales en el repositorio.
