import type { Messages } from "../messages";

export const services: Messages["services"] = {
  eyebrow: "Servicios",
  titleLines: ["Lo que podemos", "hacer por ti."],
  body: "Desde una página web hasta el sistema completo de tu empresa.",
  idealFor: "Ideal para",
  items: [
    {
      id: "mobile",
      title: "Apps para celular",
      body: "Tu marca en el bolsillo de tus clientes, en iPhone y Android. Reservas, pedidos, pagos y lo que tu negocio necesite.",
      audience: "negocios que quieren vender y fidelizar",
    },
    {
      id: "web",
      title: "Páginas web y tiendas",
      body: "Sitios rápidos y bien posicionados en Google, que se ven perfectos en cualquier pantalla y convierten visitas en clientes.",
      audience: "empresas que quieren crecer en línea",
    },
    {
      id: "custom",
      title: "Sistemas a la medida",
      body: "Inventarios, facturación, reportes y procesos internos. Software hecho para tu forma de trabajar, no al revés.",
      audience: "empresas con procesos propios",
    },
    {
      id: "cloud",
      title: "Nube y seguridad",
      body: "Llevamos tus sistemas a la nube de Amazon (AWS): siempre disponibles, protegidos y sin comprar equipos propios.",
      audience: "operaciones que no pueden detenerse",
    },
    {
      id: "modernization",
      title: "Modernización",
      body: "¿Tu sistema actual se quedó corto? Lo renovamos por partes, sin detener tu operación ni perder información.",
      audience: "empresas con sistemas antiguos",
    },
    {
      id: "support",
      title: "Soporte y mejora continua",
      body: "Vigilamos que todo funcione, lo mantenemos actualizado y agregamos nuevas funciones cuando las necesites.",
      audience: "quien quiere un aliado, no un proveedor",
    },
  ],
};
