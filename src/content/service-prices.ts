import type { ServiceId } from "./service-id";
import type { ServicePrice } from "./service-price";

export const SERVICE_PRICES: Record<ServiceId, ServicePrice> = {
  web: { from: 400 },
  mobile: { from: 800 },
  automation: { from: 500 },
  ai: { from: 600, monthlyFrom: 60 },
  custom: { from: 3000 },
  cloud: { from: 500, monthlyFrom: 100 },
};
