# ADR 0002: Sistema de diseño centralizado del sitio

- Estado: aceptada
- Fecha: 2026-11-10

## Contexto

El sitio creció sección por sección. Una auditoría encontró unos 60 colores escritos a mano fuera de los tokens, 20 radios de borde distintos, 57 tamaños de letra, 9 márgenes verticales de sección, botones con estilos propios y rutas de imágenes repartidas en varios módulos. Cambiar la fuente, un color o el estilo de un botón exigía tocar muchos archivos y dejaba partes sin actualizar.

## Decisión

1. **Tokens únicos.** `src/styles/tokens.css` define colores, escala tipográfica (`--text-*`), radios (`--radius-*`), espaciado de secciones (`--spacing-*`) y sombras (`--shadow-*`). Las escalas viven en `@theme static`, así que sirven como variables en los módulos CSS y como clases de Tailwind. Las fuentes se cargan en `src/styles/fonts.ts`.
2. **Componentes base** en `src/shared/ui`: `Button` y `ButtonLink` (variantes `primary`, `outline` y `light`; tamaños `md` y `sm`), `Section` (tonos `default`, `mist`, `night` y `brand`; espaciado `section` y `tight`), `Card` y `Kicker`. Ninguna sección define sus propios botones, fondos de franja ni etiquetas.
3. **Imágenes desde un registro.** `src/content/images.ts` contiene todas las rutas de imágenes; los íconos salen solo del sprite de `src/shared/ui/icons`.
4. **Excepciones deliberadas.** Las pantallas de ejemplo de `src/showcase` y las marcas ficticias del sprite conservan sus propios colores, porque imitan otras marcas.
5. **Candado.** `src/styles/central-modules.test.ts` falla si aparece un color literal, una clase de botón o una ruta de imagen fuera de su módulo central.

## Consecuencias

- Cambiar la fuente, la paleta, un radio o un botón se hace en un solo archivo.
- Una sección nueva se arma con `Section`, `Card`, `Kicker` y `Button` en lugar de estilos propios.
- El candado corre en el pipeline de calidad y bloquea los retrocesos.
