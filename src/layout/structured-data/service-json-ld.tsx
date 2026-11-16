import { ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/config/site";
import { SERVICE_PRICES } from "@/content/service-prices";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath, servicePath } from "@/i18n/routing";
import { serviceFaqs } from "@/i18n/service-faqs";
import { servedCountries } from "./served-countries";
import JsonLdScript from "./json-ld-script";
import { breadcrumbNode, faqPageNode } from "./schema-nodes";

const PRICE_CURRENCY = "USD";

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
    "@graph": [
      {
        "@type": "Service",
        name: detail.title,
        description: detail.seoDescription,
        url,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: servedCountries(locale),
        offers: {
          "@type": "Offer",
          priceCurrency: PRICE_CURRENCY,
          priceSpecification: { "@type": "PriceSpecification", minPrice: SERVICE_PRICES[service].from, priceCurrency: PRICE_CURRENCY },
        },
      },
      faqPageNode(serviceFaqs(service, locale)),
      breadcrumbNode(breadcrumb),
    ],
  };

  return <JsonLdScript data={graph} />;
};

export default ServiceJsonLd;
