import type { Messages } from "../messages";

export const quality: Messages["quality"] = {
  ariaLabel: "Revisiones de calidad",
  title: { lines: ["Antes de publicar un cambio,"], accent: "pasa por estas revisiones." },
  body: "Tú apruebas el diseño y nosotros hacemos el resto.",
  windowLabel: "revisión de entrega",
  meterTitle: "Listo para publicar",
  meterCaption: "5 de 5 revisiones",
  checks: [
    "Aprobaste el diseño",
    "Lo revisó otro ingeniero",
    "Pasó las pruebas automáticas",
    "Revisamos la seguridad",
    "Funciona en iPhone, Android y web",
  ],
  approved: "Listo",
  live: "Publicado",
};
