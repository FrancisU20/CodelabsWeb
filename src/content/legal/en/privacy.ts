import type { LegalDocument } from "../legal-document";
import { COURTESY_TRANSLATION_NOTICE, documentLink, EMAIL, list, paragraph, PHONE } from "../legal-tokens";

export const privacy: LegalDocument = {
  layout: "articles",
  metaTitle: "Privacy policy",
  metaDescription: "How CodeLabs collects, uses and protects your personal data under Ecuador's LOPDP.",
  eyebrow: "Privacy policy",
  title: "Privacy policy",
  intro:
    "At CodeLabs we respect your privacy and process your personal data in accordance with Ecuador's Organic Law on Personal Data Protection (LOPDP) and other applicable regulations. This document explains what information we collect, for what purpose, on what basis we process it and what your rights are as a data subject.",
  updated: "Last updated: November 7, 2026",
  notice: COURTESY_TRANSLATION_NOTICE,
  sections: [
    {
      heading: "1. Data controller",
      blocks: [
        paragraph("The controller of your personal data is ULLOA TERAN FRANCISCO MATEO, a natural person with RUC (tax ID) 1003368725001, operating under the trade name CodeLabs. You can contact us about any matter related to this policy at ", EMAIL, "."),
      ],
    },
    {
      heading: "2. Information we collect",
      blocks: [
        list(
          ["Identification and contact data: name, email address, telephone number and company."],
          ["Project information: business context, technical requirements and objectives you share with us so that we can prepare a proposal."],
          ["Minimal technical browsing data: basic logs and cookies strictly necessary for the security and operation of the Site. We do not use third-party advertising or tracking cookies."],
          ["Communications: the content of the messages you send us by email, WhatsApp or contact forms."],
        ),
      ],
    },
    {
      heading: "3. Purposes of processing",
      blocks: [
        list(
          ["Answering your enquiries and arranging meetings or calls."],
          ["Preparing proposals, quotations and technical plans."],
          ["Performing and following up on current service agreements."],
          ["Maintaining the security, integrity and proper operation of the Site."],
          ["Complying with applicable legal, accounting and tax obligations."],
        ),
        paragraph("We do not use your data for purposes other than those described without informing you and, where the law requires it, without your prior consent."),
      ],
    },
    {
      heading: "4. Legal basis for processing",
      blocks: [
        paragraph("We process your personal data on the basis of: (i) your consent, given for example when completing a contact form; (ii) the performance of a service agreement to which you are a party or its pre-contractual negotiations; (iii) compliance with legal obligations applicable to CodeLabs; and (iv) our legitimate interest in responding to requests and maintaining the security of our systems, provided that such interest does not override your fundamental rights."),
      ],
    },
    {
      heading: "5. Retention periods",
      blocks: [
        paragraph("We retain your personal data only for as long as necessary to fulfil the purposes described, for the duration of the contractual relationship (if any) and, thereafter, for the periods required by tax, accounting or other regulations applicable in Ecuador, or for as long as necessary to address potential claims or requests from a competent authority. Once those periods have expired, the data is securely deleted or anonymized."),
      ],
    },
    {
      heading: "6. Information security",
      blocks: [
        paragraph("We apply reasonable technical and organizational measures to protect your personal data, including encryption in transit (TLS), access control under the principle of least privilege and periodic review of our security practices. No system is completely infallible; if we detect an incident affecting your personal data that poses a risk to your rights, we will notify you as required by the LOPDP."),
      ],
    },
    {
      heading: "7. Sharing with third parties",
      blocks: [
        paragraph("We do not sell or market your personal data. We may share information with providers that supply services necessary for our operations (for example, cloud hosting, email or project management tools), who act as data processors under confidentiality and data protection agreements, and only to the extent necessary to provide those services. We may also disclose information when required by a competent authority in accordance with the law."),
      ],
    },
    {
      heading: "8. International data transfers",
      blocks: [
        paragraph("Some of our technology providers (for example, cloud infrastructure services) may store or process data outside Ecuador. In those cases, we require such providers to maintain adequate levels of protection through contractual clauses, security certifications or other recognized mechanisms, as provided in the LOPDP for international transfers of personal data."),
      ],
    },
    {
      heading: "9. Your rights as a data subject",
      blocks: [
        paragraph("Under the LOPDP, you may at any time exercise your rights of access, rectification, updating, erasure, objection, portability and not to be subject to automated decisions producing legal effects concerning you, and you may withdraw any consent you have given. To exercise them, write to us at ", EMAIL, " stating your request and the details that allow us to identify you. We will respond to your request within the periods established by applicable regulations. If you believe your rights have not been properly addressed, you may contact the competent personal data protection authority in Ecuador."),
      ],
    },
    {
      heading: "10. Minors",
      blocks: [
        paragraph("Our services are intended for companies and professionals, not for minors. We do not knowingly collect personal data from minors through the Site. If we become aware that data from a minor has been collected without the authorization of their legal representative, we will delete it."),
      ],
    },
    {
      heading: "11. Changes to this policy",
      blocks: [
        paragraph("We may update this policy to reflect legal or regulatory changes or changes in our data processing practices. The current version will always be available on this page, together with its last update date."),
      ],
    },
    {
      heading: "12. Contact",
      blocks: [
        paragraph("To exercise your rights or resolve questions about this policy, contact us at ", EMAIL, " or by telephone at ", PHONE, ". This policy is complemented by our ", documentLink("dataProcessing", "Data Processing Policy"), "."),
      ],
    },
  ],
};
