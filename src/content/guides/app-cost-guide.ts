import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { faq, list, paragraph, section, table, usd } from "./guide-tokens";

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
      paragraph(
        `El precio de una app depende de lo que tiene que hacer, no de cuántas pantallas tiene. Una app para que tus clientes reserven o vean tu catálogo puede costar desde ${usd(mobile.installableWeb)}. Una app con pagos, integraciones con tus sistemas y un panel para tu equipo parte de ${usd(mobile.midsize)}. Una plataforma para una gran empresa, con varios tipos de usuarios y conexión al ERP, parte de ${usd(mobile.enterprise)}.`,
      ),
      paragraph(
        "Son precios de referencia del mercado ecuatoriano en 2026 y los que manejamos en CodeLabs. El precio final siempre sale de una propuesta con alcance, tiempo y costo definidos.",
      ),
    ),
    section(
      "Precios por tipo de app",
      table(
        ["Tipo de app", "Para quién", "Desde", "Plazo típico"],
        ["App web instalable (PWA): se instala desde el navegador, sin pasar por las tiendas", "Pequeño negocio que quiere empezar", usd(mobile.installableWeb), "4 a 6 semanas"],
        ["App sencilla en App Store y Google Play: reservas, catálogo, perfil y notificaciones", "Pequeño negocio", usd(mobile.storeApp), "6 a 10 semanas"],
        ["App con pagos, integraciones y panel de administración", "Empresa mediana", usd(mobile.midsize), "3 a 5 meses"],
        ["Plataforma empresarial: varios roles, integración con ERP, biometría y alto volumen", "Gran empresa", usd(mobile.enterprise), "Desde 5 meses"],
      ),
      paragraph(
        "Desarrollamos una sola base de código para iPhone y Android. Por eso una app en las dos tiendas no cuesta el doble: el mismo equipo construye ambas versiones a la vez.",
      ),
    ),
    section(
      "De qué depende el precio",
      list(
        "Cuántos tipos de usuario tiene: una app solo para clientes es más simple que una con clientes, repartidores y administradores.",
        "Si cobra dentro de la app: los pagos con tarjeta exigen una pasarela, validaciones y más pruebas.",
        "Si se conecta con tus sistemas: inventario, facturación, ERP o CRM. Cada integración suma trabajo, sobre todo si el sistema no tiene una API documentada.",
        "Si usa el hardware del celular: cámara, lector de código de barras, GPS o reconocimiento facial.",
        "Si maneja datos sensibles: salud, banca o identidad exigen más seguridad, auditoría y pruebas.",
        "El diseño: usar una base visual probada es más rápido que diseñar cada pantalla desde cero.",
      ),
    ),
    section(
      "Costos que no son del desarrollo",
      paragraph("Además del desarrollo hay costos que pagas a terceros y que conviene tener en cuenta desde el inicio:"),
      list(
        `Cuenta de desarrollador de Apple: ${usd(appStoreYearly)} al año, necesaria para publicar en App Store.`,
        `Cuenta de Google Play: ${usd(googlePlayOnce)} una sola vez.`,
        "Servidores y base de datos en la nube: en una app pequeña suelen ser unos pocos dólares al mes y crecen con el uso.",
        `Mantenimiento: actualizaciones de iOS y Android, corrección de errores y mejoras. En CodeLabs parte de ${usd(maintenance.small)} al mes.`,
      ),
    ),
    section(
      "¿App web instalable o app en las tiendas?",
      paragraph(
        "Una app web instalable (PWA) se abre desde el navegador, se puede agregar a la pantalla de inicio y funciona en cualquier celular. Es la forma más económica de empezar y no depende de la aprobación de Apple o Google.",
      ),
      paragraph(
        "Conviene publicar en las tiendas cuando necesitas notificaciones constantes, usar a fondo la cámara o los sensores, o cuando tus clientes esperan encontrarte en App Store y Google Play. Muchas empresas empiezan con una app web y la llevan a las tiendas cuando validan que sus clientes la usan.",
      ),
    ),
    section(
      "Cómo bajar el costo sin bajar la calidad",
      list(
        "Empieza por lo esencial: la primera versión debe resolver un problema concreto. Lo demás se agrega por etapas.",
        "Define el alcance por escrito antes de empezar: evita cambios que encarecen el proyecto a mitad de camino.",
        "Aprovecha lo que ya tienes: si tu sistema de facturación o inventario tiene API, integrarlo cuesta menos que rehacerlo.",
        "Prueba cada etapa: ver la app funcionando cada pocas semanas evita descubrir errores caros al final.",
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
