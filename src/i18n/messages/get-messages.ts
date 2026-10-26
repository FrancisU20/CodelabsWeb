import type { Locale } from "../locale";
import { enMessages } from "./en";
import { esMessages } from "./es";
import type { Messages } from "./messages";

const MESSAGES: Record<Locale, Messages> = { es: esMessages, en: enMessages };

export const getMessages = (locale: Locale): Messages => MESSAGES[locale];
