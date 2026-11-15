import type { Messages } from "../messages";

export const aiCases: Messages["aiCases"] = {
  label: "Con inteligencia artificial",
  note: "Conversaciones de ejemplo.",
  items: [
    {
      sector: "Cadena de supermercados",
      title: "La gerencia consulta el inventario por WhatsApp.",
      body: "Un asistente con IA responde stock e indicadores a la gerencia, atiende a los clientes y resuelve las dudas internas del personal.",
      chat: {
        name: "Inventario",
        initial: "I",
        status: "asistente",
        messages: [
          { from: "customer", text: "¿Cuánto arroz de 2 kg queda en los locales de Guayaquil?" },
          { from: "assistant", text: "Hay 3.480 fundas en 12 locales. Al ritmo de esta semana alcanzan para unos 6 días." },
        ],
      },
    },
    {
      sector: "Cadena de ferreterías",
      title: "Stock, precios y cotizaciones al instante.",
      body: "Los clientes preguntan si hay un producto, cuánto cuesta y en qué local, y el asistente les arma la cotización. La gerencia también consulta el inventario.",
      chat: {
        name: "Asesor de ventas",
        initial: "A",
        status: "asistente",
        messages: [
          { from: "customer", text: "¿Tienen cemento? Necesito 20 sacos en Cumbayá." },
          { from: "assistant", text: "Sí, hay stock en el local de Cumbayá. Te envío la cotización de 20 sacos." },
        ],
      },
    },
    {
      sector: "Red de salud",
      title: "Un médico en línea por WhatsApp.",
      body: "Los pacientes escriben por WhatsApp, un asistente los recibe y los conecta con un médico. También entrega resultados y resuelve trámites.",
      chat: {
        name: "Médico en línea",
        initial: "M",
        status: "asistente",
        messages: [
          { from: "customer", text: "Hola, tengo fiebre desde ayer." },
          { from: "assistant", text: "Lamento que te sientas así. Te hago unas preguntas rápidas y te conecto con un médico." },
        ],
      },
    },
  ],
};
