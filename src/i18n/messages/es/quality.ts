import type { Messages } from "../messages";

export const quality: Messages["quality"] = {
  ariaLabel: "Revisiones antes de cada entrega",
  title: { lines: ["Antes de cada entrega,"], accent: "lo revisamos así." },
  windowLabel: "revisión de entrega",
  meterTitle: "Todo en orden",
  meterCaption: "5 de 5 revisiones",
  checks: [
    "Aprobaste el diseño",
    "Lo revisó otro ingeniero",
    "Pasó las pruebas automáticas",
    "Revisamos la seguridad",
    "Funciona en celular, computador y tablet",
  ],
  approved: "Listo",
  live: "Listo para publicar",
};
