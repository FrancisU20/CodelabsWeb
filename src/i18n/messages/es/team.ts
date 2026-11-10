import type { Messages } from "../messages";

export const team: Messages["team"] = {
  title: { lines: ["Quiénes van a trabajar", "en tu proyecto"] },
  body: "Cada parte de tu proyecto la cubre alguien que sabe de eso.",
  leadBadge: "Tu contacto",
  roles: [
    { id: "manager", title: "Dirección de proyecto", body: "Es tu contacto y te cuenta cada semana cómo va todo." },
    { id: "design", title: "Diseño", body: "Hace las pantallas y cuida que se entiendan a la primera." },
    { id: "development", title: "Desarrollo web y móvil", body: "Programa tu página, tu app o tu sistema." },
    { id: "automation", title: "Automatización e IA", body: "Conecta tus programas y prepara los asistentes con la información de tu negocio." },
    { id: "cloud", title: "Nube y seguridad", body: "Se encarga de los servidores y de proteger tu información." },
    { id: "support", title: "Pruebas y soporte", body: "Revisa todo antes de entregarlo y te atiende cuando ya está en uso." },
  ],
};
