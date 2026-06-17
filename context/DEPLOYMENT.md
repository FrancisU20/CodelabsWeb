# Deployment

## Flujo objetivo

Pipeline en GitHub Actions para desplegar el sitio estatico a AWS:

1. Checkout.
2. Setup Node segun Volta/package.
3. `npm ci`.
4. `npm run lint`.
5. `npm run build`.
6. Validar existencia de `out/index.html`.
7. Autenticacion AWS por OIDC.
8. Sync de `out/` a S3.
9. Invalidacion de CloudFront.

## Branching

- Rama productiva actual: `master`.
- El pipeline de produccion debe disparar en push a `master`.
- Los pull requests deben ejecutar lint/build sin desplegar.

## GitHub Actions recomendadas

Archivos:

- `.github/workflows/ci.yml`: validacion para PRs y pushes.
- `.github/workflows/deploy-prod.yml`: despliegue productivo a AWS en push a `master` y `workflow_dispatch`.

Variables/secrets esperados:

- `AWS_ROLE_TO_ASSUME`: role OIDC para GitHub Actions.
- `AWS_REGION`: `us-east-1`.
- `SITE_BUCKET_NAME`: bucket creado por CDK.
- `CLOUDFRONT_DISTRIBUTION_ID`: distribution creada por CDK.

Preferir GitHub repository variables para valores no secretos y secrets solo para informacion sensible.

## Reglas operativas

- No hacer `git push` sin confirmar remote/cuenta.
- No ejecutar `cdk deploy` sin confirmar perfil AWS.
- El deploy de contenido no debe crear infraestructura.
- El deploy de infraestructura no debe depender de secretos de GitHub ya configurados.

## Deuda Tecnica

- Falta ejecutar primer `cdk deploy` y copiar outputs a variables de GitHub.
- El pipeline invalida `/*` siempre; para este sitio corporativo es aceptable, pero se puede optimizar si crece.
