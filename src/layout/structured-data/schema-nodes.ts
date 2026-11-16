import type { BreadcrumbEntry } from "./breadcrumb-entry";
import type { FaqEntry } from "./faq-entry";
import type { JsonValue } from "./json-value";

export const faqPageNode = (faqs: FaqEntry[]): JsonValue => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: { "@type": "Answer", text: entry.answer },
  })),
});

export const breadcrumbNode = (entries: BreadcrumbEntry[]): JsonValue => ({
  "@type": "BreadcrumbList",
  itemListElement: entries.map((entry, index) => ({ "@type": "ListItem", position: index + 1, ...entry })),
});
