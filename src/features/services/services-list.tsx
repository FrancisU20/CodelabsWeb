import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
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
            layout="row"
            href={servicePath(service.id, locale)}
            title={service.title}
            summary={service.summary}
            more={dict.more}
            vignette={{ kind: SERVICE_VIGNETTES[service.id], ...service.vignette }}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
