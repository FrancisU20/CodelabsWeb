import type { ServiceId } from "@/content/service-id";
import { fillTerms } from "./fill-terms";
import type { Locale } from "./locale";
import { getMessages } from "./messages/get-messages";
import { servicePriceValue } from "./service-price-label";

export const serviceFaqs = (service: ServiceId, locale: Locale): { question: string; answer: string }[] => {
  const messages = getMessages(locale);
  const values = {
    price: servicePriceValue(service, locale),
    timeline: messages.servicePages.items[service].timeline,
  };
  return messages.serviceDetails.items[service].faqs.map((entry) => ({ question: entry.question, answer: fillTerms(entry.answer, values) }));
};
