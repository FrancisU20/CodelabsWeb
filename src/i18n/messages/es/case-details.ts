import type { Messages } from "../messages";

export const caseDetails: Messages["caseDetails"] = {
  title: { lines: ["Caso por caso"] },
  labels: { need: "Qué necesitaban", built: "Qué hicimos", changed: "Qué cambió" },
  items: [
    {
      sector: "Estudio de pilates",
      need: "Coordinaban horarios y cupos por mensajes.",
      built: "Una app propia con horarios, cupos y membresías.",
      changed: "Menos mensajes para coordinar y más clases llenas.",
    },
    {
      sector: "Estudio de belleza",
      need: "Las citas dependían de contestar llamadas.",
      built: "Una app donde sus clientas eligen servicio y horario, y pagan.",
      changed: "La agenda queda abierta todo el día y el equipo atiende más.",
    },
    {
      sector: "Servicios legales",
      need: "Registrar clientes y validar su identidad tomaba papeleo.",
      built: "Registro y validación paso a paso desde el celular, con pagos integrados.",
      changed: "Clientes verificados sin papeles.",
    },
    {
      sector: "Comercio exterior",
      need: "Hacer seguimiento a cada embarque y cada auditoría.",
      built: "Una plataforma web que también funciona en el celular.",
      changed: "La operación se consulta en un solo lugar, desde la oficina o el celular.",
    },
  ],
};
