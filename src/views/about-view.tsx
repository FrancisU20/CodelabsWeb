import ClosingCall from "@/features/closing-call/closing-call";
import Manifesto from "@/features/manifesto/manifesto";
import Team from "@/features/team/team";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const AboutView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.about} />
    <Team locale={locale} />
    <Manifesto locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default AboutView;
