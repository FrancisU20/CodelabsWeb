import type { Messages } from "../messages";

export const team: Messages["team"] = {
  eyebrow: "Equipo",
  title: { lines: ["Un equipo completo.", "Un solo responsable."] },
  body: "No contratas a un programador suelto. Contratas a una empresa con especialistas en cada etapa y una persona a cargo de tu proyecto de principio a fin.",
  roles: [
    { id: "manager", title: "Dirección de proyecto", body: "Tu contacto directo. Plazos claros y avances cada semana." },
    { id: "design", title: "Diseño de experiencia", body: "Pantallas fáciles de usar que reflejan tu marca." },
    { id: "development", title: "Desarrollo móvil y web", body: "Ingenieros con experiencia que construyen tu app o tu web." },
    { id: "cloud", title: "Nube y seguridad", body: "Cuidan tu información y que nada se caiga." },
    { id: "quality", title: "Control de calidad", body: "Revisan cada pantalla y cada botón antes de entregarte." },
    { id: "support", title: "Soporte", body: "Te responden rápido cuando tengas una duda o un pedido." },
  ],
};
