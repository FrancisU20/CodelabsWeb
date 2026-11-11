import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { cx } from "@/shared/lib/class-names";
import Card from "@/shared/ui/card/card";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

const ServiceIncludes = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).servicePages;
  const detail = items[service];

  return (
    <Section tone="mist" space="section" aria-labelledby="service-includes">
      <div className={`site-wrap ${styles.detailsGrid}`}>
        <div className={cx("tone-night", styles.fit)}>
          <h2 className={styles.fitTitle}>{labels.fitTitle}</h2>
          <ul className={styles.fitList}>
            {detail.fit.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 id="service-includes" className="section-title m-0 mb-6">
            {labels.includesTitle}
          </h2>
          <div className={styles.includes} data-reveal>
            {detail.includes.map((entry) => (
              <Card key={entry.title} className={styles.include}>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceIncludes;
