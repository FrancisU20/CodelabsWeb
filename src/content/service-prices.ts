import { PRICE_LIST } from "./price-list";
import type { ServiceId } from "./service-id";
import type { ServicePrice } from "./service-price";

export const SERVICE_PRICES: Record<ServiceId, ServicePrice> = {
  web: { from: PRICE_LIST.web.small },
  mobile: { from: PRICE_LIST.mobile.installableWeb },
  automation: { from: PRICE_LIST.automation.small },
  ai: { from: PRICE_LIST.ai.small, monthlyFrom: PRICE_LIST.ai.smallMonthly },
  custom: { from: PRICE_LIST.custom.small },
  cloud: { from: PRICE_LIST.cloud.small, monthlyFrom: PRICE_LIST.cloud.smallMonthly },
};
