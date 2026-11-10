import type { Messages } from "../messages";

export const servicePages: Messages["servicePages"] = {
  labels: {
    back: "All services",
    cta: "Tell us your idea",
    fitTitle: "It makes sense if…",
    includesTitle: "What's included",
    otherTitle: "Other services",
  },
  items: {
    mobile: {
      seoTitle: "Mobile app development in Ecuador | CodeLabs",
      seoDescription: "We build iPhone and Android apps for companies in Ecuador, with bookings, orders, payments and customer sign-up.",
      title: "iPhone and Android app development",
      description: "We build your business's app and take care of publishing it. You see the screens before we start programming.",
      fit: [
        "You coordinate bookings or orders by message and can't keep up.",
        "You want to take payments from a phone.",
        "Your customers ask for an easier way to buy from you.",
      ],
      includes: [
        { title: "Bookings and appointments", body: "Customers see times and open spots, and book without having to message you." },
        { title: "Payments and memberships", body: "Charges from the app and plans for regulars." },
        { title: "Sign-up and verification", body: "Account creation and step-by-step identity verification." },
        { title: "Publishing and updates", body: "We submit it to the App Store and Google Play and keep it up to date." },
      ],
    },
    web: {
      seoTitle: "Websites and online stores in Ecuador | CodeLabs",
      seoDescription: "We build websites and online stores for companies in Ecuador: fast on a phone and ready to show up on Google.",
      title: "Websites and online stores",
      description: "A site that loads fast on a phone, explains what you sell and that people can find when they look for you.",
      fit: [
        "Today you only sell through social media.",
        "Your current site is slow or looks wrong on a phone.",
        "You don't show up when people search for you on Google.",
      ],
      includes: [
        { title: "Company website", body: "Who you are, what you offer and how to reach you." },
        { title: "Online store", body: "Catalog, cart and payments." },
        { title: "Google ranking", body: "Titles, descriptions and structure built around what your customers search for." },
        { title: "Speed on a phone", body: "It opens fast even on a poor connection." },
      ],
    },
    custom: {
      seoTitle: "Custom systems for companies in Ecuador | CodeLabs",
      seoDescription: "We develop custom systems for companies in Ecuador: inventory, invoicing, reports and internal processes.",
      title: "Custom systems for your company",
      description: "We set up the system around how your people work, so you stop bending your operation to fit a program that doesn't.",
      fit: [
        "Your operation depends on Excel sheets.",
        "Tasks get repeated by hand and cause errors.",
        "The programs you've tried don't fit how you work.",
      ],
      includes: [
        { title: "Inventory", body: "What you have, where it is and what's running out." },
        { title: "Invoicing", body: "Your invoices in order, in one place." },
        { title: "Reports", body: "Your business numbers without building sheets by hand." },
        { title: "Internal processes", body: "Orders, approvals and follow-up between departments." },
      ],
    },
    cloud: {
      seoTitle: "Cloud and security on AWS for companies in Ecuador | CodeLabs",
      seoDescription: "We move your systems to Amazon's cloud (AWS) and keep them available and protected, with no servers for you to buy.",
      title: "Cloud and security on AWS",
      description: "We move your systems to Amazon's cloud and make sure they stay available. You don't have to buy servers.",
      fit: [
        "Your system goes down when a lot of people use it.",
        "Your server is at the office and you worry about losing information.",
        "You have nobody to manage your servers.",
      ],
      includes: [
        { title: "Migration to AWS", body: "We move your systems from wherever they are today." },
        { title: "Controlled access", body: "Each person only gets into what they should." },
        { title: "Capacity that adjusts", body: "If far more people show up, the system adds capacity on its own." },
        { title: "Administration", body: "We make sure everything works and keep it up to date." },
      ],
    },
    modernization: {
      seoTitle: "Legacy system modernization in Ecuador | CodeLabs",
      seoDescription: "We rebuild legacy systems piece by piece, without stopping your operation or losing your information.",
      title: "Legacy system modernization",
      description: "We rebuild your system piece by piece, so your team can keep working and no information gets lost along the way.",
      fit: [
        "Nobody wants to touch the system in case it breaks.",
        "You can't find anyone to maintain it anymore.",
        "Adding anything new takes too long.",
      ],
      includes: [
        { title: "Review of what you have", body: "We see what works and what's worth changing." },
        { title: "Replacement in parts", body: "One part gets replaced at a time while the rest keeps running." },
        { title: "Data migration", body: "Your information moves to the new system without getting lost." },
        { title: "New screens", body: "Your team and your customers get something easier to use." },
      ],
    },
    support: {
      seoTitle: "App and system support and maintenance | CodeLabs",
      seoDescription: "We maintain your apps, websites and systems: we make sure they work, update them and add what's missing.",
      title: "App and system support and maintenance",
      description: "If you already have an app, a website or a system, we keep it working and add whatever it needs.",
      fit: [
        "Whoever built your system no longer answers.",
        "You have an app or a website that hasn't been updated.",
        "You want to improve what you have without starting over.",
      ],
      includes: [
        { title: "Monitoring", body: "We check that everything works." },
        { title: "Updates", body: "We keep it up to date." },
        { title: "New features", body: "We add what your business comes to need." },
        { title: "Answers to your questions", body: "We reply when you have a question or a request." },
      ],
    },
  },
};
