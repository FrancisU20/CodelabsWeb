import Contact from "@/features/contact/contact";
import ContactChannels from "@/features/contact/contact-channels";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const ContactView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.contact} tone="deep" actions={<ContactChannels locale={locale} />} />
    <Contact locale={locale} />
  </>
);

export default ContactView;
