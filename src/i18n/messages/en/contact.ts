import type { Messages } from "../messages";

export const contact: Messages["contact"] = {
  titleLead: "Have an idea?",
  titleAccent: "Let's make it happen.",
  body: "Tell us what you need. We reply in hours, not weeks, with a proposal tailored to your company.",
  emailLabel: "Email",
  phoneLabel: "Phone",
  officeLabel: "Office",
  office: "Cascadas de Chorlaví, Ibarra, Ecuador",
  labels: { name: "Name", company: "Company", email: "Email", project: "What do you need?" },
  placeholders: {
    name: "Your name",
    company: "Your company name",
    email: "name@company.com",
    project: "For example: a booking app for my business",
  },
  submit: "Send via WhatsApp",
  ready: "Your message is ready.",
  openWhatsApp: "Open WhatsApp →",
  message: {
    greeting: "Hi CodeLabs, I'm",
    fallbackName: "a visitor",
    company: "Company:",
    email: "Email:",
    project: "I need:",
  },
};
