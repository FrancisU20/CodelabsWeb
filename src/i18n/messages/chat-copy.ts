export type ChatCopy = {
  name: string;
  initial: string;
  status: string;
  channel?: "whatsapp" | "messenger" | "web";
  messages: { from: "customer" | "assistant"; text: string }[];
};
