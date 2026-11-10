import type { Messages } from "../messages";

export const howWeWork: Messages["howWeWork"] = {
  title: { lines: ["How we work"] },
  steps: [
    {
      title: "We talk",
      body: "You tell us what you need and what's giving you trouble. That turns into a proposal with scope and timing.",
    },
    {
      title: "We show you the design",
      body: "Before any code gets written you see the screens and tell us what to change.",
    },
    {
      title: "We build it in parts",
      body: "Every few weeks you can try what's already done.",
    },
    {
      title: "We publish and keep going",
      body: "Once it's live we watch how your customers use it and keep adjusting it with you.",
    },
  ],
};
