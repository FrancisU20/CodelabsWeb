import Link from "next/link";
import type { Guide } from "@/content/guides/guide";
import { readingMinutes } from "@/content/guides/guide-reading-time";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { GUIDES_ROUTE, servicePath } from "@/i18n/routing";
import GuideBlockView from "./guide-block-view";
import { formatGuideDate } from "./guide-date";
import GuideFaqs from "./guide-faqs";
import styles from "./guides.module.css";

const GuideArticle = ({ guide, locale }: { guide: Guide; locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.guides;
  const serviceTitles = new Map(messages.services.items.map((service) => [service.id, service.title]));

  return (
    <article className={`site-wrap ${styles.article}`}>
      <header className={styles.header}>
        <Link className="eyebrow" href={GUIDES_ROUTE}>
          {copy.eyebrow}
        </Link>
        <h1 className="lift-in">{guide.title}</h1>
        <p className="lede m-0">{guide.summary}</p>
        <p className={styles.meta}>
          {copy.published} {formatGuideDate(guide.published, locale)} · {readingMinutes(guide)} {copy.readingTime}
        </p>
      </header>
      <div className={styles.body}>
        {guide.sections.map((guideSection) => (
          <section key={guideSection.heading}>
            <h2>{guideSection.heading}</h2>
            {guideSection.blocks.map((block, blockIndex) => (
              <GuideBlockView key={`${guideSection.heading}-${blockIndex}`} block={block} />
            ))}
          </section>
        ))}
        <GuideFaqs title={copy.faqTitle} faqs={guide.faqs} />
        <nav className={styles.related} aria-label={copy.relatedTitle}>
          <h2>{copy.relatedTitle}</h2>
          <div className={styles.chips}>
            {guide.services.map((service) => (
              <Link key={service} className={styles.chip} href={servicePath(service, locale)}>
                {serviceTitles.get(service)}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </article>
  );
};

export default GuideArticle;
