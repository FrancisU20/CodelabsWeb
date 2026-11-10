import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import ChatWindow from "@/shared/devices/chat-window";
import Card from "@/shared/ui/card/card";
import Kicker from "@/shared/ui/kicker";
import Section from "@/shared/ui/section/section";
import styles from "./ai-cases.module.css";

const AiCases = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).aiCases;

  return (
    <Section tone="mist" space="section" aria-labelledby="ai-cases-title">
      <div className="site-wrap">
        <Kicker as="h2" id="ai-cases-title" className="mb-[18px]">
          {dict.label}
        </Kicker>
        <div className={styles.grid}>
          {dict.items.map((item) => (
            <Card key={item.title} as="article" padding="sm" className={styles.card} reveal>
              <ChatWindow {...item.chat} />
              <div className={styles.copy}>
                <p className={styles.sector}>{item.sector}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className={styles.note}>{dict.note}</p>
      </div>
    </Section>
  );
};

export default AiCases;
