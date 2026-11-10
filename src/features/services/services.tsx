import Link from "next/link";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
import { cx } from "@/shared/lib/class-names";
import Card from "@/shared/ui/card/card";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import ServiceVignette from "@/showcase/service-vignette";
import styles from "./services.module.css";

type ServicesProps = {
  locale: Locale;
  scrollTrack?: boolean;
};

const Services = ({ locale, scrollTrack = false }: ServicesProps) => {
  const dict = getMessages(locale).services;

  return (
    <Section
      tone={scrollTrack ? "night" : "mist"}
      id="servicios"
      aria-labelledby={scrollTrack ? "services-title" : undefined}
      aria-label={scrollTrack ? undefined : getMessages(locale).nav.services}
      className={cx(!scrollTrack && styles.list)}
      data-pin={scrollTrack || undefined}
      data-track={scrollTrack || undefined}
    >
      <div className={styles.stage} data-stage>
        {scrollTrack && (
          <div className="site-wrap w-full">
            <SectionHeading title={dict.title} titleId="services-title" />
          </div>
        )}
        <div className={styles.rail}>
          <div className={`${styles.track} scene-motion`} data-track-rail>
            {dict.items.map((service) => (
              <Card key={service.id} as="article" padding="sm" className={styles.card} reveal={!scrollTrack}>
                <ServiceVignette kind={SERVICE_VIGNETTES[service.id]} lines={service.vignette.lines} state={service.vignette.state} className={styles.vignette} />
                {scrollTrack && <p className={styles.label}>{service.title}</p>}
                <h3 className={styles.name}>
                  <Link href={servicePath(service.id, locale)}>{scrollTrack ? service.need : service.title}</Link>
                </h3>
                {!scrollTrack && <p className={styles.summary}>{service.summary}</p>}
                <span className={styles.more} aria-hidden="true">
                  {dict.more}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
