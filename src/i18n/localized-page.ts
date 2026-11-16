import type { Locale } from "./locale";

export type LocalizedPage = {
  title: string;
  description: string;
  paths: Record<Locale, string>;
};
