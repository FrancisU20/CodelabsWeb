import ClosingCall from "@/features/closing-call/closing-call";
import Services from "@/features/services/services";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const ServicesView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.services} />
    <Services locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default ServicesView;
