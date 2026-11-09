import type { Messages } from "@/i18n/messages/messages";
import { fieldValue } from "./form-field-value";

type MessageLabels = Messages["contact"]["message"];

export const buildContactMessage = (labels: MessageLabels, data: FormData, reference?: string): string =>
  [
    `${labels.greeting} ${fieldValue(data, "name") || labels.fallbackName}.`,
    reference && `${labels.reference} ${reference}`,
    fieldValue(data, "company") && `${labels.company} ${fieldValue(data, "company")}`,
    fieldValue(data, "email") && `${labels.email} ${fieldValue(data, "email")}`,
    fieldValue(data, "project") && `${labels.project} ${fieldValue(data, "project")}`,
  ]
    .filter(Boolean)
    .join("\n");
