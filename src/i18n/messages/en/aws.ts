import type { Messages } from "../messages";

export const aws: Messages["aws"] = {
  eyebrow: "Backed by Amazon Web Services",
  titleLines: ["The same cloud", "Amazon runs on."],
  badgeTitle: "Official AWS partners",
  badgeCaption: "Amazon-certified team",
  body: "AWS is Amazon's cloud, the same one banks and major brands use worldwide. That is where we build and look after your systems.",
  benefits: [
    { title: "Always online", body: "Your business never stops, not even in peak season." },
    { title: "Protected information", body: "Your data under lock and key; only the right people get in." },
    { title: "Grows with you", body: "If your sales multiply, so does the system." },
    { title: "Pay for what you use", body: "No servers to buy and nothing to pay for that you don't use." },
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
