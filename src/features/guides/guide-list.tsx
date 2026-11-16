import { GUIDES } from "@/content/guides/guides";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import Section from "@/shared/ui/section/section";
import GuideCard from "./guide-card";
import styles from "./guides.module.css";

const GuideList = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).guides;

  return (
    <Section tone="mist" space="section" aria-label={copy.eyebrow}>
      <div className={`site-wrap ${styles.list}`}>
        {GUIDES.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} copy={copy} heading="h2" />
        ))}
      </div>
    </Section>
  );
};

export default GuideList;
