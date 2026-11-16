import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { checklist, faq, paragraph, points, section, steps, tiers, usd } from "./guide-tokens";

const { ai } = PRICE_LIST;

export const whatsappAiGuide: Guide = {
  slug: "chatbot-de-whatsapp-con-ia-para-empresas",
  title: "Chatbot de WhatsApp con IA para empresas: cómo funciona y qué necesitas",
  metaTitle: "Chatbot de WhatsApp con inteligencia artificial para empresas | CodeLabs",
  metaDescription: `Qué puede hacer un asistente con IA en WhatsApp, qué necesitas para tenerlo y cuánto cuesta: desde ${usd(ai.small)} de implementación y ${usd(ai.smallMonthly)} al mes.`,
  summary:
    "Un asistente con inteligencia artificial en WhatsApp atiende a tus clientes a cualquier hora, responde con la información de tu empresa y pasa la conversación a una persona cuando hace falta.",
  published: "2026-11-15",
  sections: [
    section(
      "Qué es y en qué se diferencia de un chatbot de menú",
      points(
        ["Chatbot de menú", "Obliga al cliente a elegir opciones: \"escribe 1 para horarios\". Solo da respuestas fijas."],
        ["Asistente con IA", "Entiende lo que el cliente escribe con sus palabras y responde con la información de tu empresa: productos, precios, stock, horarios o el estado de un trámite."],
      ),
      paragraph(
        "Además puede consultar tus sistemas, armar una cotización o agendar una cita, siempre dentro de las reglas que definas.",
      ),
    ),
    section(
      "Qué puede hacer por tu empresa",
      checklist(
        ["Atender a cualquier hora", "Dudas frecuentes, horarios, sucursales y promociones."],
        ["Consultar stock y precios", "En tus sistemas, y decir en qué local hay un producto."],
        ["Cotizar y tomar pedidos"],
        ["Agendar citas y enviar recordatorios"],
        ["Recibir pacientes o afiliados", "Hacer preguntas iniciales y conectarlos con un médico o un asesor."],
        ["Responder a la gerencia", "Stock, ventas o indicadores, preguntando por WhatsApp."],
        ["Resolver dudas internas", "Procesos de la empresa para el personal."],
      ),
      paragraph("Hemos construido asistentes así para una cadena de supermercados, una cadena de ferreterías y una red de salud en Ecuador."),
    ),
    section(
      "Qué necesitas para tenerlo",
      steps(
        ["Un número de WhatsApp Business", "Conectado a la API oficial de WhatsApp. Te ayudamos con el registro."],
        ["La información del negocio", "Catálogo, precios, políticas y preguntas frecuentes."],
        ["Acceso a tus sistemas", "Si quieres que consulte stock, pedidos o citas en tiempo real."],
        ["Reglas claras", "Qué responde, qué no y cuándo pasa la conversación a una persona."],
      ),
    ),
    section(
      "Cuánto cuesta",
      tiers(
        { name: "Pequeño negocio", price: usd(ai.small), detail: `Desde ${usd(ai.smallMonthly)} al mes`, text: "Responde con la información de tu negocio y pasa a una persona cuando hace falta." },
        { name: "Empresa mediana", price: usd(ai.midsize), detail: `Desde ${usd(ai.midsizeMonthly)} al mes`, text: "Conectado a tus sistemas: stock, pedidos, citas o cotizaciones." },
        { name: "Gran empresa", price: "A la medida", detail: "Según canales y volumen", text: "Varios canales, volúmenes altos e integraciones complejas." },
      ),
      paragraph(
        "Aparte se pagan los mensajes de WhatsApp que cobra Meta según el tipo de conversación, y el uso del modelo de inteligencia artificial. En la propuesta te estimamos ambos con tu volumen real.",
      ),
    ),
    section(
      "Buenas prácticas para que funcione bien",
      checklist(
        ["Solo información verificada", "Si no sabe algo, lo dice y pasa a una persona."],
        ["Una persona siempre puede tomar la conversación"],
        ["Datos personales protegidos", "Según la Ley Orgánica de Protección de Datos Personales."],
        ["Revisión de las primeras semanas", "Se revisan las conversaciones para ajustar las respuestas."],
      ),
    ),
  ],
  faqs: [
    faq(
      "¿Puedo usar mi número actual de WhatsApp?",
      "En la mayoría de casos sí, conectándolo a la API de WhatsApp Business. Según cómo uses hoy ese número, te explicamos las opciones antes de empezar.",
    ),
    faq(
      "¿Cuánto tarda en estar listo?",
      "Un asistente que responde con la información de tu negocio toma entre 2 y 4 semanas. Uno conectado a tus sistemas, entre 4 y 8 semanas.",
    ),
    faq(
      "¿Qué pasa si el asistente no sabe la respuesta?",
      "Lo dice con claridad y pasa la conversación a una persona de tu equipo. No inventa respuestas.",
    ),
  ],
  services: ["ai", "automation"],
};
