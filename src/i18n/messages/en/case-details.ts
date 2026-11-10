import type { Messages } from "../messages";

export const caseDetails: Messages["caseDetails"] = {
  title: { lines: ["Case by case"] },
  labels: { need: "What they needed", built: "What we built", changed: "What changed" },
  items: [
    {
      sector: "Pilates studio",
      need: "They coordinated schedules and spots by message.",
      built: "Their own app with schedules, spots and memberships.",
      changed: "Fewer messages to coordinate and fuller classes.",
    },
    {
      sector: "Beauty studio",
      need: "Appointments depended on answering calls.",
      built: "An app where clients choose a service and a time, and pay.",
      changed: "The calendar stays open all day and the team serves more people.",
    },
    {
      sector: "Legal services",
      need: "Signing up clients and verifying their identity took paperwork.",
      built: "Step-by-step sign-up and verification from a phone, with built-in payments.",
      changed: "Verified clients with no paperwork.",
    },
    {
      sector: "Foreign trade",
      need: "Following up on every shipment and every audit.",
      built: "A web platform that also works on a phone.",
      changed: "The operation is checked in one place, from the office or a phone.",
    },
  ],
};
