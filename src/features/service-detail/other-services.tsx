import Link from "next/link";
import type { ServiceId } from "@/content/service-id";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { servicePath } from "@/i18n/routing";
import styles from "./service-detail.module.css";

const OtherServices = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const others = messages.services.items.filter((item) => item.id !== service);

  return (
    <section className={styles.others} aria-labelledby="other-services">
      <div className="site-wrap">
        <h2 id="other-services" className="section-title m-0">
          {messages.servicePages.labels.otherTitle}
        </h2>
        <div className={styles.othersGrid}>
          {others.map((item) => (
            <Link key={item.id} href={servicePath(item.id, locale)} className={styles.other}>
              <b>{item.title}</b>
              <span>{item.summary}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
