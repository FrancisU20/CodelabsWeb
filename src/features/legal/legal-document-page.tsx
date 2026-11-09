import type { LegalBlock } from "@/content/legal/legal-block";
import type { LegalDocument } from "@/content/legal/legal-document";
import type { Locale } from "@/i18n/locale";
import LegalInlineContent from "./legal-inline-content";

const LAYOUT_STYLES = {
  articles: {
    container: "space-y-8",
    section: "space-y-3",
    heading: "text-xl font-semibold text-fg",
    paragraph: "text-sm text-muted",
    list: "space-y-2 text-sm text-muted",
    marker: "",
  },
  cards: {
    container: "space-y-6 text-sm text-muted",
    section: "rounded-3xl border border-line bg-panel p-6",
    heading: "text-lg font-semibold text-fg",
    paragraph: "mt-2",
    list: "mt-3 space-y-2",
    marker: "• ",
  },
};

type LayoutStyle = (typeof LAYOUT_STYLES)["articles"];

const Block = ({ block, style, locale }: { block: LegalBlock; style: LayoutStyle; locale: Locale }) => {
  if (block.kind === "paragraph") {
    return (
      <p className={style.paragraph}>
        <LegalInlineContent content={block.content} locale={locale} />
      </p>
    );
  }
  return (
    <ul className={style.list}>
      {block.items.map((item, position) => (
        <li key={position}>
          {style.marker}
          <LegalInlineContent content={item} locale={locale} />
        </li>
      ))}
    </ul>
  );
};

const LegalDocumentPage = ({ document, locale }: { document: LegalDocument; locale: Locale }) => {
  const style = LAYOUT_STYLES[document.layout];

  return (
    <div className="text-fg">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{document.eyebrow}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{document.title}</h1>
          {document.notice && <p className="max-w-3xl rounded-2xl border border-line bg-panel px-4 py-3 text-sm text-muted">{document.notice}</p>}
          <p className="max-w-3xl text-base text-muted">{document.intro}</p>
          <p className="text-sm text-dim">{document.updated}</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className={`mx-auto max-w-5xl px-6 ${style.container}`}>
          {document.sections.map((section) => (
            <article key={section.heading} className={style.section}>
              <h2 className={style.heading}>{section.heading}</h2>
              {section.blocks.map((block, position) => (
                <Block key={position} block={block} style={style} locale={locale} />
              ))}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegalDocumentPage;
