# Infraestructura de CodeLabs Web

Guía operativa de la aplicación AWS CDK v2 que publica `codelabsecuador.com`. La arquitectura y la entrega se documentan en el [resumen técnico](../Documentación/resumen_tecnico_codelabs_web.adoc) y el [anexo de arquitectura y flujos](../Documentación/modules/arquitectura_y_flujos.adoc).

## Validación

```bash
npm ci
npm run build
npm run synth -- -c stage=prod --profile codelabs
```

## Despliegue manual

Antes de desplegar se deben confirmar el perfil, la cuenta, la región y la hosted zone. El perfil local esperado es `codelabs`.

```bash
npm run cdk -- deploy -c stage=prod --profile codelabs
```

El stack importa por defecto el proveedor OIDC de GitHub desde la cuenta CDK actual. Solo si debe sobrescribirse:

```bash
GITHUB_OIDC_PROVIDER_ARN=arn:aws:iam::<account-id>:oidc-provider/token.actions.githubusercontent.com \
  npm run cdk -- deploy -c stage=prod --profile codelabs
```

## Variables del repositorio GitHub

Después del deploy CDK, configurar desde los outputs del stack:

- `AWS_ROLE_TO_ASSUME`: `GitHubActionsRoleArn`.
- `AWS_REGION`: `us-east-1`.
- `SITE_BUCKET_NAME`: `SiteBucketName`.
- `CLOUDFRONT_DISTRIBUTION_ID`: `CloudFrontDistributionId`.

No almacenar access keys ni credenciales en el repositorio.
