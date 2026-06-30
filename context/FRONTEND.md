# Frontend

## Arquitectura actual

El sitio es multi-pagina (no single-page con anchors). Next.js App Router con
route groups:

- `app/(site)/layout.tsx`: layout compartido del grupo `(site)` con Navbar,
  Footer y WhatsAppButton. Todas las paginas de `(site)` heredan esto.
- `app/(site)/page.tsx`: home (Hero, TrustBar, ValueProp, Clients, teasers de
  Capabilities y CaseStudies, CtaBanner).
- `app/(site)/servicios/`, `app/(site)/casos/`, `app/(site)/nosotros/`,
  `app/(site)/contacto/`: paginas propias, cada una con su `PageIntro` y
  `metadata` (title/description) especifico de la ruta.
- `app/(site)/sections/`: secciones reutilizables. Algunas tienen version
  completa (para su pagina dedicada) y version `-teaser` mas corta (para el
  home), p.ej. `capabilities.tsx` + `capabilities-teaser.tsx`.
- `app/(site)/en/`: mismas paginas que arriba pero en ingles, con slugs
  propios (`/en`, `/en/services`, `/en/case-studies`, `/en/about`,
  `/en/contact`). Comparten el mismo `app/(site)/layout.tsx`.
- `app/(legal)/`: paginas legales. Solo existen en espanol (fuera de alcance
  de la traduccion); el footer enlaza a ellas igual en ambos idiomas.
- `app/data/`: datos estaticos de clientes, capacidades, casos y stack.
  Capacidades, casos y clientes tienen campos localizados
  (`Record<"es" | "en", string>`); `stack.ts` no se traduce (nombres de
  tecnologia).
- `app/ui/`: componentes compartidos (`logo.tsx`, `page-intro.tsx`,
  `whatsapp-button.tsx`, `html-lang-sync.tsx`).
- `public/brand/`: wordmark y appicon en SVG (identidad oficial).
- `public/`: favicons, iconos PWA y logos de clientes/AWS.

## Internacionalizacion (i18n)

Espanol es el idioma por defecto (sin prefijo de ruta); ingles vive bajo el
prefijo `/en` con slugs propios en ingles. No se usa middleware ni
`[locale]` dinamico: son dos arboles de rutas estaticos separados dentro del
mismo grupo `(site)`, lo cual es compatible con `output: "export"` sin
necesitar runtime de servidor.

- `app/i18n/locale.ts`: tipo `Locale` (`"es" | "en"`) y `defaultLocale`.
- `app/i18n/paths.ts`: `getRoutes(locale)` (rutas por idioma) y
  `getAlternatePath(pathname, target)` (mapeo es↔en para el selector de
  idioma). `localeFromPathname` detecta el locale actual a partir de
  `usePathname()`.
- `app/i18n/dictionary.ts`: diccionario tipado (`Dictionary`) con todo el
  copy de UI en `es` y `en`. Cada seccion recibe el copy via
  `getDictionary(locale)`, nunca hardcodeado en el JSX.
- Cada seccion (`app/(site)/sections/*`) recibe un prop `locale: Locale`
  explicito desde la pagina que la renderiza — no hay locale "global" en
  contexto, porque cada pagina ya sabe su propio idioma en build time.
- `Navbar`, `Footer` y `WhatsAppButton` son la excepcion: son compartidos por
  el layout y detectan su locale ellos mismos via `usePathname()` +
  `localeFromPathname`, porque el layout no recibe parametro de locale.
- `HtmlLangSync` (`app/ui/html-lang-sync.tsx`) sincroniza
  `document.documentElement.lang` en cliente segun la ruta, porque el
  `<html lang>` del root layout es unico y estatico para toda la app.
- Cada pagina nueva debe declarar `metadata.alternates.languages` con su
  contraparte en el otro idioma (hreflang).

### Como agregar una pagina nueva (con ambos idiomas)

1. Crear la pagina en espanol bajo `app/(site)/<slug>/page.tsx` pasando
   `locale="es"` a cada seccion.
2. Crear la contraparte en `app/(site)/en/<slug-en>/page.tsx` con
   `locale="en"`.
3. Agregar el par de rutas a `pathPairs` en `app/i18n/paths.ts` y a
   `getRoutes()`.
4. Agregar las claves de copy nuevas a `Dictionary` (en `dictionary.ts`) en
   `es` y `en`.

## Identidad de marca

- Paleta Indigo (`#4F46E5` + escala de claros, negro `#0E0E10`) definida como
  tokens en `app/globals.css` (`--primary`, `--primary-start/end`, `--surface`).
- El extremo claro del gradiente de botones (`--primary-end`) es `#6D5FEF`, no
  el indigo claro decorativo (`#818CF8`): ese tono mas oscuro es el que
  mantiene contraste AA con texto blanco. `#818CF8` se reserva para elementos
  puramente decorativos (puntos, blobs) sin texto encima.
- Tipografia: Geist (paquete `geist`, autohospedada vía `geist/font/sans`), sin
  dependencia de Google Fonts en build.

## Convenciones

- Mantener componentes pequenos por seccion.
- Mantener datos repetibles en `app/data/` en vez de hardcodearlos dentro de componentes.
- Usar TypeScript estricto y alias `@/*`.
- No introducir estado o dependencias de runtime si el contenido puede permanecer estatico.
- Cada pagina nueva de `(site)` debe llevar su propio `metadata` (title/description).
- El sitio debe ser visualmente de startup de software, claro y enfocado en conversion/contacto.

## Build estatico

El objetivo de hosting es S3 + CloudFront. Para eso el sitio debe poder generar `out/` con `next build` y `output: "export"`.

Requisitos antes de conectar CI/CD:

- `output: "export"` en `next.config.ts`.
- Mantener `images.unoptimized: true` mientras se use export estatico.
- Validar que todas las rutas legales se prerendericen correctamente.
- Evitar APIs server-only, server actions o rutas dinamicas que rompan export estatico.

`next start` no funciona con `output: "export"` (Next.js lo rechaza
explicitamente). El script `npm start` usa `serve out` en su lugar — por eso
requiere haber corrido `npm run build` antes.

## Verificacion

Antes de cerrar cambios frontend:

- `npm run lint`
- `npm run build`
- Opcional, para revisar el resultado real servido como estatico: `npm start`
  (sirve `out/` en `http://localhost:3000`)

## Deuda Tecnica

- Evaluar `eslint.ignoreDuringBuilds`; hoy el build omite lint, pero el pipeline debe ejecutar lint como paso separado y obligatorio.
