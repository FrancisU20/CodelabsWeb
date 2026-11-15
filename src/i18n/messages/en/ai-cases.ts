import type { Messages } from "../messages";

export const aiCases: Messages["aiCases"] = {
  label: "With artificial intelligence",
  note: "Example conversations.",
  items: [
    {
      sector: "Supermarket chain",
      title: "Management checks inventory on WhatsApp.",
      body: "An AI assistant gives management stock levels and metrics, serves customers and answers staff questions about internal processes.",
      chat: {
        name: "Inventory",
        initial: "I",
        status: "assistant",
        messages: [
          { from: "customer", text: "How much 2 kg rice is left in the Guayaquil stores?" },
          { from: "assistant", text: "There are 3,480 bags across 12 stores. At this week's pace they'll last about 6 days." },
        ],
      },
    },
    {
      sector: "Hardware store chain",
      title: "Stock, prices and quotes in seconds.",
      body: "Customers ask whether a product is in stock, how much it costs and at which store, and the assistant builds the quote. Management also checks inventory.",
      chat: {
        name: "Sales advisor",
        initial: "A",
        status: "assistant",
        messages: [
          { from: "customer", text: "Do you have cement? I need 20 bags in Cumbayá." },
          { from: "assistant", text: "Yes, the Cumbayá store has stock. I'll send you the quote for 20 bags." },
        ],
      },
    },
    {
      sector: "Healthcare network",
      title: "An online doctor on WhatsApp.",
      body: "Patients write on WhatsApp, an assistant receives them and connects them with a doctor. It also delivers results and handles paperwork.",
      chat: {
        name: "Online doctor",
        initial: "M",
        status: "assistant",
        messages: [
          { from: "customer", text: "Hi, I've had a fever since yesterday." },
          { from: "assistant", text: "Sorry you're feeling that way. I'll ask you a few quick questions and connect you with a doctor." },
        ],
      },
    },
  ],
};
