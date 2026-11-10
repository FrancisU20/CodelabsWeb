import type { Messages } from "../messages";

export const team: Messages["team"] = {
  title: { lines: ["Who will work", "on your project"] },
  body: "Behind it are design, development, cloud, testing and support. You talk to one person, and that person coordinates the rest.",
  roles: [
    { id: "manager", title: "Project management", body: "Your contact. Tells you every week how it's going." },
    { id: "design", title: "Design", body: "Makes the screens and sees that they're clear the first time." },
    { id: "development", title: "Mobile and web development", body: "Programs your app or website." },
    { id: "cloud", title: "Cloud and security", body: "Looks after the servers and protects your information." },
    { id: "quality", title: "Testing", body: "Tests every screen before we hand it over." },
    { id: "support", title: "Support", body: "Handles your questions and requests once it's in use." },
  ],
};
