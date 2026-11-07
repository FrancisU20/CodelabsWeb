import { useState } from "react";
import type { FormEvent } from "react";
import { buildWhatsAppLink } from "@/config/contact";
import type { Messages } from "@/i18n/messages/messages";
import { buildContactMessage } from "./contact-message";

const NEW_TAB = "_blank";
const NEW_TAB_FEATURES = "noopener,noreferrer";

export const useContactSubmission = (labels: Messages["contact"]["message"]) => {
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const link = buildWhatsAppLink(buildContactMessage(labels, new FormData(event.currentTarget)));
    window.open(link, NEW_TAB, NEW_TAB_FEATURES);
    setWhatsAppLink(link);
  };

  return { whatsAppLink, submit };
};
