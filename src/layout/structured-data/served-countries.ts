import { COUNTRIES_SERVED } from "@/content/company-figures";
import type { Locale } from "@/i18n/locale";
import { countryNames } from "@/shared/lib/country-names";

export const servedCountries = (locale: Locale) =>
  countryNames(COUNTRIES_SERVED, locale).map((name) => ({ "@type": "Country", name }));
