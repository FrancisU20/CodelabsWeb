import type { Messages } from "@/i18n/messages/messages";

type MessageLabels = Messages["contact"]["message"];

const fieldValue = (data: FormData, name: string): string => String(data.get(name) ?? "").trim();

export const buildContactMessage = (labels: MessageLabels, data: FormData): string =>
  [
    `${labels.greeting} ${fieldValue(data, "name") || labels.fallbackName}.`,
    fieldValue(data, "company") && `${labels.company} ${fieldValue(data, "company")}`,
    fieldValue(data, "email") && `${labels.email} ${fieldValue(data, "email")}`,
    fieldValue(data, "project") && `${labels.project} ${fieldValue(data, "project")}`,
  ]
    .filter(Boolean)
    .join("\n");
