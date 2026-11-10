import type { Messages } from "../messages";

export const aws: Messages["aws"] = {
  eyebrow: "Amazon Web Services",
  title: { lines: ["Your systems run", "on Amazon's cloud."] },
  badgeTitle: "Official AWS partners",
  badgeCaption: "Amazon-certified team",
  body: "It's the same infrastructure banks and major brands use. We set it up and maintain it for you.",
  benefits: [
    { title: "Handles peak season", body: "If far more people show up at once, the system adds capacity on its own." },
    { title: "Protected information", body: "Each person only gets into what they should." },
    { title: "Grows with your business", body: "You can start small and expand when you need to." },
    { title: "Pay for what you use", body: "You don't have to buy servers." },
  ],
  flowAriaLabel:
    "How a request travels: your customers, self-scaling servers, automated processes, everything connected, nothing gets lost and protected data",
  flow: [
    { label: "Your customers", detail: "web and app" },
    { label: "Self-scaling servers", detail: "Amazon ECS" },
    { label: "Automated processes", detail: "AWS Lambda" },
    { label: "Everything connected", detail: "EventBridge" },
    { label: "Nothing gets lost", detail: "Amazon SQS" },
    { label: "Protected data", detail: "Amazon RDS" },
  ],
};
