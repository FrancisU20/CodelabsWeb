import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Contact = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).contact;

  return (
    <section id="contacto" className="pt-10 pb-16 sm:pt-14 sm:pb-24">
      <div className="site-wrap grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <ContactForm copy={copy} locale={locale} />
        <ContactDetails copy={copy} />
      </div>
    </section>
  );
};

export default Contact;
