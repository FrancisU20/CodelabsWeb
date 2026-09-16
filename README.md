# CodeLabs Web

Sitio corporativo estático de CodeLabs Ecuador, construido con Next.js, React, TypeScript y Tailwind CSS. El mismo repositorio contiene la infraestructura AWS CDK y el pipeline de publicación.

## Requisitos

- Node.js 20.19.6, fijado mediante Volta.
- npm.

## Uso local

```bash
npm ci
npm run dev
npm run lint
npm run build
npm start
```

`npm start` sirve el export generado en `out/`; requiere ejecutar primero `npm run build`.

## Estructura

- `app/`: rutas, layouts, componentes, datos e internacionalización.
- `public/`: identidad visual, logos, manifest e iconos.
- `infra/`: aplicación AWS CDK y su guía operativa.
- `.github/`: workflow y acciones compuestas de CI/CD.
- `Documentación/`: documentación técnica formal y canónica.
- `docs/exec-plans/`: planes locales de continuidad para trabajo asistido, excluidos de Git.

## Infraestructura

```bash
cd infra
npm ci
npm run build
npm run synth -- -c stage=prod --profile codelabs
```

El despliegue de infraestructura es manual. Antes de ejecutar `cdk deploy`, se deben confirmar perfil, cuenta, región y hosted zone; el perfil local esperado es `codelabs`.

## Documentación

La rama remota `origin/master`, después de `git fetch origin master`, es la fuente de verdad del código y de los cambios integrados. El estado de Git identifica el trabajo local pendiente; los planes de continuidad y la memoria de las herramientas de IA son auxiliares.

La fuente formal es [Documentación/resumen_tecnico_codelabs_web.adoc](Documentación/resumen_tecnico_codelabs_web.adoc); sus derivados publicables son [HTML](Documentación/resumen_tecnico_codelabs_web.html) y [PDF](Documentación/resumen_tecnico_codelabs_web.pdf). El detalle selectivo se mantiene en `Documentación/modules/` y `Documentación/matrices/`.

La documentación formal se genera desde `origin/master` refrescado, en un worktree detached limpio, y se regenera después de integrar cambios. `Documentación/provenance.json` identifica el commit documentado.

Este README es una guía de entrada y no reemplaza la documentación técnica canónica.

## Contexto multi-IA

Este repositorio adopta el protocolo global 2.2. Codex carga `AGENTS.md`; Claude Code carga `CLAUDE.md`, cuyo único contenido es `@AGENTS.md`. Las instrucciones globales de ambas herramientas mantienen el mismo protocolo.

`AGENTS.md`, `CLAUDE.md` y `docs/exec-plans/` son estado local de trabajo y se excluyen mediante el archivo privado de Git `info/exclude`; no se versionan ni se añaden a `.gitignore`.
