import type { Messages } from "../messages";

export const hero: Messages["hero"] = {
  eyebrow: "Software, automatización e inteligencia artificial para negocios en Ecuador",
  titleLead: "Ponemos la tecnología a",
  titleAccent: "trabajar para tu negocio.",
  subtitle:
    "Páginas web, apps, automatizaciones e inteligencia artificial para empresas, emprendedores y pequeños negocios. Te ayudamos a elegir lo que de verdad necesitas, lo construimos y lo mantenemos funcionando.",
  ctaPrimary: "Cuéntanos tu idea",
  ctaSecondary: "Ver casos de éxito",
  note: "Normalmente contestamos el mismo día.",
  chatLabel: "Ejemplo de un asistente que responde por WhatsApp",
  chat: {
    name: "Asistente de tu negocio",
    initial: "A",
    status: "en línea",
    messages: [
      { from: "customer", text: "Hola, ¿tienen turno el sábado en la mañana?" },
      { from: "assistant", text: "¡Hola! Sí, a las 9:00 y a las 10:30. ¿Cuál te reservo?" },
    ],
  },
  toast: { title: "Factura enviada", detail: "Automatización · hace 1 min" },
};
