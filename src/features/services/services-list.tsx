import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
import { servicePriceValue } from "@/i18n/service-price-label";
import Section from "@/shared/ui/section/section";
import ServiceCard from "./service-card";

const ServicesList = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const dict = messages.services;

  return (
    <Section tone="mist" space="section" id="servicios" aria-label={messages.nav.services}>
      <div className="site-wrap">
        {dict.items.map((service) => (
          <ServiceCard
            key={service.id}
            href={servicePath(service.id, locale)}
            title={service.title}
            summary={service.summary}
            includes={messages.servicePages.items[service.id].includes.map((item) => item.title)}
            facts={{
              timelineLabel: dict.timelineLabel,
              timeline: messages.servicePages.items[service.id].timeline,
              priceLabel: messages.pricing.from,
              price: servicePriceValue(service.id, locale),
            }}
            more={dict.more}
            vignette={{ kind: SERVICE_VIGNETTES[service.id], ...service.vignette }}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
