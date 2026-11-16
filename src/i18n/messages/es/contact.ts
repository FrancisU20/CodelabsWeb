import type { Messages } from "../messages";

export const contact: Messages["contact"] = {
  emailLabel: "Correo",
  phoneLabel: "Teléfono",
  officeLabel: "Oficina",
  labels: { name: "Nombre", company: "Empresa o negocio", email: "Correo", project: "¿Qué quieres mejorar?" },
  placeholders: {
    name: "Tu nombre",
    company: "Nombre de tu empresa o negocio",
    email: "nombre@empresa.com",
    project: "Quiero que un asistente responda a mis clientes por WhatsApp",
  },
  submit: "Enviar",
  submitting: "Enviando…",
  honeypotLabel: "No completes este campo",
  consent: {
    text: "Acepto que CodeLabs use mis datos para responder esta solicitud, según su",
    linkLabel: "Política de privacidad",
  },
  success: {
    title: "¡Recibimos tu mensaje!",
    body: "Te enviamos una confirmación a tu correo y te escribiremos pronto.",
    referenceLabel: "Tu número de referencia",
    whatsApp: "Si prefieres hablar ahora, escríbenos por WhatsApp",
  },
  failure: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp y te atendemos de inmediato.",
  openWhatsApp: "Abrir WhatsApp",
  message: {
    greeting: "Hola CodeLabs, soy",
    fallbackName: "un visitante",
    reference: "Referencia:",
    company: "Empresa:",
    email: "Correo:",
    project: "Necesito:",
  },
  channels: { whatsApp: "Escríbenos por WhatsApp", booking: "Agenda una videollamada" },
  map: { label: "Mapa de la oficina de CodeLabs en Ibarra", directions: "Cómo llegar", attribution: "© colaboradores de OpenStreetMap" },
};
