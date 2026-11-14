import type { Messages } from "../messages";

export const clients: Messages["clients"] = {
  title: "Empresas con las que hemos trabajado",
  industries: {
    title: "Industrias en las que trabajamos",
    items: {
      banking: "Banca y medios de pago",
      retail: "Retail y consumo masivo",
      pharma: "Farmacéutica",
      health: "Salud y seguros médicos",
      logistics: "Logística y comercio exterior",
      growth: "Negocios en crecimiento",
    },
  },
  reviewsLabel: "Reseñas de clientes en Google, 5 de 5 estrellas",
  reviewSource: "Reseña en Google",
  reviewsLink: "Ver las reseñas en Google",
  reviews: [
    { quote: "Excelente servicio y un equipo de verdaderos profesionales. CodeLabs, más que recomendado.", author: "Mishell Reinoso" },
    { quote: "Excelente servicio. Me acompañaron en la creación de mi página web. Totalmente recomendados.", author: "César Rovalino" },
    { quote: "Un servicio excelente.", author: "INEC" },
  ],
};
