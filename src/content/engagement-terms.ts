import type { EngagementModelId } from "./engagement-model-id";

export const ENGAGEMENT_MODELS: readonly EngagementModelId[] = ["fixed", "dedicated", "extension"];

export const ENGAGEMENT_TERMS = {
  paymentStart: 50,
  proposalDays: 3,
  warrantyDays: 60,
  minimumMonths: 3,
  deliveryEveryWeeks: 2,
} as const;
