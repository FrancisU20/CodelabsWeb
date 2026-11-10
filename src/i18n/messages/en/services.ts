import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["What do you want to", "improve in your business?"] },
  more: "Learn more",
  helpChat: {
    name: "CodeLabs",
    initial: "C",
    status: "online",
    messages: [
      { from: "customer", text: "I'm not sure if I need an app or a website." },
      { from: "assistant", text: "Tell us what you want to achieve and we'll recommend just what your business needs." },
    ],
  },
  items: [
    { id: "web", title: "Websites and online stores", need: "Get found online", summary: "Get found on Google and sell.", vignette: { lines: [] } },
    { id: "mobile", title: "Mobile apps", need: "Let my customers buy from their phone", summary: "Your business on your customers' phones.", vignette: { lines: [] } },
    { id: "automation", title: "Automation", need: "Stop doing repetitive tasks by hand", summary: "Let repetitive tasks run on their own.", vignette: { lines: ["Order", "Invoice", "Email"] } },
    { id: "ai", title: "Artificial intelligence", need: "Answer my customers at any hour", summary: "Assistants that answer your customers at any hour.", vignette: { lines: ["Do you ship to Quito?", "Yes, within 48 hours."] } },
    { id: "custom", title: "Custom systems", need: "Keep everything in one system", summary: "Inventory, sales and invoicing in one place.", vignette: { lines: [] } },
    { id: "cloud", title: "Cloud, security and support", need: "Keep my systems from going down", summary: "Everything running, with someone looking after it.", vignette: { lines: ["Online store", "Invoicing", "Daily backup"], state: "Online" } },
  ],
};
