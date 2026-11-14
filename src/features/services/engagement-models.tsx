import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./engagement-models.module.css";

const EngagementModels = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).services.engagement;

  return (
    <Section space="section" aria-labelledby="engagement-title">
      <div className="site-wrap">
        <SectionHeading title={copy.title} titleId="engagement-title" className={styles.head} />
        <ul className={styles.models} data-reveal>
          {copy.items.map((model) => (
            <li key={model.title} className={styles.model}>
              <h3>{model.title}</h3>
              <p>{model.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default EngagementModels;
