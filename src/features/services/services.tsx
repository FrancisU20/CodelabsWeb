import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import ServiceArt from "./service-art";
import styles from "./services.module.css";

const Services = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).services;

  return (
    <section id="servicios" aria-labelledby="services-title" data-pin data-track data-pin-mobile="off">
      <div className={styles.stage} data-stage>
        <div className={`site-wrap w-full ${styles.head}`}>
          <div>
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 id="services-title" className="section-title mt-4 mb-0">
              {dict.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="lede m-0 max-w-[34ch]">{dict.body}</p>
        </div>
        <div className={styles.track} data-track-rail>
          {dict.items.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.art}>
                <ServiceArt id={service.id} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardBody}>{service.body}</p>
              <p className={styles.audience}>
                {dict.idealFor} <span>{service.audience}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
