import type { Messages } from "../messages";

export const team: Messages["team"] = {
  founder: {
    label: "Founder",
    role: "Founder and CEO of CodeLabs",
    bio: [
      "He has spent more than {experience} years building software for companies. He founded CodeLabs in {founded} and has since led more than {projects} projects for banking, healthcare, retail and logistics in Ecuador, Peru, Colombia and Mexico.",
      "He is part of every project from the proposal: he reviews scope, timeline and price, and makes sure what we promise gets delivered.",
    ],
    quote: "Every project we sign carries my name. If something isn't right, I answer for it.",
    linkedin: "View Francisco's LinkedIn profile",
  },
  title: { lines: ["A team built"], accent: "for your project." },
  body: "You talk to one person. Behind them, every specialty is covered by someone who knows it well.",
  clientLabel: "Your company",
  leadBadge: "Your contact",
  roles: [
    { id: "manager", title: "Project management", body: "Tells you every week how it's going." },
    { id: "design", title: "Design", body: "Makes the screens and sees that they're clear the first time." },
    { id: "development", title: "Web and mobile development", body: "Programs your website, your app or your system." },
    { id: "automation", title: "Automation and AI", body: "Integrates your systems and sets up the assistants with your company information." },
    { id: "cloud", title: "Cloud and security", body: "Looks after the servers and protects your information." },
    { id: "support", title: "Testing and support", body: "Checks everything before delivery and helps you once it's in use." },
  ],
};
