import type { Guide } from "@/content/guides/guide";
import ClosingCall from "@/features/closing-call/closing-call";
import GuideArticle from "@/features/guides/guide-article";
import type { Locale } from "@/i18n/locale";
import GuideJsonLd from "@/layout/structured-data/guide-json-ld";

const GuideView = ({ guide, locale }: { guide: Guide; locale: Locale }) => (
  <>
    <GuideJsonLd guide={guide} />
    <GuideArticle guide={guide} locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default GuideView;
