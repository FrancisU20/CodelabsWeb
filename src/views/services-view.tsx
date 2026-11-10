import ClosingCall from "@/features/closing-call/closing-call";
import Services from "@/features/services/services";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";
import ChatWindow from "@/shared/devices/chat-window";

const ServicesView = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);

  return (
    <>
      <PageIntro {...messages.pages.services} aside={<ChatWindow {...messages.services.helpChat} />} />
      <Services locale={locale} />
      <ClosingCall locale={locale} />
    </>
  );
};

export default ServicesView;
