import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { legalPath } from "@/i18n/routing";

type ConsentFieldProps = {
  copy: Messages["contact"]["consent"];
  locale: Locale;
};

const ConsentField = ({ copy, locale }: ConsentFieldProps) => (
  <label className="flex items-start gap-3 text-xs text-dim">
    <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-none accent-[var(--brand-strong)]" />
    <span>
      {copy.text}{" "}
      <Link href={legalPath("privacy", locale)} className="underline underline-offset-2 hover:text-fg">
        {copy.linkLabel}
      </Link>
      .
    </span>
  </label>
);

export default ConsentField;
