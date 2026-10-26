import type { Messages } from "../messages";

export const aws: Messages["aws"] = {
  eyebrow: "Respaldo de Amazon Web Services",
  titleLines: ["La misma nube", "que usa Amazon."],
  badgeTitle: "Socios oficiales de AWS",
  badgeCaption: "Equipo con certificaciones de Amazon",
  body: "AWS es la nube de Amazon, la misma que usan bancos y grandes marcas en todo el mundo. Ahí construimos y cuidamos tus sistemas.",
  benefits: [
    { title: "Siempre en línea", body: "Tu negocio no se detiene, ni en temporada alta." },
    { title: "Información protegida", body: "Tus datos guardados bajo llave; solo entra quien debe." },
    { title: "Crece contigo", body: "Si tus ventas se multiplican, el sistema también." },
    { title: "Pagas lo que usas", body: "Sin comprar servidores ni pagar por lo que no ocupas." },
  ],
  flowAriaLabel:
    "Cómo viaja una solicitud: tus clientes, servidores que crecen solos, procesos automáticos, todo conectado, nada se pierde y datos protegidos",
  flow: [
    { label: "Tus clientes", detail: "web y app" },
    { label: "Servidores que crecen solos", detail: "Amazon ECS" },
    { label: "Procesos automáticos", detail: "AWS Lambda" },
    { label: "Todo conectado", detail: "EventBridge" },
    { label: "Nada se pierde", detail: "Amazon SQS" },
    { label: "Datos protegidos", detail: "Amazon RDS" },
  ],
};
