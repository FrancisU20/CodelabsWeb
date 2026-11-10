import type { Messages } from "../messages";

export const team: Messages["team"] = {
  title: { lines: ["Who will work", "on your project"] },
  body: "Every part of your project is covered by someone who knows it well.",
  leadBadge: "Your contact",
  roles: [
    { id: "manager", title: "Project management", body: "Your contact, who tells you every week how it's going." },
    { id: "design", title: "Design", body: "Makes the screens and sees that they're clear the first time." },
    { id: "development", title: "Web and mobile development", body: "Programs your website, your app or your system." },
    { id: "automation", title: "Automation and AI", body: "Connects your programs and sets up the assistants with your business information." },
    { id: "cloud", title: "Cloud and security", body: "Looks after the servers and protects your information." },
    { id: "support", title: "Testing and support", body: "Checks everything before delivery and helps you once it's in use." },
  ],
};
