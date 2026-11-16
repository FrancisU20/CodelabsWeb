import type { Messages } from "../messages";

export const notFound: Messages["notFound"] = {
  code: "Error 404",
  eyebrow: "Page not found",
  title: "This link no longer leads anywhere.",
  body: "The address may have changed or contain a typo. You can keep browsing from here.",
  links: { home: "Go home", services: "See services", contact: "Contact us" },
};
