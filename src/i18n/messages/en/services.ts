import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["What does your", "company need?"] },
  more: "Learn more",
  helpChat: {
    name: "CodeLabs",
    initial: "C",
    status: "online",
    messages: [
      { from: "customer", text: "We need to connect our system to a customer app." },
      { from: "assistant", text: "Tell us how you work today and we'll propose the scope, timing and team." },
    ],
  },
  items: [
    { id: "web", title: "Websites and e-commerce", need: "Sell and win customers online", summary: "Fast sites and stores, ready for Google.", vignette: { lines: [] } },
    { id: "mobile", title: "Mobile apps", need: "Put your service on your customers' phones", summary: "iPhone and Android apps for customers and teams.", vignette: { lines: [] } },
    { id: "automation", title: "Process automation", need: "Less manual work and fewer errors", summary: "Processes that run on their own across your systems.", vignette: { lines: ["Order", "Invoice", "Email"] } },
    { id: "ai", title: "Artificial intelligence", need: "Serve customers and analyze data with AI", summary: "Assistants that use your company's information.", vignette: { lines: ["Do you ship to Quito?", "Yes, within 48 hours."] } },
    { id: "custom", title: "Custom software", need: "Integrate your systems and processes", summary: "Custom platforms and integrations with your systems.", vignette: { lines: [] } },
    { id: "cloud", title: "AWS cloud, security and support", need: "Run without outages and with protected data", summary: "AWS infrastructure, monitoring and ongoing support.", vignette: { lines: ["Online store", "Invoicing", "Daily backup"], state: "Online" } },
  ],
  engagement: {
    title: { lines: ["Ways to work", "with us"] },
    items: [
      { title: "Fixed project", body: "Scope, timing and cost defined from the start." },
      { title: "Dedicated team", body: "A complete CodeLabs team working on your product." },
      { title: "Team extension", body: "Our engineers joining your team and your way of working." },
    ],
  },
};
