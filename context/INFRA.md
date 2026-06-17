# Infraestructura

## Objetivo

Hospedar `https://codelabsecuador.com` como sitio estatico en AWS con una arquitectura simple, segura y mantenible:

- S3 privado como origen de archivos estaticos.
- CloudFront como CDN publica.
- Origin Access Control (OAC) entre CloudFront y S3.
- ACM en `us-east-1` para el certificado TLS de CloudFront.
- Route 53 para `codelabsecuador.com` y `www.codelabsecuador.com`.
- GitHub Actions para build, sync a S3 e invalidacion de CloudFront.

## Estructura CDK recomendada

Existe `infra/` con AWS CDK v2 en TypeScript:

- `infra/bin/codelabs-web.ts`: entrypoint CDK.
- `infra/lib/static-site-stack.ts`: stack principal.
- `infra/lib/config.ts`: configuracion tipada por ambiente.
- `infra/package.json`, `tsconfig.json`, `cdk.json`: tooling de CDK.

Ambiente inicial:

- `prod`
- Dominio apex: `codelabsecuador.com`
- Alias adicional: `www.codelabsecuador.com`
- Region del stack: `us-east-1` recomendado para simplificar ACM + CloudFront.
- Perfil local esperado: `codelabs`.

## Recursos

Stack `CodelabsWebProdStack`:

- Hosted zone lookup para `codelabsecuador.com`.
- Certificado ACM validado por DNS.
- Bucket S3 privado con:
  - Block Public Access habilitado.
  - Versioning habilitado.
  - Encryption S3 managed.
  - RemovalPolicy conservador para produccion.
- CloudFront distribution con:
  - Default root object `index.html`.
  - HTTPS redirect.
  - HTTP/2 y HTTP/3 si esta disponible.
  - OAC para S3.
  - Custom error responses para rutas SPA/export estatico cuando aplique.
  - Security headers response policy.
- Route 53:
  - A/AAAA apex a CloudFront.
  - A/AAAA `www` a CloudFront o redireccion si se implementa aparte.
- Outputs:
  - Bucket name.
  - Distribution ID.
  - Distribution domain.
  - Site URL.
  - GitHub Actions role ARN.

## Separacion de responsabilidades

- CDK crea y gobierna infraestructura.
- GitHub Actions publica artefactos generados por Next.
- La aplicacion no debe conocer detalles de S3/CloudFront.
- Secrets y permisos de despliegue viven fuera del codigo.

## Seguridad

- No usar buckets publicos.
- Usar OIDC de GitHub a AWS, no access keys estaticas.
- IAM role limitado a:
  - Sync contra el bucket del sitio.
  - Invalidacion de la distribucion CloudFront.
  - Lectura minima de metadatos necesarios.
- El deploy de infraestructura CDK debe quedar separado del deploy de contenido.

## Deuda Tecnica

- Hosted zone encontrada por CDK synth: `Z04488832YM9VCPO41EJM`.
- Hoy apex y `www` sirven el mismo contenido; si se quiere canonical estricto, agregar redirect `www -> apex`.
- Definir politica de retencion final para el bucket productivo antes del primer deploy real.
