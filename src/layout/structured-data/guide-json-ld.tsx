import { FOUNDER_LINKEDIN_URL, FOUNDER_NAME, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/config/site";
import type { Guide } from "@/content/guides/guide";
import { getMessages } from "@/i18n/messages/get-messages";
import { GUIDES_LOCALE, GUIDES_ROUTE, guidePath, pagePath } from "@/i18n/routing";
import JsonLdScript from "./json-ld-script";
import { breadcrumbNode, faqPageNode } from "./schema-nodes";

const GuideJsonLd = ({ guide }: { guide: Guide }) => {
  const url = `${SITE_URL}${guidePath(guide.slug)}`;
  const breadcrumb = [
    { name: SITE_NAME, item: `${SITE_URL}${pagePath("home", GUIDES_LOCALE)}` },
    { name: getMessages(GUIDES_LOCALE).guides.eyebrow, item: `${SITE_URL}${GUIDES_ROUTE}` },
    { name: guide.title, item: url },
  ];
  const graph = {
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.metaDescription,
        url,
        mainEntityOfPage: url,
        datePublished: guide.published,
        inLanguage: GUIDES_LOCALE,
        author: { "@type": "Person", name: FOUNDER_NAME, url: FOUNDER_LINKEDIN_URL, worksFor: { "@id": ORGANIZATION_ID } },
        publisher: { "@id": ORGANIZATION_ID },
      },
      faqPageNode(guide.faqs),
      breadcrumbNode(breadcrumb),
    ],
  };

  return <JsonLdScript data={graph} />;
};

export default GuideJsonLd;
