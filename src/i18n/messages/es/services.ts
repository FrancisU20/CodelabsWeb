import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["¿Qué quieres mejorar", "en tu negocio?"] },
  more: "Ver más",
  helpChat: {
    name: "CodeLabs",
    initial: "C",
    status: "en línea",
    messages: [
      { from: "customer", text: "No sé si necesito una app o una página web." },
      { from: "assistant", text: "Cuéntanos qué quieres lograr y te recomendamos lo justo para tu negocio." },
    ],
  },
  items: [
    { id: "web", title: "Páginas web y tiendas", need: "Que me encuentren en internet", summary: "Que te encuentren en Google y te compren.", vignette: { lines: [] } },
    { id: "mobile", title: "Apps para celular", need: "Que mis clientes me compren desde el celular", summary: "Tu negocio en el celular de tus clientes.", vignette: { lines: [] } },
    { id: "automation", title: "Automatización", need: "Dejar de hacer tareas repetitivas a mano", summary: "Que las tareas repetitivas se hagan solas.", vignette: { lines: ["Pedido", "Factura", "Correo"] } },
    { id: "ai", title: "Inteligencia artificial", need: "Responder a mis clientes a cualquier hora", summary: "Asistentes que responden a tus clientes a cualquier hora.", vignette: { lines: ["¿Hacen envíos a Quito?", "Sí, llegan en 48 horas."] } },
    { id: "custom", title: "Sistemas a la medida", need: "Tener todo ordenado en un solo sistema", summary: "Inventario, ventas y facturación en un solo lugar.", vignette: { lines: [] } },
    { id: "cloud", title: "Nube, seguridad y soporte", need: "Que mis sistemas no se caigan", summary: "Que todo funcione siempre y alguien lo cuide.", vignette: { lines: ["Tienda en línea", "Facturación", "Respaldo diario"], state: "En línea" } },
  ],
};
