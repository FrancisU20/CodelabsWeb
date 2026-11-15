import { IMAGES } from "@/content/images";
import { SERVICE_VIGNETTES } from "@/content/service-vignettes";
import type { Messages } from "@/i18n/messages/messages";
import ChatWindow from "@/shared/devices/chat-window";
import PhoneFrame from "@/shared/devices/phone-frame";
import FarmaenlaceDashboard from "@/showcase/farmaenlace-dashboard";
import ServiceVignette from "@/showcase/service-vignette";
import SupermaxiApp from "@/showcase/supermaxi-app";
import styles from "./service-chapters.module.css";

type ServiceChapterVisualProps = {
  service: Messages["services"]["items"][number];
  aiExample: Messages["servicePages"]["items"]["ai"]["example"];
};

const ServiceChapterVisual = ({ service, aiExample }: ServiceChapterVisualProps) => {
  if (service.id === "mobile") {
    return (
      <PhoneFrame className={styles.phone}>
        <SupermaxiApp />
      </PhoneFrame>
    );
  }
  if (service.id === "custom") {
    return (
      <div className={styles.dashboardBox}>
        <FarmaenlaceDashboard logoSrc={IMAGES.brands.farmaenlace} className={styles.dashboard} />
      </div>
    );
  }
  if (service.id === "ai" && aiExample) {
    return (
      <div className={styles.chatBox}>
        <ChatWindow {...aiExample} />
      </div>
    );
  }
  return (
    <ServiceVignette
      kind={SERVICE_VIGNETTES[service.id]}
      lines={service.vignette.lines}
      state={service.vignette.state}
      className={styles.vignette}
    />
  );
};

export default ServiceChapterVisual;
