import Contact from "@/features/contact/contact";
import Process from "@/features/process/process";
import Quality from "@/features/quality/quality";
import Team from "@/features/team/team";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const AboutView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.about} />
    <Team locale={locale} />
    <Process locale={locale} />
    <Quality locale={locale} />
    <Contact locale={locale} />
  </>
);

export default AboutView;
