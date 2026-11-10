import type { Messages } from "../messages";

export const howWeWork: Messages["howWeWork"] = {
  title: { lines: ["How we work"] },
  steps: [
    { title: "We talk", body: "You tell us what you want to improve in your business and we send you a proposal with scope, timing and cost." },
    { title: "You see it before we build it", body: "We show you the screens or the flow and you tell us what to change." },
    { title: "We build it in parts", body: "Every few weeks you can try what's already done." },
    { title: "We launch and stay with you", body: "We get it running, teach your team to use it and keep improving it with you." },
  ],
};
