import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import SectionTitle from "@/shared/ui/section/section-title";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Contact = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).contact;

  return (
    <section id="contacto" aria-labelledby="contact-title" className="pt-16 pb-16 sm:pt-[96px] sm:pb-[100px]">
      <div className="site-wrap grid items-start gap-14 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <div data-reveal>
          <SectionTitle
            id="contact-title"
            title={copy.title}
          />
          <p className="lede mt-6 mb-0">{copy.body}</p>
          <ContactDetails copy={copy} />
        </div>
        <ContactForm copy={copy} locale={locale} />
      </div>
    </section>
  );
};

export default Contact;
