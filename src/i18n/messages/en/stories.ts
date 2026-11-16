import type { Messages } from "../messages";

export const stories: Messages["stories"] = {
  label: "Apps and platforms",
  storeLabel: "View on the App Store",
  note: "Reference designs, except Curve Pilates Studio, which is the real app.",
  labels: { challenge: "The challenge", solution: "What we built", result: "The result" },
  items: [
    {
      tag: "Banking",
      title: "Contracts signed from a phone.",
      challenge: "Sign contracts without paper and with verified identity.",
      solution: "Liveness detection and facial recognition with AWS Rekognition, plus electronic signatures.",
      result: "Customers sign from their phone, without visiting a branch.",
    },
    {
      tag: "Supermaxi · Retail",
      title: "Home delivery, from the shelf to the door.",
      challenge: "Coordinate home delivery between customers, stores and couriers.",
      solution: "One app for customers to order and track their purchase, and another for couriers to manage every delivery.",
      result: "Every order is tracked in real time.",
    },
    {
      tag: "Confiamed · Healthcare",
      title: "Members handle everything from their phone.",
      challenge: "Let members handle their paperwork without calling or visiting an office.",
      solution: "An app with reimbursements, medical appointments, electronic prescriptions and online doctor visits.",
      result: "Confiamed's service on every member's phone.",
    },
    {
      tag: "BASC · Foreign trade",
      title: "Customs courses online.",
      challenge: "Train member companies and the public in customs.",
      solution: "An online course platform.",
      result: "Courses available any time, from anywhere.",
    },
    {
      tag: "Curve Pilates Studio · Wellness",
      title: "Clients book from their phone.",
      challenge: "Fill classes without coordinating bookings by message.",
      solution: "An app with booking, real-time availability, class history and a nutrition profile.",
      result: "Published on the App Store; clients book on their own.",
    },
  ],
};
