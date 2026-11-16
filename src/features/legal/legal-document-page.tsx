import type { LegalBlock } from "@/content/legal/legal-block";
import type { LegalDocument } from "@/content/legal/legal-document";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { headingId } from "@/shared/lib/heading-id";
import Section from "@/shared/ui/section/section";
import NumberedPart from "@/shared/ui/toc-article/numbered-part";
import TocArticle from "@/shared/ui/toc-article/toc-article";
import LegalInlineContent from "./legal-inline-content";
import styles from "./legal.module.css";

const Block = ({ block, locale }: { block: LegalBlock; locale: Locale }) => {
  if (block.kind === "paragraph") {
    return (
      <p>
        <LegalInlineContent content={block.content} locale={locale} />
      </p>
    );
  }
  return (
    <ul className={styles.list}>
      {block.items.map((item, position) => (
        <li key={position}>
          <LegalInlineContent content={item} locale={locale} />
        </li>
      ))}
    </ul>
  );
};

const LegalDocumentPage = ({ document, locale }: { document: LegalDocument; locale: Locale }) => {
  const toc = document.sections.map((section) => ({ id: headingId(section.heading), label: section.heading }));

  return (
    <Section space="section">
      <TocArticle tocTitle={getMessages(locale).legal.tocTitle} items={toc}>
        {document.sections.map((section, index) => (
          <NumberedPart key={section.heading} id={headingId(section.heading)} index={index} heading={section.heading}>
            {section.blocks.map((block, position) => (
              <Block key={position} block={block} locale={locale} />
            ))}
          </NumberedPart>
        ))}
      </TocArticle>
    </Section>
  );
};

export default LegalDocumentPage;
