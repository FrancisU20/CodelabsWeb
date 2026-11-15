import { PRICE_LIST } from "../price-list";
import type { Guide } from "./guide";
import { faq, list, paragraph, section, table, usd } from "./guide-tokens";

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
      paragraph(
        "Un chatbot de menú obliga al cliente a elegir opciones: \"escribe 1 para horarios\". Un asistente con IA entiende lo que el cliente escribe con sus propias palabras y responde usando la información de tu empresa: productos, precios, stock, horarios o el estado de un trámite.",
      ),
      paragraph(
        "La diferencia está en que no se limita a respuestas fijas. Puede consultar tus sistemas, armar una cotización o agendar una cita, siempre dentro de las reglas que definas.",
      ),
    ),
    section(
      "Qué puede hacer por tu empresa",
      list(
        "Atender clientes a cualquier hora: dudas frecuentes, horarios, sucursales y promociones.",
        "Consultar stock y precios en tus sistemas y decir en qué local hay un producto.",
        "Armar cotizaciones y tomar pedidos.",
        "Agendar citas y enviar recordatorios.",
        "Recibir a pacientes o afiliados, hacer preguntas iniciales y conectarlos con un médico o un asesor.",
        "Responder a la gerencia: stock, ventas o indicadores, preguntando por WhatsApp.",
        "Resolver dudas internas del personal sobre procesos de la empresa.",
      ),
      paragraph(
        "Hemos construido asistentes así para una cadena de supermercados, una cadena de ferreterías y una red de salud en Ecuador.",
      ),
    ),
    section(
      "Qué necesitas para tenerlo",
      list(
        "Un número de WhatsApp Business conectado a la API oficial de WhatsApp. Te ayudamos con el registro.",
        "La información que el asistente debe conocer: catálogo, precios, políticas y preguntas frecuentes.",
        "Acceso a tus sistemas si quieres que consulte stock, pedidos o citas en tiempo real.",
        "Reglas claras: qué puede responder, qué no, y cuándo debe pasar la conversación a una persona.",
      ),
    ),
    section(
      "Cuánto cuesta",
      table(
        ["Nivel", "Qué incluye", "Implementación desde", "Mensual desde"],
        ["Pequeño negocio", "Responde con la información de tu negocio y pasa a una persona cuando hace falta", usd(ai.small), usd(ai.smallMonthly)],
        ["Empresa mediana", "Conectado a tus sistemas: stock, pedidos, citas o cotizaciones", usd(ai.midsize), usd(ai.midsizeMonthly)],
        ["Gran empresa", "Varios canales, volúmenes altos e integraciones complejas", "A la medida", "A la medida"],
      ),
      paragraph(
        "Aparte se pagan los mensajes de WhatsApp que cobra Meta según el tipo de conversación, y el uso del modelo de inteligencia artificial. En la propuesta te estimamos ambos con tu volumen real.",
      ),
    ),
    section(
      "Buenas prácticas para que funcione bien",
      list(
        "El asistente solo responde con información verificada de tu empresa: si no sabe algo, lo dice y pasa a una persona.",
        "Una persona siempre puede tomar la conversación.",
        "Los datos personales se tratan según la Ley Orgánica de Protección de Datos Personales.",
        "Se revisan las conversaciones las primeras semanas para ajustar las respuestas.",
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
