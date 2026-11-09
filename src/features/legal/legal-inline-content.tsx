import Link from "next/link";
import { buildWhatsAppLink, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PRIVACY_EMAIL, EMAIL_LINK } from "@/config/contact";
import type { LegalInline } from "@/content/legal/legal-inline";
import type { Locale } from "@/i18n/locale";
import { legalPath } from "@/i18n/routing";

const LINK_CLASS = "font-semibold text-fg underline";

const emailHref = (subject?: string): string => (subject ? `${EMAIL_LINK}?subject=${encodeURIComponent(subject)}` : EMAIL_LINK);

const InlinePart = ({ part, locale }: { part: LegalInline; locale: Locale }) => {
  if (typeof part === "string") return part;
  if (part.kind === "phone") return CONTACT_PHONE_DISPLAY;
  if (part.kind === "privacyEmail") {
    return (
      <a className={LINK_CLASS} href={`mailto:${CONTACT_PRIVACY_EMAIL}`}>
        {CONTACT_PRIVACY_EMAIL}
      </a>
    );
  }
  if (part.kind === "email") {
    return (
      <a className={LINK_CLASS} href={emailHref(part.subject)}>
        {CONTACT_EMAIL}
      </a>
    );
  }
  if (part.kind === "whatsapp") {
    return (
      <a className={LINK_CLASS} href={buildWhatsAppLink(part.message)}>
        {CONTACT_PHONE_DISPLAY}
      </a>
    );
  }
  return (
    <Link className={LINK_CLASS} href={legalPath(part.document, locale)}>
      {part.label}
    </Link>
  );
};

const LegalInlineContent = ({ content, locale }: { content: LegalInline[]; locale: Locale }) => (
  <>
    {content.map((part, position) => (
      <InlinePart key={position} part={part} locale={locale} />
    ))}
  </>
);

export default LegalInlineContent;
