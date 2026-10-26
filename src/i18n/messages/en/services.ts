import type { Messages } from "../messages";

export const services: Messages["services"] = {
  eyebrow: "Services",
  titleLines: ["What we can", "do for you."],
  body: "From a website to your company's entire system.",
  idealFor: "Ideal for",
  items: [
    {
      id: "mobile",
      title: "Mobile apps",
      body: "Your brand in your clients' pocket, on iPhone and Android. Bookings, orders, payments and whatever your business needs.",
      audience: "businesses that want to sell and build loyalty",
    },
    {
      id: "web",
      title: "Websites and online stores",
      body: "Fast sites that rank well on Google, look perfect on any screen and turn visits into customers.",
      audience: "companies that want to grow online",
    },
    {
      id: "custom",
      title: "Custom systems",
      body: "Inventory, invoicing, reports and internal processes. Software built around the way you work, not the other way around.",
      audience: "companies with their own processes",
    },
    {
      id: "cloud",
      title: "Cloud and security",
      body: "We move your systems to Amazon's cloud (AWS): always available, protected and with no hardware to buy.",
      audience: "operations that cannot stop",
    },
    {
      id: "modernization",
      title: "Modernization",
      body: "Has your current system fallen short? We renew it piece by piece, without stopping your operation or losing data.",
      audience: "companies with legacy systems",
    },
    {
      id: "support",
      title: "Support and continuous improvement",
      body: "We make sure everything works, keep it up to date and add new features whenever you need them.",
      audience: "those who want a partner, not a vendor",
    },
  ],
};
