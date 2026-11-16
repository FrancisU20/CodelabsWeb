import type { Guide } from "@/content/guides/guide";
import { GUIDES } from "@/content/guides/guides";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import FaqList from "@/shared/ui/faq-list/faq-list";
import Section from "@/shared/ui/section/section";
import GuideBlockView from "./guide-block-view";
import GuideCard from "./guide-card";
import GuideCta from "./guide-cta";
import GuideHeader from "./guide-header";
import GuideRelated from "./guide-related";
import GuideToc from "./guide-toc";
import { headingId } from "./heading-id";
import styles from "./guides.module.css";

const CTA_AFTER_SECTION = 1;
const MORE_GUIDES = 2;
const FAQ_ID = "preguntas-frecuentes";

const sectionNumber = (index: number): string => String(index + 1).padStart(2, "0");

const GuideArticle = ({ guide, locale }: { guide: Guide; locale: Locale }) => {
  const copy = getMessages(locale).guides;
  const toc = [...guide.sections.map((entry) => ({ id: headingId(entry.heading), label: entry.heading })), { id: FAQ_ID, label: copy.faqTitle }];
  const moreGuides = GUIDES.filter((entry) => entry.slug !== guide.slug).slice(0, MORE_GUIDES);

  return (
    <>
      <GuideHeader guide={guide} locale={locale} />
      <Section space="section">
        <div className={`site-wrap ${styles.layout}`}>
          <GuideToc title={copy.tocTitle} items={toc} />
          <article className={styles.body}>
            {guide.sections.map((guideSection, index) => (
              <section key={guideSection.heading} id={headingId(guideSection.heading)} className={styles.part}>
                <h2>
                  <span>{sectionNumber(index)}</span>
                  {guideSection.heading}
                </h2>
                {guideSection.blocks.map((block, blockIndex) => (
                  <GuideBlockView key={`${guideSection.heading}-${blockIndex}`} block={block} />
                ))}
                {index === CTA_AFTER_SECTION && <GuideCta copy={copy.cta} locale={locale} />}
              </section>
            ))}
            <section id={FAQ_ID} className={styles.part}>
              <h2>
                <span>{sectionNumber(guide.sections.length)}</span>
                {copy.faqTitle}
              </h2>
              <FaqList faqs={guide.faqs} />
            </section>
            <GuideRelated services={guide.services} locale={locale} />
          </article>
        </div>
      </Section>
      <Section tone="mist" space="section" aria-labelledby="guide-more">
        <div className="site-wrap">
          <h2 id="guide-more" className={`section-title ${styles.moreTitle}`}>
            {copy.moreTitle}
          </h2>
          <div className={styles.list}>
            {moreGuides.map((entry) => (
              <GuideCard key={entry.slug} guide={entry} copy={copy} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default GuideArticle;
