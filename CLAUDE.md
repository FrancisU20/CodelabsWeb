# CodeLabs Web - Memoria local

## Contexto

Sitio corporativo de CodeLabs Ecuador en `https://codelabsecuador.com`.

Repositorio personal bajo `~/Documents/CodeLabs/Proyectos/`, por lo tanto:

- Cloud objetivo: AWS.
- Perfil AWS esperado: `codelabs`.
- Plataforma Git: GitHub.
- Cuenta GitHub esperada: `FrancisU20`.
- `CLAUDE.md` y `context/` se versionan normalmente.

## Stack actual

- Next.js 15 con App Router.
- React 18.
- TypeScript estricto.
- Tailwind CSS 4.
- Sitio estatico corporativo con paginas legales.
- Dominio canonical configurado en metadata: `https://codelabsecuador.com`.
- Infraestructura AWS CDK v2 en `infra/`.
- CI/CD con GitHub Actions en `.github/workflows/pipeline.yml`.

## Memorias de contexto

Leer estos archivos segun la capa antes de tocar codigo:

- `context/FRONTEND.md`: estructura de la web, convenciones visuales y build.
- `context/LEGAL.md`: paginas legales y datos de cumplimiento.
- `context/INFRA.md`: arquitectura AWS objetivo con CDK, S3, CloudFront, ACM y Route 53.
- `context/DEPLOYMENT.md`: flujo de CI/CD esperado con GitHub Actions.
- `context/IMPLEMENTATION_PLAN.md`: plan acordado para dejar el proyecto listo para despliegue productivo.

## Comandos

- Instalar dependencias: `npm ci`
- Lint: `npm run lint`
- Build: `npm run build`

Notas:

- `npm run build` usa `next/font` con Google Fonts, por lo que puede requerir red.
- Antes de cerrar cambios, ejecutar lint y build cuando sea razonable.

## Git

- Rama actual esperada: `master`.
- Remote esperado: `origin -> https://github.com/FrancisU20/CodelabsWeb.git`.
- No incluir `Co-Authored-By` en commits.
- Antes de cualquier `git push`, confirmar explicitamente que el remote apunta a la cuenta correcta.

## AWS/CDK

- Nunca usar perfil `default`.
- Antes de cualquier `cdk deploy`, confirmar el perfil AWS con el usuario.
- Para este proyecto, el perfil esperado por ruta es `codelabs`.

## Deuda Tecnica

- Falta ejecutar `cdk deploy` productivo y configurar las variables de GitHub con los outputs reales.
- `npm ci` reporto vulnerabilidades moderadas/altas; revisar con `npm audit` en una tarea separada.
