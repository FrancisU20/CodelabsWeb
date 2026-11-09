import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { buildWhatsAppLink } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { buildLeadSubmission } from "./build-lead-submission";
import { buildContactMessage } from "./contact-message";
import { sendLead } from "./send-lead";
import type { SubmissionState } from "./submission-state";

export const useContactSubmission = (labels: Messages["contact"]["message"], locale: Locale) => {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState({ status: "submitting" });
    try {
      const reference = await sendLead(buildLeadSubmission(data, locale, Date.now() - startedAt.current));
      setState({ status: "accepted", reference, whatsAppLink: buildWhatsAppLink(buildContactMessage(labels, data, reference)) });
    } catch {
      setState({ status: "failed", whatsAppLink: buildWhatsAppLink(buildContactMessage(labels, data)) });
    }
  };

  return { state, submit };
};
