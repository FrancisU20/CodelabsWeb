import type { Messages } from "../messages";

export const hero: Messages["hero"] = {
  eyebrow: "Software, automation and artificial intelligence for businesses in Ecuador",
  titleLead: "We put technology to",
  titleAccent: "work for your business.",
  subtitle:
    "Websites, apps, automations and artificial intelligence for companies, entrepreneurs and small businesses. We help you choose what you really need, build it and keep it running.",
  ctaPrimary: "Tell us your idea",
  ctaSecondary: "See case studies",
  note: "We usually reply the same day.",
  chatLabel: "Example of an assistant replying on WhatsApp",
  chat: {
    name: "Your business assistant",
    initial: "A",
    status: "online",
    messages: [
      { from: "customer", text: "Hi, do you have a slot on Saturday morning?" },
      { from: "assistant", text: "Hi! Yes, at 9:00 and 10:30. Which one should I book for you?" },
    ],
  },
  toast: { title: "Invoice sent", detail: "Automation · 1 min ago" },
};
