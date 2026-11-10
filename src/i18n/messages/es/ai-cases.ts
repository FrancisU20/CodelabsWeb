import type { Messages } from "../messages";

export const aiCases: Messages["aiCases"] = {
  label: "Con inteligencia artificial",
  note: "Conversaciones de ejemplo.",
  items: [
    {
      sector: "Cadena de farmacias",
      title: "La gerencia consulta el inventario por WhatsApp.",
      body: "Un asistente con IA responde cuánto hay en la bodega central, sin abrir reportes ni pedírselo a nadie.",
      chat: {
        name: "Bodega central",
        initial: "B",
        status: "asistente",
        messages: [
          { from: "customer", text: "¿Cuántas cajas de paracetamol 500 mg hay?" },
          { from: "assistant", text: "Hay 1.240 cajas. Al ritmo de esta semana alcanzan para unos 9 días." },
        ],
      },
    },
    {
      sector: "Empresa de salud",
      title: "Un médico en línea por WhatsApp.",
      body: "Los pacientes escriben por WhatsApp y un asistente virtual los recibe y los guía en su consulta.",
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
    {
      sector: "Estudio de belleza",
      title: "Sus clientas agendan por WhatsApp a cualquier hora.",
      body: "Un asistente con IA conoce los servicios, resuelve dudas y deja la cita agendada.",
      chat: {
        name: "Estudio de belleza",
        initial: "E",
        status: "asistente",
        messages: [
          { from: "customer", text: "¿Tienen manicure el viernes?" },
          { from: "assistant", text: "Sí, a las 15:00 o a las 17:30. ¿Te agendo una?" },
        ],
      },
    },
  ],
};
