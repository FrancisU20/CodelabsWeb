import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: { back: "All services", cta: "Tell us your idea", fitTitle: "It makes sense if…", includesTitle: "What's included", otherTitle: "Other services", exampleNote: "Example conversation" },
  items: {
    web: {
      seoTitle: "Websites and online stores in Ecuador | CodeLabs",
      seoDescription: "Websites and online stores that load fast on a phone and are ready to show up on Google, for companies and businesses in Ecuador.",
      title: "Websites and online stores",
      description: "A site that explains what you do, loads fast on a phone and shows up when people search for you on Google. If you sell products, we also build your store.",
      fit: [
        "Today you only sell through social media.",
        "Your current site is slow or looks wrong on a phone.",
        "You don't show up when people search for you on Google.",
      ],
      includes: [
        { title: "Your business website", body: "Who you are, what you offer and how to reach you." },
        { title: "Online store", body: "Catalog, cart and payments." },
        { title: "Showing up on Google", body: "Structure and copy built around what your customers search for." },
        { title: "WhatsApp and forms", body: "So people can write to you with one tap." },
      ],
    },
    mobile: {
      seoTitle: "iPhone and Android app development in Ecuador | CodeLabs",
      seoDescription: "iPhone and Android apps so your customers can buy, book and pay from their phone, and your team can work from theirs.",
      title: "iPhone and Android apps",
      description: "Your business on your customers' phones: they buy, book, pay or track their order without having to message you. We also publish it on the app stores.",
      fit: [
        "You coordinate orders by message and can't keep up.",
        "You want your customers to buy from you again.",
        "Your team needs to work from their phones.",
      ],
      includes: [
        { title: "Purchases, bookings and payments", body: "From the app, without messaging you." },
        { title: "Notifications", body: "Promotions, reminders and order status." },
        { title: "Apps for your team", body: "Visits, deliveries or inventory from a phone." },
        { title: "Publishing and updates", body: "On the App Store and Google Play." },
      ],
    },
    automation: {
      seoTitle: "Process automation for companies in Ecuador | CodeLabs",
      seoDescription: "We automate invoices, reminders, reports and data moving between your programs so your team stops doing repetitive tasks by hand.",
      title: "Process automation",
      description: "The tasks your team repeats every day can be done by a system: sending invoices, reminding customers to pay, moving data from one place to another or building reports. Your people focus on what really needs a person.",
      fit: [
        "You spend hours copying data between Excel and other programs.",
        "You forget to collect payments or follow up.",
        "Building a report takes you days.",
      ],
      includes: [
        { title: "Automatic reminders and alerts", body: "By email or WhatsApp." },
        { title: "Connected programs", body: "Your store, invoicing and accounting talk to each other." },
        { title: "Reports that build themselves", body: "Your business numbers without putting them together by hand." },
        { title: "Approvals", body: "Orders or purchases that go through the right people." },
      ],
    },
    ai: {
      seoTitle: "Artificial intelligence for businesses in Ecuador | CodeLabs",
      seoDescription: "AI assistants that answer your customers on WhatsApp or your website at any hour, and tools that read documents and summarize what matters.",
      title: "Artificial intelligence for your business",
      description: "Assistants that answer your customers on WhatsApp or your website at any hour, and tools that read documents and summarize what matters. They use your business information and hand the conversation to a person when one is needed.",
      fit: [
        "You get the same questions all day.",
        "You lose customers by replying late or after hours.",
        "You check invoices, forms or contracts by hand.",
      ],
      includes: [
        { title: "Assistant for WhatsApp and your website", body: "Answers, takes orders and books appointments." },
        { title: "Document reading", body: "Pulls the data from invoices, forms or ID cards." },
        { title: "Summaries and suggested replies", body: "For emails and requests." },
        { title: "Clear rules", body: "You decide with us what the assistant can answer and when it hands over to a person." },
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
      seoTitle: "Custom systems for businesses in Ecuador | CodeLabs",
      seoDescription: "Inventory, sales, invoicing and customers in one system built around how your business works, plus renewal of legacy systems in parts.",
      title: "Custom systems",
      description: "Inventory, sales, invoicing and customers in one system, built around how your business works. If yours can't keep up anymore, we rebuild it in parts without stopping your operation.",
      fit: [
        "Your operation depends on several Excel sheets.",
        "The programs you've tried don't fit how you work.",
        "Your current system is slow or nobody maintains it anymore.",
      ],
      includes: [
        { title: "Inventory and sales", body: "What you have, what you sell and what's running out." },
        { title: "Invoicing", body: "Your invoices in one place." },
        { title: "Reports", body: "To see how your business is doing." },
        { title: "Renewal of legacy systems", body: "In parts, without losing information." },
      ],
    },
    cloud: {
      seoTitle: "Cloud, security and support on AWS | CodeLabs",
      seoDescription: "We move your systems to Amazon's cloud (AWS), keep them available and protected, and help you whenever something needs a change.",
      title: "Cloud, security and support",
      description: "We move your systems to Amazon's cloud (AWS), keep them available and protected, and help you whenever something needs a change. You don't have to buy servers or keep someone from IT on staff full time.",
      fit: [
        "Your system goes down when a lot of people use it.",
        "Your server is at the office and you worry about losing information.",
        "Whoever built your system no longer answers.",
      ],
      includes: [
        { title: "Move to Amazon's cloud (AWS)", body: "From wherever your systems are today." },
        { title: "Controlled access", body: "Each person only gets into what they should." },
        { title: "Backups and monitoring", body: "We make sure everything works." },
        { title: "Support and improvements", body: "We answer questions and add what's missing." },
      ],
    },
  },
};
