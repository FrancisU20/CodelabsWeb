import { formatList } from "./list-format";

export const countryNames = (countryCodes: readonly string[], locale: string): string[] => {
  const regionNames = new Intl.DisplayNames([locale], { type: "region" });
  return countryCodes.map((countryCode) => regionNames.of(countryCode) ?? countryCode);
};

export const formatCountryList = (countryCodes: readonly string[], locale: string): string =>
  formatList(countryNames(countryCodes, locale), locale);
