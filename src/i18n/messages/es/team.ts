import type { Messages } from "../messages";

export const team: Messages["team"] = {
  title: { lines: ["Quiénes van a trabajar", "en tu proyecto"] },
  body: "Detrás hay diseño, desarrollo, nube, pruebas y soporte. Tú hablas con una sola persona y ella coordina al resto.",
  roles: [
    { id: "manager", title: "Dirección de proyecto", body: "Es tu contacto. Te cuenta cada semana cómo va todo." },
    { id: "design", title: "Diseño", body: "Hace las pantallas y cuida que se entiendan a la primera." },
    { id: "development", title: "Desarrollo móvil y web", body: "Programa tu app o tu página." },
    { id: "cloud", title: "Nube y seguridad", body: "Se encarga de los servidores y de proteger tu información." },
    { id: "quality", title: "Pruebas", body: "Prueba cada pantalla antes de que te la entreguemos." },
    { id: "support", title: "Soporte", body: "Atiende tus dudas y pedidos cuando ya está en uso." },
  ],
};
