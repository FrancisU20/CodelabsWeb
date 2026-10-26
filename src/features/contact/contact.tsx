import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Contact = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).contact;

  return (
    <section id="contacto" aria-labelledby="contact-title" className="pt-[140px] pb-[120px]">
      <div className="site-wrap grid items-start gap-14 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <div data-reveal>
          <h2 id="contact-title" className="m-0 text-[clamp(40px,5.6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.05em]">
            {copy.titleLead}
            <br />
            <span className="text-glow">{copy.titleAccent}</span>
          </h2>
          <p className="lede mt-6 mb-0">{copy.body}</p>
          <ContactDetails copy={copy} />
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
};

export default Contact;
