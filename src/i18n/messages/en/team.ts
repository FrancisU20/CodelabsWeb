import type { Messages } from "../messages";

export const team: Messages["team"] = {
  eyebrow: "Team",
  title: { lines: ["A complete team.", "One accountable lead."] },
  body: "You are not hiring a lone developer. You are hiring a company with specialists at every stage and one person in charge of your project from start to finish.",
  roles: [
    { id: "manager", title: "Project management", body: "Your direct contact. Clear timelines and weekly progress." },
    { id: "design", title: "Experience design", body: "Easy-to-use screens that reflect your brand." },
    { id: "development", title: "Mobile and web development", body: "Experienced engineers who build your app or website." },
    { id: "cloud", title: "Cloud and security", body: "They protect your information and keep everything up." },
    { id: "quality", title: "Quality control", body: "They check every screen and every button before delivery." },
    { id: "support", title: "Support", body: "Fast answers whenever you have a question or a request." },
  ],
};
