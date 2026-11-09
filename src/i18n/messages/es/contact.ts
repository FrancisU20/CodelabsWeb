import type { Messages } from "../messages";

export const contact: Messages["contact"] = {
  title: { lines: ["¿Tienes una idea?"], accent: "Hagámosla realidad." },
  body: "Cuéntanos qué necesitas. Te respondemos en horas, no en semanas, con una propuesta a la medida de tu empresa.",
  emailLabel: "Correo",
  phoneLabel: "Teléfono",
  officeLabel: "Oficina",
  labels: { name: "Nombre", company: "Empresa", email: "Correo", project: "¿Qué necesitas?" },
  placeholders: {
    name: "Tu nombre",
    company: "Nombre de tu empresa",
    email: "nombre@empresa.com",
    project: "Por ejemplo: una app de reservas para mi negocio",
  },
  submit: "Enviar solicitud",
  submitting: "Enviando…",
  honeypotLabel: "No completes este campo",
  consent: {
    text: "Acepto que CodeLabs use mis datos para responder esta solicitud, según su",
    linkLabel: "Política de privacidad",
  },
  success: {
    title: "¡Recibimos tu solicitud!",
    body: "Te enviamos una confirmación a tu correo y te responderemos pronto.",
    referenceLabel: "Tu número de referencia",
    whatsApp: "¿Prefieres hablar ahora? Sigue por WhatsApp →",
  },
  failure: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp y te atendemos de inmediato.",
  openWhatsApp: "Abrir WhatsApp →",
  message: {
    greeting: "Hola CodeLabs, soy",
    fallbackName: "un visitante",
    reference: "Referencia:",
    company: "Empresa:",
    email: "Correo:",
    project: "Necesito:",
  },
};
