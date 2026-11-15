export const formatUsd = (amount: number, languageTag: string): string =>
  new Intl.NumberFormat(languageTag, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
