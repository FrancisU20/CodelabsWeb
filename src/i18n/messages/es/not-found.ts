import type { Messages } from "../messages";

export const notFound: Messages["notFound"] = {
  code: "Error 404",
  eyebrow: "Página no encontrada",
  title: "Este enlace ya no lleva a ningún lado.",
  body: "Puede que la dirección haya cambiado o tenga un error de escritura. Desde aquí puedes seguir navegando.",
  links: { home: "Ir al inicio", services: "Ver servicios", contact: "Escribirnos" },
};
