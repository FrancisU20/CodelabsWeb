import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ChatWindow from "@/shared/devices/chat-window";
import ButtonLink from "@/shared/ui/button/button-link";
import ServiceVignette from "@/showcase/service-vignette";
import styles from "./service-detail.module.css";

const ServiceIntro = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const { labels, items } = messages.servicePages;
  const detail = items[service];
  const summary = messages.services.items.find((item) => item.id === service);

  return (
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
  );
};

export default ServiceIntro;
