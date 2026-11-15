import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { servicePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import Section from "@/shared/ui/section/section";
import ServiceVignette from "@/showcase/service-vignette";
import styles from "./service-detail.module.css";

const OtherServices = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const others = messages.services.items.filter((item) => item.id !== service);

  return (
    <Section tone="mist" space="section" aria-labelledby="other-services">
      <div className="site-wrap">
        <h2 id="other-services" className={`section-title ${styles.sectionTitle}`}>
          {messages.servicePages.labels.otherTitle}
        </h2>
        <ul className={styles.others} data-reveal>
          {others.map((item) => (
            <li key={item.id} className={styles.other}>
              <ServiceVignette kind={SERVICE_VIGNETTES[item.id]} lines={item.vignette.lines} state={item.vignette.state} className={styles.otherArt} />
              <small>{item.title}</small>
              <h3>
                <Link href={servicePath(item.id, locale)}>{item.need}</Link>
              </h3>
              <span className={styles.otherPrice}>{servicePriceLabel(item.id, locale)} →</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default OtherServices;
