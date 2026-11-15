import { SERVICE_PRICES } from "@/content/service-prices";
import type { ServiceId } from "@/content/service-id";
import { formatUsd } from "./format-usd";
import { LANGUAGE_TAGS, type Locale } from "./locale";
import { getMessages } from "./messages/get-messages";

export const servicePriceLabel = (service: ServiceId, locale: Locale): string => {
  const { from, monthlyFrom } = SERVICE_PRICES[service];
  const { pricing } = getMessages(locale);
  const languageTag = LANGUAGE_TAGS[locale];
  const base = `${pricing.from} ${formatUsd(from, languageTag)}`;
  return monthlyFrom === undefined ? base : `${base} + ${formatUsd(monthlyFrom, languageTag)} ${pricing.perMonth}`;
};
