import Aws from "@/features/aws/aws";
import Contact from "@/features/contact/contact";
import Services from "@/features/services/services";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import PageIntro from "@/layout/page-intro/page-intro";

const ServicesView = ({ locale }: { locale: Locale }) => (
  <>
    <PageIntro {...getMessages(locale).pages.services} />
    <Services locale={locale} />
    <Aws locale={locale} />
    <Contact locale={locale} />
  </>
);

export default ServicesView;
