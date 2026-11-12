import type { ServiceId } from "@/content/service-id";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ChatWindow from "@/shared/devices/chat-window";
import ServiceVignette from "@/showcase/service-vignette";
import styles from "./service-detail.module.css";

const ServiceArt = ({ service, locale }: { service: ServiceId; locale: Locale }) => {
  const messages = getMessages(locale);
  const detail = messages.servicePages.items[service];
  const summary = messages.services.items.find((item) => item.id === service);

  return (
    <div className={styles.art}>
      {detail.example ? (
        <>
          <ChatWindow {...detail.example} />
          <p className={styles.note}>{messages.servicePages.labels.exampleNote}</p>
        </>
      ) : (
        <ServiceVignette kind={SERVICE_VIGNETTES[service]} lines={summary?.vignette.lines ?? []} state={summary?.vignette.state} className={styles.bigVignette} />
      )}
    </div>
  );
};

export default ServiceArt;
