import type { Messages } from "../messages";

export const clients: Messages["clients"] = {
  title: "Companies we have worked with",
  industries: {
    title: "Industries we work in",
    items: {
      banking: "Banking and payments",
      retail: "Retail and consumer goods",
      pharma: "Pharmaceuticals",
      health: "Healthcare and health insurance",
      logistics: "Logistics and foreign trade",
      growth: "Growing businesses",
    },
  },
  reviewsLabel: "Client reviews on Google, 5 out of 5 stars",
  reviewSource: "Google review",
  reviewsLink: "See the reviews on Google",
  reviews: [
    { quote: "Excellent service and a truly professional team. CodeLabs comes more than recommended.", author: "Mishell Reinoso" },
    { quote: "Excellent service. They guided me through building my website. Highly recommended.", author: "César Rovalino" },
    { quote: "An excellent service.", author: "INEC" },
  ],
};
