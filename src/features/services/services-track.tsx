import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import ServiceCard from "./service-card";
import styles from "./services-track.module.css";

const ServicesTrack = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).services;

  return (
    <Section tone="night" id="servicios" aria-labelledby="services-title" data-pin data-track>
      <div className={styles.stage} data-stage>
        <div className="site-wrap w-full">
          <SectionHeading title={dict.title} titleId="services-title" />
        </div>
        <div className={styles.rail}>
          <div className={`${styles.track} scene-motion`} data-track-rail>
            {dict.items.map((service) => (
              <ServiceCard
                key={service.id}
                layout="stacked"
                href={servicePath(service.id, locale)}
                label={service.title}
                title={service.need}
                more={dict.more}
                vignette={{ kind: SERVICE_VIGNETTES[service.id], ...service.vignette }}
                className={styles.card}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesTrack;
