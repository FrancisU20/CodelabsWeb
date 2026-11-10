import ClosingCall from "@/features/closing-call/closing-call";
import Process from "@/features/process/process";
import Quality from "@/features/quality/quality";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const HowWeWorkView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.howWeWork} />
    <Process locale={locale} />
    <Quality locale={locale} />
    <ClosingCall locale={locale} />
  </>
);

export default HowWeWorkView;
