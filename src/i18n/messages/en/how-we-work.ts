import type { Messages } from "../messages";

export const howWeWork: Messages["howWeWork"] = {
  factsLabel: "Our commitments in numbers",
  facts: [
    { value: "{proposal} days", label: "at most to receive your proposal" },
    { value: "{weeks} weeks", label: "between each version you test" },
    { value: "{warranty} days", label: "of free warranty" },
    { value: "100%", label: "of the code and accounts in your name" },
  ],
  phases: {
    title: { lines: ["From the first message", "to launch,"], accent: "phase by phase." },
    receivesLabel: "What you get",
    items: [
      {
        id: "proposal",
        label: "Proposal",
        title: "We understand your business and tell you how much and when.",
        body: "A meeting to learn how you operate and, within {proposal} days, a proposal with scope, schedule and price.",
        receives: "A written proposal, contract and non-disclosure agreement.",
      },
      {
        id: "design",
        label: "Design",
        title: "You see your product before we write a line of code.",
        body: "We design the screens and the journey. You review them with your team, ask for changes and approve them.",
        receives: "Clickable designs you can try on your phone.",
      },
      {
        id: "build",
        label: "Development",
        title: "We build in stages and you test every step.",
        body: "Every {weeks} weeks you get a version to test, and every week we review progress and next steps with you.",
        receives: "Test versions, a weekly meeting, a written report and access to the project board.",
      },
      {
        id: "quality",
        label: "Quality",
        title: "Nothing ships without review.",
        body: "Another engineer reviews every change, automated tests run on every version and we check security before delivery.",
        receives: "A reviewed delivery that works on phone, computer and tablet.",
      },
      {
        id: "handover",
        label: "Handover and support",
        title: "We launch it and stay with you.",
        body: "We publish, train your team and leave you everything you need to run it without depending on us.",
        receives: "Source code, technical documentation, user manual, training and {warranty} days of warranty.",
      },
    ],
  },
  visuals: {
    proposal: {
      caption: "proposal.pdf",
      title: "Proposal · Booking app",
      client: "Prepared for your company",
      rows: [
        { label: "Scope", value: "12 screens, payments and alerts" },
        { label: "Schedule", value: "9 weeks" },
        { label: "Deliveries", value: "Every {weeks} weeks" },
        { label: "Deposit", value: "{start}%" },
        { label: "Warranty", value: "{warranty} days" },
      ],
      signature: "Contract and non-disclosure agreement",
    },
    design: { caption: "screen design", screens: ["Home", "Booking", "Payment"], approved: "Design approved by your team" },
    board: {
      caption: "project board",
      columns: [
        { title: "To do", cards: ["Email alerts", "Reports"] },
        { title: "In progress", cards: ["Card payments"] },
        { title: "Done", cards: ["User sign-up", "Class calendar"] },
      ],
    },
    quality: {
      caption: "delivery check",
      meter: { title: "All good", caption: "5 of 5 checks" },
      items: [
        "You approved the design",
        "Another engineer reviewed it",
        "It passed the automated tests",
        "We checked security",
        "Works on phone, computer and tablet",
      ],
      summary: "Ready to publish",
    },
    handover: {
      caption: "project handover",
      items: ["Source code in your repository", "Technical documentation", "User manual", "Training for your team", "{warranty} days of warranty"],
      summary: "Everything in your company's name",
    },
  },
  updates: {
    title: { lines: ["You always know"], accent: "where your project stands." },
    body: "You talk to the people building your product, not to a middleman.",
    items: [
      { title: "Weekly meeting", body: "We review progress, decisions and next steps." },
      { title: "WhatsApp group", body: "You write straight to the project team." },
      { title: "Project board", body: "You see every task: to do, in progress and done." },
      { title: "Written report", body: "A progress summary to share with your management." },
    ],
    chat: {
      name: "Project · Booking app",
      initial: "P",
      status: "You and the CodeLabs team",
      messages: [
        { from: "assistant", text: "Good morning. This week's version is ready: sign-up, calendar and bookings." },
        { from: "assistant", text: "The test link and the report are on the board." },
        { from: "customer", text: "Great, I'll review it today with my team. Can we add bank transfer payments?" },
        { from: "assistant", text: "Yes. We'll go over it in Thursday's meeting, with what it means for timeline and cost." },
      ],
    },
  },
  commitments: {
    title: { lines: ["What you can"], accent: "hold us to." },
    items: [
      { title: "Contract and confidentiality", body: "We sign a contract and a non-disclosure agreement before we start." },
      { title: "One fixed lead", body: "One person runs your project from start to finish and answers for it." },
      { title: "Code review", body: "Another engineer reviews every change before it ships." },
      { title: "Everything in your name", body: "Code, accounts, domain and infrastructure belong to your company." },
      { title: "{warranty}-day warranty", body: "We fix any bugs that appear after delivery at no cost." },
      { title: "AWS Select partners", body: "Engineers certified by Amazon Web Services." },
    ],
  },
  payment: {
    title: "How you pay",
    items: [
      {
        label: "Fixed project",
        title: "{start}% at kickoff, the balance on delivery",
        body: "A single electronic invoice for the project. The deposit books the team and starts the work.",
      },
      {
        label: "Dedicated team and extension",
        title: "Monthly invoice, at month end",
        body: "At the close of each month we invoice the external consulting services of the engineers working with you.",
      },
    ],
    compareLink: "Compare the ways to work with us",
  },
};
