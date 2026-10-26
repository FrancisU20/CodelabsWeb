import Contact from "@/features/contact/contact";
import Impact from "@/features/impact/impact";
import Stories from "@/features/stories/stories";
import WebShowcase from "@/features/web-showcase/web-showcase";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const WorkView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.work} />
    <Stories locale={locale} />
    <WebShowcase locale={locale} />
    <Impact locale={locale} />
    <Contact locale={locale} />
  </>
);

export default WorkView;
