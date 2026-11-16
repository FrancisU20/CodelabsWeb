import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { servicePath } from "@/i18n/routing";
import { servicePriceLabel } from "@/i18n/service-price-label";
import styles from "./guides.module.css";

const GuideRelated = ({ services, locale }: { services: ServiceId[]; locale: Locale }) => {
  const messages = getMessages(locale);
  const related = messages.services.items.filter((service) => services.includes(service.id));

  return (
    <nav className={styles.related} aria-labelledby="guide-related">
      <h2 id="guide-related">{messages.guides.relatedTitle}</h2>
      <ul>
        {related.map((service) => (
          <li key={service.id}>
            <Link href={servicePath(service.id, locale)}>
              <b>{service.title}</b>
              <span>{service.summary}</span>
              <em>{servicePriceLabel(service.id, locale)}</em>
              <i>{messages.guides.relatedLink}</i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuideRelated;
