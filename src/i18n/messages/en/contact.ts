import type { Messages } from "../messages";

export const contact: Messages["contact"] = {
  emailLabel: "Email",
  phoneLabel: "Phone",
  officeLabel: "Office",
  labels: { name: "Name", company: "Company or business", email: "Email", project: "What do you want to improve?" },
  placeholders: {
    name: "Your name",
    company: "Your company or business name",
    email: "name@company.com",
    project: "I want an assistant to answer my customers on WhatsApp",
  },
  submit: "Send",
  submitting: "Sending…",
  honeypotLabel: "Do not fill in this field",
  consent: {
    text: "I agree that CodeLabs may use my data to answer this request, under its",
    linkLabel: "Privacy Policy",
  },
  success: {
    title: "We received your message!",
    body: "We sent a confirmation to your email and will write to you soon.",
    referenceLabel: "Your reference number",
    whatsApp: "If you'd rather talk now, message us on WhatsApp",
  },
  failure: "We could not send your request. Write to us on WhatsApp and we will help you right away.",
  openWhatsApp: "Open WhatsApp",
  message: {
    greeting: "Hi CodeLabs, I'm",
    fallbackName: "a visitor",
    reference: "Reference:",
    company: "Company:",
    email: "Email:",
    project: "I need:",
  },
  whatsAppCard: { title: "Prefer WhatsApp?", body: "Message us and the team will reply." },
};
