import type { Guide } from "@/content/guides/guide";
import { GUIDES } from "@/content/guides/guides";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { headingId } from "@/shared/lib/heading-id";
import FaqList from "@/shared/ui/faq-list/faq-list";
import Section from "@/shared/ui/section/section";
import NumberedPart from "@/shared/ui/toc-article/numbered-part";
import TocArticle from "@/shared/ui/toc-article/toc-article";
import GuideBlockView from "./guide-block-view";
import GuideCard from "./guide-card";
import GuideCta from "./guide-cta";
import GuideHeader from "./guide-header";
import GuideRelated from "./guide-related";
import styles from "./guides.module.css";

const CTA_AFTER_SECTION = 1;
const MORE_GUIDES = 2;
const FAQ_ID = "preguntas-frecuentes";

const GuideArticle = ({ guide, locale }: { guide: Guide; locale: Locale }) => {
  const copy = getMessages(locale).guides;
  const toc = [...guide.sections.map((entry) => ({ id: headingId(entry.heading), label: entry.heading })), { id: FAQ_ID, label: copy.faqTitle }];
  const moreGuides = GUIDES.filter((entry) => entry.slug !== guide.slug).slice(0, MORE_GUIDES);

  return (
    <>
      <GuideHeader guide={guide} locale={locale} />
      <Section space="section">
        <TocArticle tocTitle={copy.tocTitle} items={toc}>
          {guide.sections.map((guideSection, index) => (
            <NumberedPart key={guideSection.heading} id={headingId(guideSection.heading)} index={index} heading={guideSection.heading}>
              {guideSection.blocks.map((block, blockIndex) => (
                <GuideBlockView key={`${guideSection.heading}-${blockIndex}`} block={block} />
              ))}
              {index === CTA_AFTER_SECTION && <GuideCta copy={copy.cta} locale={locale} />}
            </NumberedPart>
          ))}
          <NumberedPart id={FAQ_ID} index={guide.sections.length} heading={copy.faqTitle}>
            <FaqList faqs={guide.faqs} />
          </NumberedPart>
          <GuideRelated services={guide.services} locale={locale} />
        </TocArticle>
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
