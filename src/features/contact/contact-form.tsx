"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { buildWhatsAppLink } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Icon from "@/shared/ui/icons/svg-icon";
import ContactField from "./contact-field";
import { buildContactMessage } from "./contact-message";

const NEW_TAB = "_blank";
const NEW_TAB_FEATURES = "noopener,noreferrer";

const ContactForm = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).contact;
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const link = buildWhatsAppLink(buildContactMessage(copy.message, new FormData(event.currentTarget)));
    window.open(link, NEW_TAB, NEW_TAB_FEATURES);
    setWhatsAppLink(link);
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-[18px] rounded-[28px] border border-line bg-panel p-[clamp(24px,3vw,36px)]" data-reveal>
      <ContactField name="name" label={copy.labels.name} placeholder={copy.placeholders.name} autoComplete="name" required />
      <ContactField name="company" label={copy.labels.company} placeholder={copy.placeholders.company} autoComplete="organization" />
      <ContactField name="email" type="email" label={copy.labels.email} placeholder={copy.placeholders.email} autoComplete="email" />
      <ContactField name="project" label={copy.labels.project} placeholder={copy.placeholders.project} multiline />
      <button type="submit" className="btn btn-whatsapp">
        <Icon name="whatsapp" className="h-[22px] w-[22px]" />
        {copy.submit}
      </button>
      <div aria-live="polite">
        {whatsAppLink && (
          <p className="m-0 flex flex-col gap-3 rounded-2xl bg-panel-2 p-4">
            <span>{copy.ready}</span>
            <a href={whatsAppLink} target={NEW_TAB} rel="noopener noreferrer" className="font-semibold text-brand">
              {copy.openWhatsApp}
            </a>
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
