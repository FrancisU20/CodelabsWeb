import type { Messages } from "../messages";

export const team: Messages["team"] = {
  eyebrow: "Equipo",
  titleLines: ["Un equipo completo.", "Un solo responsable."],
  body: "No contratas a un programador suelto. Contratas a una empresa con especialistas en cada etapa y una persona a cargo de tu proyecto de principio a fin.",
  roles: [
    { title: "Dirección de proyecto", body: "Tu contacto directo. Plazos claros y avances cada semana." },
    { title: "Diseño de experiencia", body: "Pantallas fáciles de usar que reflejan tu marca." },
    { title: "Desarrollo móvil y web", body: "Ingenieros con experiencia que construyen tu app o tu web." },
    { title: "Nube y seguridad", body: "Cuidan tu información y que nada se caiga." },
    { title: "Control de calidad", body: "Revisan cada pantalla y cada botón antes de entregarte." },
    { title: "Soporte", body: "Te responden rápido cuando tengas una duda o un pedido." },
  ],
};
