"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { legalPath } from "@/i18n/routing";
import Icon from "@/shared/ui/icons/svg-icon";
import ContactField from "./contact-field";
import { useContactSubmission } from "./use-contact-submission";

const ContactForm = ({ copy, locale }: { copy: Messages["contact"]; locale: Locale }) => {
  const { whatsAppLink, submit } = useContactSubmission(copy.message);

  return (
    <form onSubmit={submit} className="flex min-w-0 flex-col gap-[18px] rounded-[28px] border border-line bg-panel p-[clamp(24px,3vw,36px)]" data-reveal data-floating-cover>
      <ContactField name="name" label={copy.labels.name} placeholder={copy.placeholders.name} autoComplete="name" required />
      <ContactField name="company" label={copy.labels.company} placeholder={copy.placeholders.company} autoComplete="organization" />
      <ContactField name="email" type="email" label={copy.labels.email} placeholder={copy.placeholders.email} autoComplete="email" />
      <ContactField name="project" label={copy.labels.project} placeholder={copy.placeholders.project} multiline />
      <p className="m-0 text-[13px] text-dim">
        {copy.privacyNotice.text}{" "}
        <Link href={legalPath("privacy", locale)} className="underline underline-offset-2 hover:text-fg">
          {copy.privacyNotice.linkLabel}
        </Link>
        .
      </p>
      <button type="submit" className="btn btn-whatsapp">
        <Icon name="whatsapp" className="h-[22px] w-[22px]" />
        {copy.submit}
      </button>
      <div aria-live="polite">
        {whatsAppLink && (
          <p className="m-0 flex flex-col gap-3 rounded-2xl bg-panel-2 p-4">
            <span>{copy.ready}</span>
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
              {copy.openWhatsApp}
            </a>
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
