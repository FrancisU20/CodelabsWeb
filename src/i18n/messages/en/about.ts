import type { Messages } from "../messages";

export const about: Messages["about"] = {
  factsLabel: "CodeLabs in numbers",
  facts: {
    founded: "year founded",
    projects: "projects delivered",
    apps: "apps published",
    countries: "countries: Ecuador, Peru, Colombia and Mexico",
  },
  trust: {
    title: { lines: ["Companies that already"], accent: "trust us." },
    body: "We are AWS Select Tier partners, with {certifications} certifications and {accreditations} Amazon accreditations on the team.",
    link: "See case studies",
  },
};
