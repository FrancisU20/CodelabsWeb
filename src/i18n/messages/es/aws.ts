import type { Messages } from "../messages";

export const aws: Messages["aws"] = {
  eyebrow: "Amazon Web Services",
  title: { lines: ["Tus sistemas corren", "en la nube de Amazon."] },
  badgeTitle: "Socios oficiales de AWS",
  badgeCaption: "Equipo con certificaciones de Amazon",
  body: "Es la misma infraestructura que usan bancos y grandes marcas. Nosotros la configuramos y la mantenemos por ti.",
  benefits: [
    { title: "Aguanta la temporada alta", body: "Si entra mucha más gente de golpe, el sistema sube de capacidad solo." },
    { title: "Información protegida", body: "Cada persona entra solo a lo que le corresponde." },
    { title: "Crece con tu negocio", body: "Puedes empezar pequeño y ampliar cuando haga falta." },
    { title: "Pagas lo que usas", body: "No tienes que comprar servidores." },
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
