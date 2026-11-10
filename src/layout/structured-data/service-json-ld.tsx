import { ORGANIZATION_ID, SITE_LOCATION, SITE_NAME, SITE_URL } from "@/config/site";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath, servicePath } from "@/i18n/routing";

const ServiceJsonLd = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const detail = messages.servicePages.items[service];
  const url = `${SITE_URL}${servicePath(service, locale)}`;
  const breadcrumb = [
    { name: SITE_NAME, item: `${SITE_URL}${pagePath("home", locale)}` },
    { name: messages.nav.services, item: `${SITE_URL}${pagePath("services", locale)}` },
    { name: detail.title, item: url },
  ];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: detail.title,
        description: detail.seoDescription,
        url,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: SITE_LOCATION.countryName },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((entry, index) => ({ "@type": "ListItem", position: index + 1, ...entry })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
};

export default ServiceJsonLd;
