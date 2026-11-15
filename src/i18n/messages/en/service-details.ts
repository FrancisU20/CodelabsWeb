import type { Messages } from "../messages";

export const serviceDetails: Messages["serviceDetails"] = {
  labels: {
    outcomesTitle: "What you get",
    stepsTitle: "How we do it",
    casesTitle: "Real projects",
    casesLink: "See case studies",
    techTitle: "Technologies we work with",
    faqTitle: "Frequently asked questions",
  },
  items: {
    web: {
      headline: "Websites and online stores that bring customers, not just visits.",
      outcomes: [
        { title: "More leads and sales", body: "Every page is designed so visitors write to you, book or buy." },
        { title: "You show up on Google", body: "Structure, speed and copy aligned with what your customers search for." },
        { title: "Your operation connected", body: "Orders, inventory and payments sync with your systems." },
      ],
      steps: [
        { when: "Week 1", title: "Discovery", body: "Goals, audience and content." },
        { when: "Weeks 1 and 2", title: "Design", body: "The key pages, which you approve before we build." },
        { when: "Weeks 2 to 6", title: "Development", body: "We build and connect payments and integrations." },
        { when: "At the end", title: "Launch", body: "Domain, security and visit tracking." },
        { when: "Afterwards", title: "Continuous improvement", body: "Adjustments based on your real visit data." },
      ],
      faqs: [
        { question: "How much does a website cost?", answer: "An informational website starts at {price}. A store connected to your inventory and invoicing costs more depending on the catalog and integrations." },
        { question: "How long does it take?", answer: "{timeline}, depending on the number of pages and integrations." },
        { question: "Can I update the content myself?", answer: "Yes. We leave the website ready for you to change text, images and products without depending on us." },
        { question: "Does it include domain and hosting?", answer: "We help you register the domain in your company's name and host the website on AWS with a security certificate." },
      ],
      cases: [
        { name: "BASC", summary: "Customs training platform." },
      ],
    },
    mobile: {
      headline: "iPhone and Android apps your customers use every day.",
      outcomes: [
        { title: "More sales from mobile", body: "Your customers buy, book or pay without messaging or calling you." },
        { title: "Less manual work", body: "Orders, appointments and requests go straight into your systems." },
        { title: "Your brand in their pocket", body: "Notifications for promotions, reminders and order status." },
      ],
      steps: [
        { when: "Week 1", title: "Discovery", body: "Users, flows and integrations." },
        { when: "Weeks 2 and 3", title: "Design", body: "Screens you approve before we code." },
        { when: "Every 2 weeks", title: "Development", body: "A new version to test on your phone." },
        { when: "At the end", title: "Publishing", body: "App Store and Google Play." },
        { when: "Afterwards", title: "Support", body: "Updates and improvements." },
      ],
      faqs: [
        { question: "How much does an app cost?", answer: "From {price} for an installable web app. An app published on the App Store and Google Play, with payments or integrations, costs more depending on the scope. Our pricing guide explains each level." },
        { question: "How long does it take?", answer: "{timeline}, depending on features and integrations." },
        { question: "Is the app in my company's name?", answer: "Yes. The code and the App Store and Google Play accounts belong to your company." },
        { question: "What happens after launch?", answer: "You get {warranty} days of free bug fixes and, if you need it, monthly maintenance with updates for every iOS and Android version." },
      ],
      cases: [
        { name: "Supermaxi", summary: "App for customers and couriers." },
        { name: "Confiamed", summary: "Member app: reimbursements, appointments and electronic prescriptions." },
        { name: "Curve Pilates Studio", summary: "Class booking, published on the App Store." },
      ],
    },
    automation: {
      headline: "Let repetitive processes run on their own, without errors.",
      outcomes: [
        { title: "Hours of work recovered", body: "What your team copied by hand, the system now does." },
        { title: "Fewer errors", body: "Data moves between systems without retyping." },
        { title: "Everything on time", body: "Collections, reminders and approvals go out when they should." },
      ],
      steps: [
        { when: "Week 1", title: "Process map", body: "We see how it's done today and where time is lost." },
        { when: "Week 1", title: "Flow design", body: "We define what the system does and what a person keeps doing." },
        { when: "Weeks 2 to 5", title: "Build", body: "We connect your systems and test with real data." },
        { when: "At the end", title: "Go-live", body: "We turn on the flow and train your team." },
        { when: "Afterwards", title: "Monitoring", body: "We make sure every run goes well." },
      ],
      faqs: [
        { question: "How much does automating a process cost?", answer: "From {price} per flow. With several connected systems, the price depends on the integrations." },
        { question: "How long does it take?", answer: "{timeline}." },
        { question: "Do I need to change my current systems?", answer: "No. We connect the ones you already use; if one can't be integrated, we propose alternatives." },
        { question: "What if something fails?", answer: "Every flow has alerts: if a run fails, we find out and fix it." },
      ],
      cases: [
        { name: "Farmaenlace", summary: "Replenishment for Farmacias Económicas and Medicity with real-time tracking." },
      ],
    },
    ai: {
      headline: "Artificial intelligence that serves, answers and works with your data.",
      outcomes: [
        { title: "Service at any hour", body: "Your customers get answers in seconds, also at night and on weekends." },
        { title: "Your team focuses on what matters", body: "The assistant handles repeated questions and hands the rest to a person." },
        { title: "Decisions with data", body: "Management checks stock, sales or metrics by asking in a chat." },
      ],
      steps: [
        { when: "Week 1", title: "Use cases", body: "We pick the questions and tasks that take the most time." },
        { when: "Weeks 1 and 2", title: "Knowledge base", body: "We gather your company's information and connect your systems." },
        { when: "Weeks 2 to 6", title: "Build and test", body: "We test with real conversations before opening it to customers." },
        { when: "At the end", title: "Launch", body: "We turn on the assistant on WhatsApp or your website." },
        { when: "Afterwards", title: "Continuous improvement", body: "We review conversations and tune the answers." },
      ],
      faqs: [
        { question: "How much does an AI assistant cost?", answer: "From {price}. WhatsApp messages charged by Meta and AI model usage are paid separately; we estimate both with your volume." },
        { question: "How long does it take?", answer: "{timeline}." },
        { question: "Can the assistant make up answers?", answer: "We configure it to answer only with your company's verified information. If it doesn't know something, it says so and hands over to a person." },
        { question: "What happens to my customers' data?", answer: "It is handled under Ecuador's Personal Data Protection Law, on services with confidentiality agreements." },
      ],
      cases: [
        { name: "Supermarket chain", summary: "Inventory on WhatsApp for management." },
        { name: "Hardware store chain", summary: "Stock, prices and quotes in seconds." },
        { name: "Healthcare network", summary: "Online doctor, results and paperwork." },
      ],
    },
    custom: {
      headline: "Software built around how your company operates.",
      outcomes: [
        { title: "Everything in one place", body: "No more loose spreadsheets or systems that don't talk to each other." },
        { title: "Faster processes", body: "Each area sees what it needs and works on the same data." },
        { title: "It grows with you", body: "We add modules as your operation needs them." },
      ],
      steps: [
        { when: "Weeks 1 and 2", title: "Discovery", body: "We understand your processes, users and current systems." },
        { when: "Weeks 2 to 4", title: "Design", body: "Architecture and screens you validate with your team." },
        { when: "Every 2 weeks", title: "Staged development", body: "Deliveries your team uses and tests from the start." },
        { when: "At the end", title: "Rollout", body: "Data migration and training." },
        { when: "Afterwards", title: "Evolution", body: "Support and new modules." },
      ],
      faqs: [
        { question: "How much does custom software cost?", answer: "From {price}. The price depends on the modules, integrations and number of users." },
        { question: "How long does it take?", answer: "{timeline}, with staged deliveries so you use parts of the system from the start." },
        { question: "Why not buy off-the-shelf software?", answer: "If a market product fits your operation, we recommend it. We build custom when your processes are your advantage or no product covers them." },
        { question: "Do I own the code?", answer: "Yes. The code, data and infrastructure belong to your company." },
      ],
      cases: [
        { name: "Farmaenlace · Dispatch", summary: "Dispatch platform from the central warehouse to the pharmacies." },
        { name: "Farmaenlace · Farmascan", summary: "Scanned invoices and prescriptions for insurance agreements." },
      ],
    },
    cloud: {
      headline: "Your systems on AWS, always available and protected.",
      outcomes: [
        { title: "No outages", body: "Infrastructure scales when demand grows." },
        { title: "Protected information", body: "Backups, encryption and controlled access." },
        { title: "No servers to maintain", body: "We run the infrastructure; you focus on your business." },
      ],
      steps: [
        { when: "Week 1", title: "Assessment", body: "We review your systems, risks and current costs." },
        { when: "Weeks 1 and 2", title: "Migration plan", body: "Order, change windows and rollback plan." },
        { when: "Weeks 2 to 6", title: "Staged migration", body: "One system at a time, testing every step." },
        { when: "At the end", title: "Final cutover", body: "During the lowest-traffic hours, without interruptions." },
        { when: "Afterwards", title: "Operation", body: "Monitoring, backups and ongoing support." },
      ],
      faqs: [
        { question: "How much does migrating to AWS cost?", answer: "From {price}. AWS usage is paid separately; we estimate it before migrating." },
        { question: "How long does it take?", answer: "{timeline}, depending on how many systems and databases there are." },
        { question: "Will my system go down during the migration?", answer: "It shouldn't. We migrate in stages, test everything and do the final cutover during the lowest-traffic hours." },
        { question: "Why CodeLabs?", answer: "We are AWS Select Tier partners and our team holds Amazon certifications." },
      ],
      cases: [
        { name: "Bank", summary: "Contract signing with liveness detection and AWS Rekognition." },
      ],
    },
  },
};
