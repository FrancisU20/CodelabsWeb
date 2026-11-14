export const countryNames = (countryCodes: readonly string[], locale: string): string[] => {
  const regionNames = new Intl.DisplayNames([locale], { type: "region" });
  return countryCodes.map((countryCode) => regionNames.of(countryCode) ?? countryCode);
};

export const formatCountryList = (countryCodes: readonly string[], locale: string): string =>
  new Intl.ListFormat(locale, { type: "conjunction" }).format(countryNames(countryCodes, locale));
