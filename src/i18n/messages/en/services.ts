import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["What does your", "company need?"] },
  body: "These are the things we get asked for most. If yours isn't here, ask us anyway.",
  items: [
    {
      id: "mobile",
      title: "Mobile apps",
      need: "I want an app for my customers",
      body: "For iPhone and Android, with bookings, orders, payments or whatever your business uses.",
      summary: "iPhone and Android, with bookings, orders or payments.",
    },
    {
      id: "web",
      title: "Websites and online stores",
      need: "I want to sell more online",
      body: "A site or store that loads fast on a phone and that people can find on Google.",
      summary: "Fast on a phone and easy to find on Google.",
    },
    {
      id: "custom",
      title: "Custom systems",
      need: "I want to get my processes in order",
      body: "Inventory, invoicing and reports, set up around how your people work. If you run it on Excel today, that's where we start.",
      summary: "Inventory, invoicing and reports.",
    },
    {
      id: "modernization",
      title: "Modernization",
      need: "My system can't keep up anymore",
      body: "We rebuild it piece by piece, so your team can keep working in the meantime.",
      summary: "We rebuild your system piece by piece.",
    },
    {
      id: "cloud",
      title: "Cloud and security",
      need: "I need my system to stay up",
      body: "We move it to Amazon's cloud (AWS) and control who can get into what. You don't have to buy servers.",
      summary: "Your systems on Amazon's cloud (AWS).",
    },
    {
      id: "support",
      title: "Ongoing support",
      need: "I need someone to look after it",
      body: "If you already have an app or a system, we review it, update it and add what's missing.",
      summary: "We review, update and add what's missing.",
    },
  ],
};
