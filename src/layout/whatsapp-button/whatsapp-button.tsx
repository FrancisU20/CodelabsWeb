import { buildWhatsAppLink } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Icon from "@/shared/ui/icons/svg-icon";
import FloatingAside from "./floating-aside";
import styles from "./whatsapp-button.module.css";

const WhatsAppButton = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).whatsapp;

  return (
    <FloatingAside ariaLabel={dict.ariaLabel}>
      <a
        href={buildWhatsAppLink(dict.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.ariaLabel}
        className={styles.button}
      >
        <Icon name="whatsapp" />
        <span className={styles.label}>{dict.label}</span>
      </a>
    </FloatingAside>
  );
};

export default WhatsAppButton;
