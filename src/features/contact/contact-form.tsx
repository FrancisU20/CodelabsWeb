"use client";

import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import Button from "@/shared/ui/button/button";
import ConsentField from "./consent-field";
import ContactField from "./contact-field";
import ContactSuccess from "./contact-success";
import HoneypotField from "./honeypot-field";
import SubmissionFailure from "./submission-failure";
import { useContactSubmission } from "./use-contact-submission";

const ContactForm = ({ copy, locale }: { copy: Messages["contact"]; locale: Locale }) => {
  const { state, submit } = useContactSubmission(copy.message, locale);
  const submitting = state.status === "submitting";

  if (state.status === "accepted") {
    return <ContactSuccess copy={copy.success} reference={state.reference} whatsAppLink={state.whatsAppLink} />;
  }

  return (
    <form onSubmit={submit} className="flex min-w-0 flex-col gap-[18px] rounded-lg bg-panel p-[clamp(24px,3vw,36px)]" data-reveal data-floating-cover>
      <ContactField name="name" label={copy.labels.name} placeholder={copy.placeholders.name} autoComplete="name" required />
      <ContactField name="company" label={copy.labels.company} placeholder={copy.placeholders.company} autoComplete="organization" />
      <ContactField name="email" type="email" label={copy.labels.email} placeholder={copy.placeholders.email} autoComplete="email" required />
      <ContactField name="project" label={copy.labels.project} placeholder={copy.placeholders.project} multiline />
      <HoneypotField label={copy.honeypotLabel} />
      <ConsentField copy={copy.consent} locale={locale} />
      <Button type="submit" disabled={submitting} aria-busy={submitting}>
        {submitting ? copy.submitting : copy.submit}
      </Button>
      <div aria-live="polite">
        {state.status === "failed" && <SubmissionFailure message={copy.failure} actionLabel={copy.openWhatsApp} whatsAppLink={state.whatsAppLink} />}
      </div>
    </form>
  );
};

export default ContactForm;
