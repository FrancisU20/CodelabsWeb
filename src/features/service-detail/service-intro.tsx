import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import ServiceArt from "./service-art";
import styles from "./service-detail.module.css";

const ServiceIntro = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const { labels, items } = getMessages(locale).servicePages;
  const detail = items[service];

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
        <ServiceArt service={service} locale={locale} />
      </div>
    </section>
  );
};

export default ServiceIntro;
