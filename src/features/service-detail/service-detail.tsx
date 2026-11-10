import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ChatWindow from "@/shared/devices/chat-window";
import ButtonLink from "@/shared/ui/button/button-link";
import Card from "@/shared/ui/card/card";
import Section from "@/shared/ui/section/section";
import { cx } from "@/shared/lib/class-names";
import ServiceVignette from "@/showcase/service-vignette";
import styles from "./service-detail.module.css";

const ServiceDetail = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const { labels, items } = messages.servicePages;
  const detail = items[service];
  const summary = messages.services.items.find((item) => item.id === service);

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
            <ButtonLink href={pagePath("contact", locale)}>{labels.cta}</ButtonLink>
          </div>
          <div className={styles.art}>
            {detail.example ? (
              <>
                <ChatWindow {...detail.example} />
                <p className={styles.note}>{labels.exampleNote}</p>
              </>
            ) : (
              <ServiceVignette kind={SERVICE_VIGNETTES[service]} lines={summary?.vignette.lines ?? []} state={summary?.vignette.state} className={styles.bigVignette} />
            )}
          </div>
        </div>
      </section>
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
    </>
  );
};

export default ServiceDetail;
