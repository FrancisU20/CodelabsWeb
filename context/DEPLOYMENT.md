# Deployment

## Flujo actual

El despliegue vive en un solo workflow: `.github/workflows/pipeline.yml`.

El flujo usa jobs como stages:

1. `Plan / Detect Changes`
2. `Web / Quality Gate`
3. `Infra / Validate CDK`
4. `Deploy / Static Site`
5. `Pipeline / Summary`

El primer stage detecta cambios y decide que ejecutar:

- Cambios web (`app/`, `public/`, configs Next/TS/ESLint, `package*`) ejecutan quality gate web.
- Cambios infra (`infra/`) ejecutan validacion CDK.
- Cambios pipeline (`.github/workflows/`, `.github/actions/`) ejecutan web + infra de forma conservadora.
- Cambios docs-only ejecutan solo plan + summary.
- Archivos desconocidos en raiz se tratan conservadoramente como web + infra.

Deploy web a AWS:

1. Usa el artefacto `out/` generado por `Web / Quality Gate`.
2. Valida variables requeridas.
3. Autentica contra AWS por OIDC.
4. Sincroniza assets versionados con cache largo.
5. Sincroniza HTML/manifest con cache corto.
6. Invalida CloudFront.

Infra CDK:

- Se valida y sintetiza en CI.
- No se despliega automaticamente desde GitHub Actions.
- Los cambios de infraestructura se aplican manualmente con `cdk deploy` y confirmacion de perfil AWS.

## Branching

- Rama productiva actual: `master`.
- El pipeline de produccion debe disparar en push a `master`.
- Los pull requests deben ejecutar lint/build sin desplegar.

## GitHub Actions

Archivos:

- `.github/workflows/pipeline.yml`: pipeline unico de CI/CD.
- `.github/actions/setup-web/action.yml`: setup reutilizable de la app web.
- `.github/actions/setup-infra/action.yml`: setup reutilizable de CDK.

Variables esperadas:

- `AWS_ROLE_TO_ASSUME`: role OIDC para GitHub Actions.
- `AWS_REGION`: `us-east-1`.
- `SITE_BUCKET_NAME`: bucket creado por CDK.
- `CLOUDFRONT_DISTRIBUTION_ID`: distribution creada por CDK.

Preferir GitHub repository variables para valores no secretos y secrets solo para informacion sensible.

## Reglas operativas

- No hacer `git push` sin confirmar remote/cuenta.
- No ejecutar `cdk deploy` sin confirmar perfil AWS.
- El deploy de contenido no debe crear infraestructura.
- El deploy de infraestructura no se ejecuta automaticamente desde GitHub Actions.

## Deuda Tecnica

- El pipeline invalida `/*` siempre; para este sitio corporativo es aceptable, pero se puede optimizar si crece.
- Si el proyecto crece, separar ambientes `dev/staging/prod` con environments protegidos y aprobaciones.
