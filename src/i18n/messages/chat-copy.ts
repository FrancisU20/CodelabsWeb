export type ChatCopy = {
  name: string;
  initial: string;
  status: string;
  messages: { from: "customer" | "assistant"; text: string }[];
};
