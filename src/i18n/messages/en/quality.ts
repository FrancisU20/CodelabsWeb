import type { Messages } from "../messages";

export const quality: Messages["quality"] = {
  ariaLabel: "Checks before every delivery",
  title: { lines: ["Before every delivery,"], accent: "this is how we check it." },
  windowLabel: "delivery check",
  meterTitle: "All good",
  meterCaption: "5 of 5 checks",
  checks: [
    "You approved the design",
    "Another engineer reviewed it",
    "It passed the automated tests",
    "We checked security",
    "Works on phone, computer and tablet",
  ],
  approved: "Done",
  live: "Ready to publish",
};
