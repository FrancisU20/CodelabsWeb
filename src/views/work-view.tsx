import AiCases from "@/features/ai-cases/ai-cases";
import ClosingCall from "@/features/closing-call/closing-call";
import Stories from "@/features/stories/stories";
import WebShowcase from "@/features/web-showcase/web-showcase";
import WorkHero from "@/features/work-hero/work-hero";
import type { Locale } from "@/i18n/locale";

const WorkView = ({ locale }: { locale: Locale }) => (
  <>
    <WorkHero locale={locale} />
    <Stories locale={locale} />
    <WebShowcase locale={locale} />
    <AiCases locale={locale} />
    <ClosingCall locale={locale} variant="work" />
  </>
);

export default WorkView;
