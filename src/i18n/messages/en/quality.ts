import type { Messages } from "../messages";

export const quality: Messages["quality"] = {
  ariaLabel: "Quality checks",
  title: { lines: ["Before a change goes live,"], accent: "it goes through these checks." },
  body: "You approve the design and we take care of the rest.",
  windowLabel: "delivery check",
  meterTitle: "Ready to publish",
  meterCaption: "5 of 5 checks",
  checks: [
    "You approved the design",
    "Another engineer reviewed it",
    "It passed the automated tests",
    "We checked security",
    "Works on iPhone, Android and web",
  ],
  approved: "Done",
  live: "Published",
};
