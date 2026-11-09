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
  submit: "Enviar por WhatsApp",
  privacyNotice: {
    text: "Al enviar, se abrirá WhatsApp con tu mensaje. Usamos tus datos solo para responder tu solicitud, según nuestra",
    linkLabel: "Política de privacidad",
  },
  ready: "Tu mensaje está listo.",
  openWhatsApp: "Abrir WhatsApp →",
  message: {
    greeting: "Hola CodeLabs, soy",
    fallbackName: "un visitante",
    company: "Empresa:",
    email: "Correo:",
    project: "Necesito:",
  },
};
