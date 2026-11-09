import type { LegalDocument } from "../legal-document";
import { COURTESY_TRANSLATION_NOTICE, documentLink, EMAIL, paragraph, PHONE } from "../legal-tokens";

export const terms: LegalDocument = {
  layout: "articles",
  metaTitle: "Terms and conditions of use",
  metaDescription: "Conditions for accessing and using codelabsecuador.com and CodeLabs services.",
  eyebrow: "Terms and conditions",
  title: "Terms and conditions of use",
  intro:
    "These terms govern access to and use of the website codelabsecuador.com (the “Site”) and the relationship between the visitor or client (the “User”) and CodeLabs. By browsing the Site, completing a form or engaging our services, the User declares having read and accepted these terms in full.",
  updated: "Last updated: November 7, 2026",
  notice: COURTESY_TRANSLATION_NOTICE,
  sections: [
    {
      heading: "1. Identity of the party responsible for the Site",
      blocks: [
        paragraph("The Site is operated by ULLOA TERAN FRANCISCO MATEO, a natural person with RUC (tax ID) 1003368725001, domiciled in Ecuador, who carries out business under the trade name “CodeLabs” (hereinafter “CodeLabs” or “we”). For enquiries, support or the exercise of rights, the User may write to ", EMAIL, " or call ", PHONE, "."),
      ],
    },
    {
      heading: "2. Acceptance and capacity to contract",
      blocks: [
        paragraph("Use of the Site implies full acceptance of these terms. If the User does not agree with any provision, the User must refrain from using the Site or engaging services. The User declares having legal capacity to contract under Ecuadorian law and, if acting on behalf of a company, declares having the necessary authority to bind it to these terms."),
      ],
    },
    {
      heading: "3. Description of the Site and services",
      blocks: [
        paragraph("The Site has informational and commercial purposes: it presents the capabilities, success stories and contact details of CodeLabs, and allows Users to request a quotation or begin a commercial conversation. The Site by itself does not constitute a contract offer and does not process online payments. The software design, development, architecture and operation services offered by CodeLabs are engaged through a separate commercial proposal, quotation or service agreement, which sets out the scope, deliverables, timelines, commercial conditions and payment terms applicable to each project. In the event of a conflict between that agreement and these general terms, what has been expressly agreed in the service agreement prevails."),
      ],
    },
    {
      heading: "4. Quotations and commercial conditions",
      blocks: [
        paragraph("Quotations and estimates shared by CodeLabs are for reference until confirmed in writing and do not by themselves create a contractual relationship. Invoicing, payment terms, advance payment policies and, where applicable, project cancellation conditions are defined in the agreement or proposal signed for each service. CodeLabs issues the sales documents required by current Ecuadorian tax regulations for services actually rendered."),
      ],
    },
    {
      heading: "5. Permitted use of the Site",
      blocks: [
        paragraph("The User undertakes to use the Site in accordance with the law, morals, public order and these terms. The following are prohibited: (i) using the Site for unlawful or fraudulent purposes; (ii) sending unsolicited communications (spam) through our forms or channels; (iii) attempting to compromise the security, availability or integrity of the Site or its systems; (iv) mass extraction of content from the Site (scraping) without authorization; and (v) impersonating third parties or providing false information."),
      ],
    },
    {
      heading: "6. Intellectual property",
      blocks: [
        paragraph("The content of the Site (texts, brand, logos, design, source code of the Site, images and other elements) is the property of CodeLabs or its licensors and is protected by the intellectual property regulations applicable in Ecuador and by international treaties. Its reproduction, distribution, transformation or public communication is not authorized without prior written authorization, except in the cases permitted by law. The trademarks, logos and names of third parties (including clients and technology providers mentioned on the Site) belong to their respective owners and are mentioned solely for informational purposes or technical reference."),
      ],
    },
    {
      heading: "7. Confidentiality",
      blocks: [
        paragraph("Business information that the User shares through forms, email or contact channels in order to evaluate a project (including technical or commercial descriptions) will be treated confidentially and used only to prepare a response or proposal, unless the User expressly authorizes another use. The confidentiality terms applicable during the execution of a project are set out in the corresponding service agreement."),
      ],
    },
    {
      heading: "8. Limitation of liability",
      blocks: [
        paragraph("The Site is provided “as is” and “as available”. CodeLabs adopts reasonable security and availability measures, but does not guarantee that the Site is free of errors, interruptions or vulnerabilities. To the maximum extent permitted by Ecuadorian law, CodeLabs shall not be liable for indirect or incidental damages or loss of profits arising from the use of or inability to use the Site. This limitation does not apply to liability that, by law, cannot be excluded or limited, nor does it replace the specific obligations assumed in a service agreement."),
      ],
    },
    {
      heading: "9. Third-party links",
      blocks: [
        paragraph("The Site may include links to third-party sites (for example, social networks, repositories or client sites). CodeLabs does not control and is not responsible for the content, privacy policies or practices of those sites. We recommend reviewing the terms and policies of each third-party site before using it."),
      ],
    },
    {
      heading: "10. Personal data protection",
      blocks: [
        paragraph("The processing of personal data carried out through the Site is governed by Ecuador's Organic Law on Personal Data Protection (LOPDP), our ", documentLink("privacy", "Privacy Policy"), " and our ", documentLink("dataProcessing", "Data Processing Policy"), ", documents that form an integral part of these terms."),
      ],
    },
    {
      heading: "11. Changes to these terms",
      blocks: [
        paragraph("CodeLabs may update these terms to reflect legal or regulatory changes or changes in the operation of the Site or the services. The current version will always be the one published on this page, together with its last update date. Continued use of the Site after an update implies acceptance of the terms in force."),
      ],
    },
    {
      heading: "12. Governing law and jurisdiction",
      blocks: [
        paragraph("These terms are governed by and construed in accordance with the laws of the Republic of Ecuador, including, as applicable, the Law on Electronic Commerce, Electronic Signatures and Data Messages, the Organic Law on Consumer Protection and the Organic Law on Personal Data Protection. For any dispute arising from the use of the Site that cannot be resolved directly between the parties, those involved submit to the competent judges of Ecuador, without prejudice to any specific jurisdiction conditions that a particular service agreement may establish."),
      ],
    },
    {
      heading: "13. Contact",
      blocks: [
        paragraph("For enquiries about these terms, write to us at ", EMAIL, " or call ", PHONE, "."),
      ],
    },
  ],
};
