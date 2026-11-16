import type { Messages } from "../messages";

export const services: Messages["services"] = {
  title: { lines: ["What does your", "company need?"] },
  more: "See the service",
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
  timelineLabel: "Typical timeline",
  engagement: {
    title: { lines: ["Ways to work", "with us"] },
    featured: "Most chosen",
    items: {
      fixed: {
        title: "Fixed project",
        forWho: "For when you know what you need: a website, an app or an integration.",
        details: [
          { label: "How it works", text: "We send you a proposal with scope, timeline and price. You approve the design, we build in stages and you test every milestone." },
          { label: "What you get", text: "The working system, the code and accounts in your company's name, and training for your team." },
          { label: "How you pay", text: "A single invoice: a {start}% deposit at kickoff and the balance on delivery." },
          { label: "Guarantee", text: "{days} days of free bug fixes after delivery." },
        ],
        priceNote: "depending on the service and scope",
      },
      dedicated: {
        title: "Dedicated team",
        forWho: "For products that grow month after month: a platform or a feature-rich app.",
        details: [
          { label: "How it works", text: "A CodeLabs team works only on your product. Every {weeks} weeks you set the priorities and receive a delivery to test." },
          { label: "Who is on it", text: "Project management included, plus the profiles your product needs: design, web and mobile development, cloud and testing." },
          { label: "How you pay", text: "Monthly invoice at month end, for external consulting services, based on team size." },
          { label: "Commitment", text: "{months} months minimum." },
        ],
        priceNote: "per month per full-time engineer",
      },
      extension: {
        title: "Team extension",
        forWho: "For when you already have a team and need more capacity or a specialty.",
        details: [
          { label: "How it works", text: "Our engineers join your team, your tools and your schedule. Your team leads the daily work." },
          { label: "Profiles", text: "Web and backend, mobile apps, AWS cloud and DevOps, and testing (QA)." },
          { label: "How you pay", text: "Monthly invoice at month end, for each engineer's external consulting services." },
          { label: "Commitment", text: "{months} months minimum." },
        ],
        priceNote: "per month for a mid-level engineer · {senior} senior",
      },
    },
    chooser: [
      { question: "Clear scope and fixed budget?", answer: "Fixed project." },
      { question: "Does your product change every month?", answer: "Dedicated team." },
      { question: "Already have a team but need people?", answer: "Team extension." },
    ],
    guideLink: "Read the full guide to choose",
  },
};
