import type { Messages } from "../messages";

export const aiCases: Messages["aiCases"] = {
  label: "With artificial intelligence",
  note: "Example conversations.",
  items: [
    {
      sector: "Pharmacy chain",
      title: "Management checks inventory on WhatsApp.",
      body: "An AI assistant answers how much stock the central warehouse has, without opening reports or asking anyone.",
      chat: {
        name: "Central warehouse",
        initial: "W",
        status: "assistant",
        messages: [
          { from: "customer", text: "How many boxes of paracetamol 500 mg do we have?" },
          { from: "assistant", text: "There are 1,240 boxes. At this week's pace they last about 9 days." },
        ],
      },
    },
    {
      sector: "Health company",
      title: "An online doctor on WhatsApp.",
      body: "Patients write on WhatsApp and a virtual assistant receives them and guides them through their consultation.",
      chat: {
        name: "Online doctor",
        initial: "D",
        status: "assistant",
        messages: [
          { from: "customer", text: "Hi, I've had a fever since yesterday." },
          { from: "assistant", text: "Sorry you're feeling unwell. I'll ask you a few quick questions and connect you with a doctor." },
        ],
      },
    },
    {
      sector: "Beauty studio",
      title: "Clients book on WhatsApp at any hour.",
      body: "An AI assistant knows the services, answers questions and books the appointment.",
      chat: {
        name: "Beauty studio",
        initial: "B",
        status: "assistant",
        messages: [
          { from: "customer", text: "Do you have a manicure slot on Friday?" },
          { from: "assistant", text: "Yes, at 15:00 or 17:30. Should I book one for you?" },
        ],
      },
    },
  ],
};
