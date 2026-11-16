import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import ChatWindow from "@/shared/devices/chat-window";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./project-updates.module.css";

const ProjectUpdates = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).howWeWork.updates;

  return (
    <Section tone="mist" space="section" aria-labelledby="updates-title">
      <div className={`site-wrap ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading titleId="updates-title" title={copy.title} body={copy.body} className={styles.head} reveal />
          <ul className={styles.channels}>
            {copy.items.map((item) => (
              <li key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.chat} data-reveal aria-hidden="true">
          <ChatWindow {...copy.chat} />
        </div>
      </div>
    </Section>
  );
};

export default ProjectUpdates;
