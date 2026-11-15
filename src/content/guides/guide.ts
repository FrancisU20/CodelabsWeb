import type { ServiceId } from "../service-id";
import type { GuideFaq } from "./guide-faq";
import type { GuideSection } from "./guide-section";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  published: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  services: ServiceId[];
};
