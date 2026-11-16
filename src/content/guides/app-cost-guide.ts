import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { answer, faq, paragraph, points, section, steps, tiers, usd } from "./guide-tokens";

const { mobile, maintenance, appStoreYearly, googlePlayOnce } = PRICE_LIST;

export const appCostGuide: Guide = {
  slug: "cuanto-cuesta-desarrollar-una-app-en-ecuador",
  title: "¿Cuánto cuesta desarrollar una app en Ecuador?",
  metaTitle: "¿Cuánto cuesta desarrollar una app en Ecuador? Precios 2026 | CodeLabs",
  metaDescription: `Precios reales para desarrollar una app en Ecuador: desde ${usd(mobile.installableWeb)} una app web instalable hasta plataformas empresariales. Qué incluye cada nivel y de qué depende el costo.`,
  summary: `Una app en Ecuador cuesta desde ${usd(mobile.installableWeb)} si es una app web instalable, desde ${usd(mobile.storeApp)} si se publica en App Store y Google Play, y desde ${usd(mobile.enterprise)} si es una plataforma empresarial. Aquí te explicamos qué incluye cada nivel.`,
  published: "2026-11-15",
  sections: [
    section(
      "La respuesta corta",
      answer("El precio de una app depende de lo que tiene que hacer, no de cuántas pantallas tiene."),
      paragraph(
        `Una app para que tus clientes reserven o vean tu catálogo puede costar desde ${usd(mobile.installableWeb)}. Una app con pagos, integraciones con tus sistemas y un panel para tu equipo parte de ${usd(mobile.midsize)}. Una plataforma para una gran empresa, con varios tipos de usuarios y conexión al ERP, parte de ${usd(mobile.enterprise)}. Son precios de referencia del mercado ecuatoriano en 2026; el precio final siempre sale de una propuesta con alcance y cronograma.`,
      ),
    ),
    section(
      "Precios por tipo de app",
      tiers(
        { name: "App web instalable", price: usd(mobile.installableWeb), detail: "4 a 6 semanas · pequeño negocio", text: "Se instala desde el navegador, sin pasar por las tiendas." },
        { name: "App en las tiendas", price: usd(mobile.storeApp), detail: "6 a 10 semanas · pequeño negocio", text: "Reservas, catálogo, perfil y notificaciones en App Store y Google Play." },
        { name: "Pagos e integraciones", price: usd(mobile.midsize), detail: "3 a 5 meses · empresa mediana", text: "Pagos con tarjeta, conexión con tus sistemas y panel de administración." },
        { name: "Plataforma empresarial", price: usd(mobile.enterprise), detail: "Desde 5 meses · gran empresa", text: "Varios roles, integración con ERP, biometría y alto volumen." },
      ),
      paragraph(
        "Desarrollamos una sola base de código para iPhone y Android. Por eso una app en las dos tiendas no cuesta el doble: el mismo equipo construye ambas versiones a la vez.",
      ),
    ),
    section(
      "De qué depende el precio",
      points(
        ["Tipos de usuario", "Una app solo para clientes es más simple que una con clientes, repartidores y administradores."],
        ["Pagos dentro de la app", "Los pagos con tarjeta exigen una pasarela, validaciones y más pruebas."],
        ["Conexión con tus sistemas", "Inventario, facturación, ERP o CRM. Cada integración suma trabajo, sobre todo sin una API documentada."],
        ["Hardware del celular", "Cámara, lector de código de barras, GPS o reconocimiento facial."],
        ["Datos sensibles", "Salud, banca o identidad exigen más seguridad, auditoría y pruebas."],
        ["Diseño", "Una base visual probada es más rápida que diseñar cada pantalla desde cero."],
      ),
    ),
    section(
      "Costos que no son del desarrollo",
      paragraph("Además del desarrollo hay costos que pagas a terceros y que conviene tener en cuenta desde el inicio:"),
      points(
        ["Cuenta de Apple", `${usd(appStoreYearly)} al año, necesaria para publicar en App Store.`],
        ["Cuenta de Google Play", `${usd(googlePlayOnce)} una sola vez.`],
        ["Servidores en la nube", "En una app pequeña suelen ser unos pocos dólares al mes y crecen con el uso."],
        ["Mantenimiento", `Actualizaciones de iOS y Android, corrección de errores y mejoras. En CodeLabs parte de ${usd(maintenance.small)} al mes.`],
      ),
    ),
    section(
      "¿App web instalable o app en las tiendas?",
      points(
        [
          "App web instalable",
          "Se abre desde el navegador, se agrega a la pantalla de inicio y funciona en cualquier celular. Es la forma más económica de empezar y no depende de la aprobación de Apple o Google.",
        ],
        [
          "App en las tiendas",
          "Conviene cuando necesitas notificaciones constantes, usar a fondo la cámara o los sensores, o cuando tus clientes esperan encontrarte en App Store y Google Play.",
        ],
      ),
      paragraph("Muchas empresas empiezan con una app web y la llevan a las tiendas cuando validan que sus clientes la usan."),
    ),
    section(
      "Cómo bajar el costo sin bajar la calidad",
      steps(
        ["Empieza por lo esencial", "La primera versión resuelve un problema concreto. Lo demás se agrega por etapas."],
        ["Alcance por escrito", "Evita cambios que encarecen el proyecto a mitad de camino."],
        ["Aprovecha lo que tienes", "Si tu facturación o inventario tiene API, integrarlo cuesta menos que rehacerlo."],
        ["Prueba cada etapa", "Ver la app funcionando cada pocas semanas evita errores caros al final."],
      ),
    ),
  ],
  faqs: [
    faq(
      "¿Cuál es la app más barata que puedo tener?",
      `Una app web instalable, desde ${usd(mobile.installableWeb)}. Funciona en cualquier celular, se agrega a la pantalla de inicio y no requiere cuentas en las tiendas.`,
    ),
    faq(
      "¿Cuánto tiempo toma desarrollar una app?",
      "Una app sencilla toma entre 4 y 10 semanas. Una app con pagos e integraciones, entre 3 y 5 meses. Una plataforma empresarial, desde 5 meses, con entregas por etapas.",
    ),
    faq(
      "¿La app es mía cuando se termina?",
      "Sí. El código y las cuentas de las tiendas quedan a nombre de tu empresa. Revisa siempre que el contrato lo diga de forma explícita.",
    ),
    faq(
      "¿Por qué hay precios tan distintos en el mercado?",
      "Porque detrás de la palabra \"app\" hay proyectos muy distintos. Compara siempre propuestas con el mismo alcance, y desconfía de precios muy bajos que no detallan qué incluyen.",
    ),
  ],
  services: ["mobile", "web", "custom"],
};
