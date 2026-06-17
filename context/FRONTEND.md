# Frontend

## Arquitectura actual

La aplicacion usa Next.js App Router con route groups:

- `app/(site)/page.tsx`: landing principal.
- `app/(site)/sections/`: secciones de la landing.
- `app/(legal)/`: paginas legales.
- `app/data/`: datos estaticos de clientes, capacidades, casos y stack.
- `app/ui/`: componentes compartidos.
- `public/`: logos, iconos PWA, favicon y assets publicos.

## Convenciones

- Mantener componentes pequenos por seccion.
- Mantener datos repetibles en `app/data/` en vez de hardcodearlos dentro de componentes.
- Usar TypeScript estricto y alias `@/*`.
- No introducir estado o dependencias de runtime si el contenido puede permanecer estatico.
- La landing debe ser visualmente corporativa, clara y enfocada en conversion/contacto.

## Build estatico

El objetivo de hosting es S3 + CloudFront. Para eso el sitio debe poder generar `out/` con `next build` y `output: "export"`.

Requisitos antes de conectar CI/CD:

- `output: "export"` en `next.config.ts`.
- Mantener `images.unoptimized: true` mientras se use export estatico.
- Validar que todas las rutas legales se prerendericen correctamente.
- Evitar APIs server-only, server actions o rutas dinamicas que rompan export estatico.

## Verificacion

Antes de cerrar cambios frontend:

- `npm run lint`
- `npm run build`

## Deuda Tecnica

- Revisar si conviene self-hostear la fuente para evitar dependencia de Google Fonts durante build.
- Evaluar `eslint.ignoreDuringBuilds`; hoy el build omite lint, pero el pipeline debe ejecutar lint como paso separado y obligatorio.
