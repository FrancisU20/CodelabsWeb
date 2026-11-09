"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { legalPath } from "@/i18n/routing";
import { HONEYPOT_FIELD } from "./build-lead-submission";
import ContactField from "./contact-field";
import ContactSuccess from "./contact-success";
import { useContactSubmission } from "./use-contact-submission";

const ContactForm = ({ copy, locale }: { copy: Messages["contact"]; locale: Locale }) => {
  const { state, submit } = useContactSubmission(copy.message, locale);
  const submitting = state.status === "submitting";

  if (state.status === "accepted") {
    return <ContactSuccess copy={copy.success} reference={state.reference} whatsAppLink={state.whatsAppLink} />;
  }

  return (
    <form onSubmit={submit} className="flex min-w-0 flex-col gap-[18px] rounded-[28px] border border-line bg-panel p-[clamp(24px,3vw,36px)]" data-reveal data-floating-cover>
      <ContactField name="name" label={copy.labels.name} placeholder={copy.placeholders.name} autoComplete="name" required />
      <ContactField name="company" label={copy.labels.company} placeholder={copy.placeholders.company} autoComplete="organization" />
      <ContactField name="email" type="email" label={copy.labels.email} placeholder={copy.placeholders.email} autoComplete="email" required />
      <ContactField name="project" label={copy.labels.project} placeholder={copy.placeholders.project} multiline />
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          {copy.honeypotLabel}
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-[13px] text-dim">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-none accent-[var(--brand-strong)]" />
        <span>
          {copy.consent.text}{" "}
          <Link href={legalPath("privacy", locale)} className="underline underline-offset-2 hover:text-fg">
            {copy.consent.linkLabel}
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="btn btn-primary" disabled={submitting} aria-busy={submitting}>
        {submitting ? copy.submitting : copy.submit}
      </button>
      <div aria-live="polite">
        {state.status === "failed" && (
          <p className="m-0 flex flex-col gap-3 rounded-2xl bg-panel-2 p-4">
            <span>{copy.failure}</span>
            <a href={state.whatsAppLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
              {copy.openWhatsApp}
            </a>
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
