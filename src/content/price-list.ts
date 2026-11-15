export const PRICE_LIST = {
  web: { small: 400, midsize: 1500 },
  store: { small: 1200, midsize: 3500 },
  mobile: { installableWeb: 800, storeApp: 1800, midsize: 5000, enterprise: 20000 },
  automation: { small: 500, midsize: 3000 },
  ai: { small: 600, smallMonthly: 60, midsize: 2500, midsizeMonthly: 200 },
  custom: { small: 3000, midsize: 10000, enterprise: 30000 },
  cloud: { small: 500, smallMonthly: 100, midsize: 2500, midsizeMonthly: 400 },
  team: { midLevel: 2500, senior: 3500 },
  maintenance: { small: 80, midsize: 300 },
  appStoreYearly: 99,
  googlePlayOnce: 25,
} as const;
