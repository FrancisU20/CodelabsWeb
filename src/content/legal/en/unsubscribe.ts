import type { LegalDocument } from "../legal-document";
import { COURTESY_TRANSLATION_NOTICE, documentLink, emailWithSubject, list, paragraph, whatsApp } from "../legal-tokens";

export const unsubscribe: LegalDocument = {
  layout: "cards",
  metaTitle: "How to unsubscribe from our communications",
  metaDescription: "Request to stop receiving communications from CodeLabs at any time.",
  eyebrow: "Unsubscribe",
  title: "How to unsubscribe from our communications",
  intro:
    "In exercise of your right to object under Ecuador's Organic Law on Personal Data Protection (LOPDP), you may at any time request to stop receiving commercial or marketing communications from CodeLabs. We will process your request as soon as possible.",
  updated: "Last updated: June 29, 2026",
  notice: COURTESY_TRANSLATION_NOTICE,
  sections: [
    {
      heading: "Scope of this request",
      blocks: [
        paragraph("Unsubscribing applies to commercial and marketing communications (for example, news, promotional content or invitations). It does not apply to transactional or contractual communications essential to providing the service (such as confirmations, invoicing notices or notifications related to an ongoing project), which will continue to be sent while a contractual relationship is in force, as necessary for its proper performance."),
      ],
    },
    {
      heading: "Options to unsubscribe",
      blocks: [
        list(
          ["Send an email to ", emailWithSubject("Unsubscribe"), " stating the email address you wish to remove from our communication lists."],
          ["Contact us on WhatsApp at ", whatsApp("I request to unsubscribe"), " expressly requesting to unsubscribe."],
        ),
      ],
    },
    {
      heading: "Processing time",
      blocks: [
        paragraph("We handle unsubscribe requests within the periods established by applicable regulations and, in practice, as soon as possible. If you receive an additional communication while your request is being processed, you may ignore it; your removal will take effect once the process has been completed."),
      ],
    },
    {
      heading: "Privacy and security",
      blocks: [
        paragraph("Your unsubscribe request and the data associated with it are managed in accordance with our ", documentLink("privacy", "Privacy Policy"), " and our ", documentLink("dataProcessing", "Data Processing Policy"), ". We will only use the information you provide to process your removal and, where applicable, we may keep a minimal record of the request to demonstrate compliance."),
      ],
    },
  ],
};
