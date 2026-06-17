# Plan de implementacion

## Objetivo

Dejar CodeLabs Web desplegable en AWS con infraestructura como codigo, dominio productivo y pipeline CI/CD mantenible.

## Estado actual

- Fases 1, 2 y 3 implementadas en codigo.
- Pendiente ejecutar el primer deploy real de infraestructura.
- Pendiente configurar variables de GitHub con outputs del stack.
- Pendiente push a `master` para activar despliegue de contenido.

## Fase 1 - Base del sitio estatico

1. Corregir `next.config.ts` para export estatico real con `output: "export"`.
2. Ejecutar `npm run lint` y `npm run build`.
3. Verificar que `out/` contiene rutas legales y landing.
4. Ajustar cualquier ruta o asset que no sea compatible con export estatico.

## Fase 2 - Infraestructura CDK

1. Crear `infra/` con CDK v2 en TypeScript.
2. Modelar configuracion tipada por ambiente (`prod`).
3. Crear stack de sitio estatico:
   - Hosted zone lookup.
   - Certificado ACM DNS validated.
   - Bucket S3 privado.
   - CloudFront con OAC.
   - Route 53 apex y `www`.
   - Outputs para CI/CD.
4. Crear role IAM para GitHub OIDC con permisos minimos para deploy de contenido.
5. Ejecutar synth local.

## Fase 3 - Pipeline GitHub Actions

1. Crear workflow de CI para PRs y pushes.
2. Crear workflow de deploy productivo en push a `master`.
3. Usar OIDC hacia AWS.
4. Sincronizar `out/` a S3 con cache headers adecuados:
   - Assets versionados: cache largo.
   - HTML/manifest: cache corto o no-cache.
5. Invalidar CloudFront al final.

## Fase 4 - Primer despliegue

1. Confirmar perfil AWS: esperado `codelabs`.
2. Confirmar hosted zone de `codelabsecuador.com` en AWS.
3. Ejecutar `cdk bootstrap` si la cuenta/region no esta preparada.
4. Ejecutar `cdk deploy` del stack productivo.
5. Configurar variables/secrets de GitHub con outputs del stack.
6. Confirmar remote GitHub `FrancisU20/CodelabsWeb`.
7. Push a `master` para disparar pipeline.

## Fase 5 - Validacion productiva

1. Verificar `https://codelabsecuador.com`.
2. Verificar `https://www.codelabsecuador.com`.
3. Verificar paginas legales:
   - `/terminos`
   - `/privacidad`
   - `/tratamiento-datos`
   - `/desuscripcion`
4. Verificar TLS, redirect HTTP->HTTPS y cache headers.
5. Revisar CloudFront distribution y Route 53 records.

## Criterios de terminado

- Infraestructura versionada en CDK.
- Pipeline CI/CD versionado.
- Dominio productivo funcionando con TLS.
- S3 privado sin acceso publico.
- CloudFront sirviendo el sitio.
- Deploy reproducible desde GitHub Actions.
- Lint y build pasan.

## Riesgos

- Si la hosted zone no esta en AWS, hay que migrar DNS o crear registros en el proveedor actual.
- ACM para CloudFront debe estar en `us-east-1`.
- `next/font` depende de red durante build; se puede mitigar self-hosteando la fuente.
- Las credenciales por OIDC requieren configurar trust policy exacta para `FrancisU20/CodelabsWeb`.
