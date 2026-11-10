import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { servicePath } from "@/i18n/routing";
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
      aria-labelledby={scrollTrack ? "services-title" : undefined}
      aria-label={scrollTrack ? undefined : getMessages(locale).nav.services}
      className={cx(styles.section, !scrollTrack && styles.list)}
      data-pin={scrollTrack || undefined}
      data-track={scrollTrack || undefined}
    >
      <div className={styles.stage} data-stage>
        {scrollTrack && (
          <div className={`site-wrap w-full ${styles.head}`}>
            <SectionHeading className="flex flex-col gap-4" title={dict.title} titleId="services-title" />
            <p className="lede m-0 max-w-[34ch]">{dict.body}</p>
          </div>
        )}
        <div className={styles.rail}>
          <div className={`${styles.track} scene-motion`} data-track-rail>
            {dict.items.map((service) => (
              <article key={service.id} className={styles.card} data-reveal>
                <p className={styles.service}>{scrollTrack ? service.title : service.need}</p>
                <h3 className={styles.need}>
                  <Link href={servicePath(service.id, locale)}>{scrollTrack ? service.need : service.title}</Link>
                </h3>
                <p className={styles.body}>{scrollTrack ? service.summary : service.body}</p>
                <span className={styles.more} aria-hidden="true">
                  {dict.more}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
