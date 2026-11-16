import { BOOKING_URL, buildWhatsAppLink } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./contact.module.css";

const ContactChannels = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.contact.channels;
  const channels = [
    { label: copy.whatsApp, href: buildWhatsAppLink(messages.whatsapp.message), icon: "whatsapp", tone: styles.whatsApp },
    { label: copy.booking, href: BOOKING_URL, icon: "calendar", tone: styles.booking },
  ] as const;

  return (
    <div className={styles.channels}>
      {channels.map((channel) => (
        <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer" className={`${styles.channel} ${channel.tone}`}>
          <span className={styles.channelIcon}>
            <Icon name={channel.icon} />
          </span>
          {channel.label}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </a>
      ))}
    </div>
  );
};

export default ContactChannels;
