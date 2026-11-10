import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import styles from "./service-detail.module.css";

const ServiceDetail = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).servicePages;
  const detail = items[service];

  return (
    <>
      <section className={styles.intro} aria-labelledby="service-title">
        <div className={`site-wrap ${styles.introGrid}`}>
          <div className={styles.copy}>
            <Link className="eyebrow" href={pagePath("services", locale)}>
              {labels.back}
            </Link>
            <h1 id="service-title" className={`${styles.title} lift-in`}>
              {detail.title}
            </h1>
            <p className="lede m-0">{detail.description}</p>
            <Link className="btn btn-primary" href={pagePath("contact", locale)}>
              {labels.cta}
            </Link>
          </div>
          <div className={styles.fit}>
            <h2 className={styles.fitTitle}>{labels.fitTitle}</h2>
            <ul className={styles.fitList}>
              {detail.fit.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.includes} aria-labelledby="service-includes">
        <div className={`site-wrap ${styles.includesGrid}`}>
          <h2 id="service-includes" className="section-title m-0">
            {labels.includesTitle}
          </h2>
          <div data-reveal>
            {detail.includes.map((entry) => (
              <div key={entry.title} className={styles.entry}>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.entryBody}>{entry.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
