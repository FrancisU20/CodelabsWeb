import { ENGAGEMENT_TERMS } from "@/content/engagement-terms";
import { fillTemplate } from "./fill-template";

const TERM_VALUES = {
  start: ENGAGEMENT_TERMS.paymentStart,
  proposal: ENGAGEMENT_TERMS.proposalDays,
  weeks: ENGAGEMENT_TERMS.deliveryEveryWeeks,
  warranty: ENGAGEMENT_TERMS.warrantyDays,
  months: ENGAGEMENT_TERMS.minimumMonths,
};

export const fillTerms = (template: string): string => fillTemplate(template, TERM_VALUES);
