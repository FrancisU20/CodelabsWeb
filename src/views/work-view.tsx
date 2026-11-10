import AiCases from "@/features/ai-cases/ai-cases";
import CaseFigures from "@/features/case-figures/case-figures";
import ClosingCall from "@/features/closing-call/closing-call";
import Stories from "@/features/stories/stories";
import WebShowcase from "@/features/web-showcase/web-showcase";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const WorkView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.work} />
    <AiCases locale={locale} />
    <Stories locale={locale} />
    <WebShowcase locale={locale} />
    <CaseFigures locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default WorkView;
