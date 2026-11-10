import type { Messages } from "../messages";

export const howWeWork: Messages["howWeWork"] = {
  title: { lines: ["Cómo trabajamos"] },
  steps: [
    {
      title: "Hablamos",
      body: "Nos cuentas qué necesitas y qué te está dando problemas. De ahí sale una propuesta con alcance y tiempos.",
    },
    {
      title: "Te mostramos el diseño",
      body: "Antes de programar ves las pantallas y nos dices qué cambiar.",
    },
    {
      title: "Construimos por partes",
      body: "Cada pocas semanas puedes probar lo que ya está hecho.",
    },
    {
      title: "Publicamos y seguimos",
      body: "Cuando sale al público vemos cómo lo usan tus clientes y lo seguimos ajustando contigo.",
    },
  ],
};
