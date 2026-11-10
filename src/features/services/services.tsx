import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cx } from "@/shared/lib/class-names";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./services.module.css";

type ServicesProps = {
  locale: Locale;
  scrollTrack?: boolean;
};

const Services = ({ locale, scrollTrack = false }: ServicesProps) => {
  const dict = getMessages(locale).services;

  return (
    <section
      id="servicios"
      aria-labelledby="services-title"
      className={cx(styles.section, !scrollTrack && styles.list)}
      data-pin={scrollTrack || undefined}
      data-track={scrollTrack || undefined}
    >
      <div className={styles.stage} data-stage>
        <div className={`site-wrap w-full ${styles.head}`}>
          <SectionHeading className="flex flex-col gap-4" title={dict.title} titleId="services-title" />
          <p className="lede m-0 max-w-[34ch]">{dict.body}</p>
        </div>
        <div className={styles.rail}>
          <div className={styles.track} data-track-rail>
            {dict.items.map((service) => (
              <article key={service.id} id={service.id} className={styles.card}>
                <p className={styles.service}>{service.title}</p>
                <h3 className={styles.need}>{service.need}</h3>
                <p className={styles.body}>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
