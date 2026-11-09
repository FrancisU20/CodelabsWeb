import type { LegalDocument } from "../legal-document";
import { COURTESY_TRANSLATION_NOTICE, EMAIL, list, paragraph } from "../legal-tokens";

export const dataProcessing: LegalDocument = {
  layout: "articles",
  metaTitle: "Personal data processing policy",
  metaDescription: "How CodeLabs processes the data of clients, prospects and suppliers under the LOPDP.",
  eyebrow: "Data processing policy",
  title: "Personal data processing policy",
  intro:
    "This policy describes, in compliance with Ecuador's Organic Law on Personal Data Protection (LOPDP), how CodeLabs processes the personal data of clients, prospects, suppliers and users of the Site. It complements our Privacy Policy and forms part of our Terms and Conditions.",
  updated: "Last updated: November 7, 2026",
  notice: COURTESY_TRANSLATION_NOTICE,
  sections: [
    {
      heading: "1. Data controller",
      blocks: [
        paragraph("CodeLabs, operated by ULLOA TERAN FRANCISCO MATEO (RUC 1003368725001), acts as the controller of the personal data described in this policy. To exercise your rights or make enquiries, write to us at ", EMAIL, "."),
      ],
    },
    {
      heading: "2. Purposes of processing",
      blocks: [
        list(
          ["Responding to requests for information, meetings and commercial proposals."],
          ["Negotiating, formalizing and performing software development and architecture agreements."],
          ["Managing invoicing, collections, after-sales support and operational continuity."],
          ["Monitoring the security, performance and quality of our services and the Site."],
          ["Complying with legal, tax and regulatory obligations applicable in Ecuador."],
          ["Preventing fraud and protecting our systems against misuse."],
        ),
      ],
    },
    {
      heading: "3. Categories of data processed",
      blocks: [
        paragraph("We process identification and contact data (name, email address, telephone number), professional and business information (position, company, project needs), the minimal technical data necessary for the security of the Site (access logs, performance metrics) and the contractual and invoicing documentation inherent to the commercial relationship. We do not request special categories of personal data (sensitive data) unless a specific project exceptionally requires it, and then only under reinforced agreements and protection measures."),
      ],
    },
    {
      heading: "4. Legal basis and legitimacy",
      blocks: [
        paragraph("Processing is based, as applicable, on: the consent of the data subject; the need for processing to perform a contract or pre-contractual measures requested by the data subject; compliance with legal obligations applicable to CodeLabs; and the legitimate interest of CodeLabs in responding to requests, maintaining the security of its systems and improving its services, provided that such interest does not disproportionately affect the rights of the data subject."),
      ],
    },
    {
      heading: "5. Data retention",
      blocks: [
        paragraph("We retain personal data for the duration of the contractual relationship and, thereafter, for the periods required by tax, accounting, labor or other regulations applicable in Ecuador, or for as long as necessary to defend against claims. Once those periods have expired, the data is securely deleted or anonymized."),
      ],
    },
    {
      heading: "6. Data processors and third parties",
      blocks: [
        paragraph("We may share personal data with providers acting as data processors on behalf of CodeLabs (for example, providers of cloud infrastructure, email, project management tools or support), who are contractually obliged to process the data in accordance with our instructions, to maintain confidentiality and to apply adequate security measures. We do not sell or assign personal data to third parties for those third parties' own commercial purposes."),
      ],
    },
    {
      heading: "7. International transfers",
      blocks: [
        paragraph("Where a data processor is located outside Ecuador, we apply the safeguards provided in the LOPDP for international transfers of personal data, such as contractual clauses, recognized security certifications or verification that the destination country offers an adequate level of protection, as applicable."),
      ],
    },
    {
      heading: "8. Rights of data subjects",
      blocks: [
        paragraph("You may at any time exercise your rights of access, rectification, updating, erasure, objection and portability of your personal data, and withdraw any consent given, where applicable. To do so, write to us at ", EMAIL, " clearly stating your request. We will respond to your request within the periods provided by applicable regulations and, if you are not satisfied with the response, you may contact the competent personal data protection authority in Ecuador."),
      ],
    },
    {
      heading: "9. Information security",
      blocks: [
        paragraph("We implement reasonable technical and organizational measures —encryption in transit, access control under the principle of least privilege, segmentation of sensitive information and monitoring— to prevent unauthorized access, loss, alteration or improper disclosure of the personal data we process."),
      ],
    },
    {
      heading: "10. Incident notification",
      blocks: [
        paragraph("In the event of a security breach affecting personal data that poses a risk to the rights of data subjects, CodeLabs will notify the incident to the data subjects and, where appropriate, to the competent personal data protection authority, in accordance with the timelines and conditions established in the LOPDP."),
      ],
    },
    {
      heading: "11. Updates to this policy",
      blocks: [
        paragraph("We may update this policy to reflect legal or regulatory changes or changes in our data processing practices. The current version will always be available on this Site, together with its last update date."),
      ],
    },
  ],
};
