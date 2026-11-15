import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: { back: "All services", cta: "Tell us about your project", fitTitle: "It makes sense if…", includesTitle: "What's included", otherTitle: "Other services" },
  items: {
    web: {
      seoTitle: "Web development and e-commerce in Ecuador | CodeLabs",
      seoDescription: "Fast, secure corporate websites and online stores built for Google and integrated with your inventory, payments and CRM.",
      title: "Websites and e-commerce",
      description: "Corporate websites and online stores that load fast, show up on Google and connect to your inventory, payments and CRM.",
      timeline: "3 to 8 weeks",
      fit: [
        "Your current site is slow or doesn't bring in leads.",
        "You sell online, but your store doesn't connect to your inventory.",
        "You need to show up when people search for you on Google.",
      ],
      includes: [
        { title: "Corporate website", body: "Clear pages about who you are and what you offer, fast on mobile and easy to update." },
        { title: "E-commerce", body: "Catalog, cart, card payments, coupons and order tracking." },
        { title: "Integrations", body: "With your inventory, electronic invoicing, CRM and WhatsApp." },
        { title: "Google visibility", body: "Structured data, speed, sitemap and copy built around your customers' searches." },
      ],
    },
    mobile: {
      seoTitle: "iPhone and Android app development in Ecuador | CodeLabs",
      seoDescription: "iPhone and Android apps for your customers to buy, book and complete transactions, and for your field teams, connected to your systems.",
      title: "iPhone and Android apps",
      description: "Apps for your customers to buy, book, pay or complete transactions, and apps for your field teams. Connected to your systems and published on the App Store and Google Play.",
      timeline: "4 weeks to 5 months",
      fit: [
        "Your customers expect to do everything from their phone.",
        "Your field teams work with paper or messages.",
        "You need to verify identity or sign documents online.",
      ],
      includes: [
        { title: "Customer apps", body: "Catalog, cart, card payments, bookings, order tracking and profile." },
        { title: "Team apps", body: "Visits, deliveries, inventory, audits and customer signatures on the phone." },
        { title: "Identity and digital signature", body: "ID card validation, facial recognition and certified electronic signatures." },
        { title: "Publishing and support", body: "We publish on the App Store and Google Play and keep the app current with every iOS and Android version." },
      ],
    },
    automation: {
      seoTitle: "Process automation for companies in Ecuador | CodeLabs",
      seoDescription: "We automate processes across your systems, such as invoicing, collections, approvals and reports, so your teams stop doing manual work and making errors.",
      title: "Process automation",
      description: "The processes your teams repeat every day can be run by a system: invoicing, collections, approvals, moving data between systems or building reports. Fewer errors and more time for work that needs a person.",
      timeline: "2 to 6 weeks",
      fit: [
        "Your teams copy data between systems and spreadsheets.",
        "Collections, follow-ups or approvals depend on someone remembering.",
        "Reports take days to be ready.",
      ],
      includes: [
        { title: "Automatic alerts and reminders", body: "By email or WhatsApp: collections, due dates, appointments and order status." },
        { title: "System integration", body: "ERP, electronic invoicing, CRM and online store sharing the same data." },
        { title: "Automatic reports", body: "Your metrics ready every morning, without building them in spreadsheets." },
        { title: "Approval workflows", body: "Purchases, expenses or orders that go through the right people, with every step recorded." },
      ],
    },
    ai: {
      seoTitle: "Artificial intelligence for companies in Ecuador | CodeLabs",
      seoDescription: "AI assistants for WhatsApp and web, automatic document reading and plain-language queries over your company data, with clear rules and protected data.",
      title: "Artificial intelligence for your company",
      description: "Assistants that serve your customers on WhatsApp or your website at any hour, tools that read documents, and plain-language queries over your company data. They work with your information and hand the conversation to a person when needed.",
      timeline: "2 to 8 weeks",
      fit: [
        "Your teams answer the same questions all day.",
        "You lose customers by replying late or after hours.",
        "You review invoices, forms or contracts by hand.",
      ],
      includes: [
        { title: "Assistants for WhatsApp and web", body: "They answer with your company's information, take orders, quote and book." },
        { title: "Document reading", body: "They extract data from invoices, prescriptions, forms and IDs into your systems." },
        { title: "Queries over your data", body: "Inventory, sales or metrics in plain language, by chat." },
        { title: "Clear rules", body: "You decide with us what the assistant answers, what it doesn't and when it hands over to a person." },
      ],
      example: {
        name: "Your store's assistant",
        initial: "A",
        status: "online",
        messages: [
          { from: "customer", text: "Hi, do you have the 2-liter blender?" },
          { from: "assistant", text: "Hi! Yes, we have 6 at the downtown store. It's $54.90. Should I hold one for you?" },
          { from: "customer", text: "Yes, I'll pick it up tomorrow" },
          { from: "assistant", text: "Done, it's on hold under your name until tomorrow at 18:00." },
        ],
      },
    },
    custom: {
      seoTitle: "Custom software for companies in Ecuador | CodeLabs",
      seoDescription: "Custom platforms, integrations between systems and step-by-step modernization of legacy systems, without stopping your operation.",
      title: "Custom software",
      description: "Platforms built around how your company operates and integrated with the systems you already use. If a system has fallen short, we modernize it step by step without stopping the operation.",
      timeline: "From 2 months",
      fit: [
        "Your operation depends on spreadsheets or systems that don't talk to each other.",
        "No off-the-shelf software fits your processes.",
        "Your current system is slow or no one maintains it.",
      ],
      includes: [
        { title: "Operational platforms", body: "Inventory, sales, logistics, audits or whatever your operation needs, with role-based access." },
        { title: "Integrations and APIs", body: "With your ERP, electronic invoicing, banks and third-party systems." },
        { title: "Reports and metrics", body: "Dashboards with the numbers that matter, updated in real time." },
        { title: "System modernization", body: "We modernize legacy systems step by step, without stopping the operation or losing data." },
      ],
    },
    cloud: {
      seoTitle: "AWS cloud, security and support in Ecuador | CodeLabs",
      seoDescription: "We are AWS Select Tier partners: we migrate your systems to AWS, keep them available and protected, and give you ongoing support.",
      title: "AWS cloud, security and support",
      description: "As AWS Select Tier partners, we move your systems to Amazon's cloud, keep them available and protected, and give you ongoing support. No servers to buy and no in-house infrastructure team to maintain.",
      timeline: "1 to 8 weeks",
      fit: [
        "Your system goes down when demand grows.",
        "Your servers are in the office and you worry about losing information.",
        "No one is in charge of your infrastructure.",
      ],
      includes: [
        { title: "Migration to AWS", body: "From your own servers or other providers, in stages and without stopping the operation." },
        { title: "Controlled access", body: "Each person reaches only what they should, with every access logged." },
        { title: "Backups and monitoring", body: "Automatic backups and alerts if something fails, day or night." },
        { title: "Support and improvements", body: "We handle incidents, apply updates and optimize AWS costs." },
      ],
    },
  },
};
