import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["¿Qué necesita", "tu empresa?"] },
  body: "Esto es lo que más nos piden. Si lo tuyo no está aquí, pregúntanos igual.",
  items: [
    {
      id: "mobile",
      title: "Apps para celular",
      need: "Quiero una app para mis clientes",
      body: "Para iPhone y Android, con reservas, pedidos, pagos o lo que tu negocio use.",
      summary: "iPhone y Android, con reservas, pedidos o pagos.",
    },
    {
      id: "web",
      title: "Páginas web y tiendas",
      need: "Quiero vender más por internet",
      body: "Una página o tienda que cargue rápido en el celular y que la gente encuentre en Google.",
      summary: "Rápidas en el celular y fáciles de encontrar en Google.",
    },
    {
      id: "custom",
      title: "Sistemas a la medida",
      need: "Quiero ordenar mis procesos",
      body: "Inventarios, facturación y reportes, armados según cómo trabaja tu gente. Si hoy lo llevas en Excel, empezamos por ahí.",
      summary: "Inventarios, facturación y reportes.",
    },
    {
      id: "modernization",
      title: "Modernización",
      need: "Mi sistema ya se quedó corto",
      body: "Lo renovamos por partes, para que tu equipo pueda seguir trabajando mientras tanto.",
      summary: "Renovamos tu sistema por partes.",
    },
    {
      id: "cloud",
      title: "Nube y seguridad",
      need: "Necesito que mi sistema no se caiga",
      body: "Lo pasamos a la nube de Amazon (AWS) y controlamos quién entra a qué. No tienes que comprar servidores.",
      summary: "Tus sistemas en la nube de Amazon (AWS).",
    },
    {
      id: "support",
      title: "Soporte continuo",
      need: "Necesito a alguien que lo mantenga",
      body: "Si ya tienes una app o un sistema, lo revisamos, lo actualizamos y le agregamos lo que haga falta.",
      summary: "Revisamos, actualizamos y agregamos lo que falte.",
    },
  ],
};
