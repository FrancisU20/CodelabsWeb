import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["¿Qué necesita", "tu empresa?"] },
  more: "Ver más",
  helpChat: {
    name: "CodeLabs",
    initial: "C",
    status: "en línea",
    messages: [
      { from: "customer", text: "Necesitamos conectar nuestro sistema con una app para clientes." },
      { from: "assistant", text: "Cuéntanos cómo trabajan hoy y te proponemos el alcance, el tiempo y el equipo." },
    ],
  },
  items: [
    { id: "web", title: "Webs y comercio electrónico", need: "Vender y captar clientes en línea", summary: "Sitios y tiendas rápidos, listos para Google.", vignette: { lines: [] } },
    { id: "mobile", title: "Apps móviles", need: "Llevar tu servicio al celular de tus clientes", summary: "Apps para iPhone y Android, para clientes y equipos.", vignette: { lines: [] } },
    { id: "automation", title: "Automatización de procesos", need: "Menos trabajo manual y menos errores", summary: "Procesos que se ejecutan solos entre tus sistemas.", vignette: { lines: ["Pedido", "Factura", "Correo"] } },
    { id: "ai", title: "Inteligencia artificial", need: "Atender y analizar información con IA", summary: "Asistentes con la información de tu empresa.", vignette: { lines: ["¿Hacen envíos a Quito?", "Sí, llegan en 48 horas."] } },
    { id: "custom", title: "Software a la medida", need: "Integrar tus sistemas y procesos", summary: "Plataformas a la medida e integraciones con tus sistemas.", vignette: { lines: [] } },
    { id: "cloud", title: "Nube AWS, seguridad y soporte", need: "Operar sin caídas y con datos protegidos", summary: "Infraestructura en AWS, monitoreo y soporte continuo.", vignette: { lines: ["Tienda en línea", "Facturación", "Respaldo diario"], state: "En línea" } },
  ],
  engagement: {
    title: { lines: ["Formas de trabajar", "con nosotros"] },
    items: [
      { title: "Proyecto cerrado", body: "Alcance, tiempo y costo definidos desde el inicio." },
      { title: "Equipo dedicado", body: "Un equipo completo de CodeLabs trabajando en tu producto." },
      { title: "Refuerzo de tu equipo", body: "Ingenieros nuestros integrados a tu equipo y a tu forma de trabajar." },
    ],
  },
};
