import { LANGUAGE_TAGS, type Locale } from "@/i18n/locale";

export const formatGuideDate = (isoDate: string, locale: Locale): string =>
  new Intl.DateTimeFormat(LANGUAGE_TAGS[locale], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(isoDate));
