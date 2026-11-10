import type { Messages } from "../messages";

export const aws: Messages["aws"] = {
  eyebrow: "Amazon Web Services",
  title: { lines: ["Tus sistemas corren", "en la nube de Amazon."] },
  badgeTitle: "Socios oficiales de AWS",
  badgeCaption: "Equipo con certificaciones de Amazon",
  body: "Es la misma infraestructura que usan bancos y grandes marcas. Nosotros la configuramos y la mantenemos por ti.",
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
