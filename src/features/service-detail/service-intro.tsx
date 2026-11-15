import type { ReactNode } from "react";
import Link from "next/link";
import { BOOKING_URL } from "@/config/contact";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import ButtonLink from "@/shared/ui/button/button-link";
import Section from "@/shared/ui/section/section";
import styles from "./service-detail.module.css";

type ServiceIntroProps = {
  service: ServiceId;
  locale: Locale;
  art: ReactNode;
};

const ServiceIntro = ({ service, locale, art }: ServiceIntroProps) => {
  const messages = getMessages(locale);
  const page = messages.servicePages.items[service];

  return (
    <Section tone="deep" className={styles.intro} aria-labelledby="service-title">
      <div className={`site-wrap ${styles.introGrid}`}>
        <div className={styles.copy}>
          <Link className="eyebrow" href={pagePath("services", locale)}>
            {messages.servicePages.labels.back} · {page.title}
          </Link>
          <h1 id="service-title" className={`${styles.title} lift-in`}>
            {messages.serviceDetails.items[service].headline}
          </h1>
          <p className="lede m-0">{page.description}</p>
          <ul className={styles.facts}>
            <li>{servicePriceLabel(service, locale)}</li>
            <li>
              {messages.services.timelineLabel}: {page.timeline}
            </li>
          </ul>
          <div className={styles.actions}>
            <ButtonLink href={pagePath("contact", locale)}>{messages.servicePages.labels.cta}</ButtonLink>
            <ButtonLink variant="outline" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {messages.closingCall.bookingCta}
            </ButtonLink>
          </div>
        </div>
        <div className={styles.art} aria-hidden="true">
          {art}
        </div>
      </div>
    </Section>
  );
};

export default ServiceIntro;
