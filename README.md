# CodeLabs Web

Sitio corporativo estático de CodeLabs Ecuador (`codelabsecuador.com`), con Next.js, React, TypeScript y Tailwind CSS. El repositorio incluye la infraestructura AWS CDK y el pipeline de publicación. El historial de cambios es Git.

## Requisitos

- Node.js 22.23.3 (fijado con Volta) y npm.

## Uso local

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm start
```

`npm start` sirve el export de `out/` generado por `npm run build`.

## Estructura

- `src/app/`: rutas de Next.js.
- `src/views/`: arma cada página con secciones.
- `src/features/`: una carpeta por sección del sitio.
- `src/layout/`: menú, pie, botón de WhatsApp y encabezado de subpáginas.
- `src/shared/`: componentes reutilizables sin conocimiento del negocio (botones, secciones, tarjetas, íconos, dispositivos, animaciones).
- `src/showcase/`: pantallas de ejemplo de apps ficticias.
- `src/i18n/`: idiomas, rutas, SEO y textos en español e inglés.
- `src/config/` y `src/content/`: datos del sitio, contacto, clientes, textos legales e imágenes.
- `src/styles/`: tokens de diseño, fuentes y estilos globales.
- `infra/`: infraestructura AWS CDK.

ESLint hace cumplir la dirección de dependencias `app → views → features/layout → showcase → shared`, y una prueba mantiene colores, botones e imágenes en sus módulos centrales.

## Publicación

Un merge a `master` publica el sitio. La infraestructura se despliega con el workflow manual `Deploy Infrastructure`.
