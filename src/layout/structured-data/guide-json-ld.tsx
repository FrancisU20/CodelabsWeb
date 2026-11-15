import { ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/config/site";
import type { Guide } from "@/content/guides/guide";
import { getMessages } from "@/i18n/messages/get-messages";
import { GUIDES_LOCALE, GUIDES_ROUTE, guidePath, pagePath } from "@/i18n/routing";

const GuideJsonLd = ({ guide }: { guide: Guide }) => {
  const url = `${SITE_URL}${guidePath(guide.slug)}`;
  const breadcrumb = [
    { name: SITE_NAME, item: `${SITE_URL}${pagePath("home", GUIDES_LOCALE)}` },
    { name: getMessages(GUIDES_LOCALE).guides.eyebrow, item: `${SITE_URL}${GUIDES_ROUTE}` },
    { name: guide.title, item: url },
  ];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.metaDescription,
        url,
        mainEntityOfPage: url,
        datePublished: guide.published,
        inLanguage: GUIDES_LOCALE,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: { "@type": "Answer", text: entry.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((entry, index) => ({ "@type": "ListItem", position: index + 1, ...entry })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
};

export default GuideJsonLd;
