## CodeLabs Web (Next.js + Tailwind)

Landing estática para CodeLabs con App Router, Tailwind 4 y export estático. Incluye secciones de servicios, clientes, AWS, casos, contacto, políticas legales y botón flotante de WhatsApp.

### Requisitos
- Node 20.19.6 (Volta fijada en package.json)
- npm

### Scripts
- `npm run dev` — modo desarrollo
- `npm run build` — build de producción (export estático habilitado)
- `npm run start` — serve (no necesario si usas `next export`)
- `npm run lint` — ESLint
- `cd infra && npm run synth -- -c stage=prod --profile codelabs` — sintetiza la infraestructura CDK

### Estructura clave
- `app/(site)/page.tsx` — landing principal
- `app/(site)/sections/` — secciones (hero, clientes, capacidades, AWS, fundador, casos, stack, contacto-info, contacto, navbar, footer)
- `app/ui/` — componentes compartidos (logo, whatsapp-button)
- `app/data/` — datos de clientes, capacidades, casos y stack
- `app/(legal)/` — privacidad, tratamiento de datos, términos, desuscripción
- `public/logos/` — logos de clientes y AWS; favicon e íconos PWA en `public/`
- `infra/` — AWS CDK v2 para S3 privado, CloudFront, ACM, Route 53 y role OIDC de GitHub Actions
- `.github/workflows/` — CI y despliegue productivo a AWS

### Configuración
- `next.config.ts` con `output: "export"` y `images.unoptimized: true`
- Metadatos y dominio apuntan a `https://codelabsecuador.com`
- Manifest y apple-touch-icon referenciados en `app/layout.tsx`

### Despliegue
- Infraestructura: AWS CDK en `infra/`, stack `CodelabsWebProdStack`.
- Hosting: S3 privado + CloudFront con Origin Access Control.
- Dominio: `codelabsecuador.com` y `www.codelabsecuador.com` via Route 53.
- CI/CD: GitHub Actions con OIDC hacia AWS, sin access keys estáticas.
- Antes de `cdk deploy`, confirmar perfil AWS; para este proyecto el esperado es `codelabs`.
- Antes de `git push`, confirmar que el remote apunta a `FrancisU20/CodelabsWeb`.

### Notas
- Formulario de contacto abre WhatsApp con los datos capturados.
- Enlaces legales: `/privacidad`, `/tratamiento-datos`, `/terminos`, `/desuscripcion`.
- Ajusta emails/teléfono/dirección en `app/(site)/sections/footer.tsx` si cambian.
- El deploy productivo requiere configurar variables de GitHub con los outputs de CDK:
  `AWS_ROLE_TO_ASSUME`, `AWS_REGION`, `SITE_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID`.
