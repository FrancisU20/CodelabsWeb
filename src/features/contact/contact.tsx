import { buildWhatsAppLink } from "@/config/contact";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Contact = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const copy = messages.contact;

  return (
    <section id="contacto" className="pt-4 pb-16 sm:pt-6 sm:pb-24">
      <div className="site-wrap grid items-start gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <ContactForm copy={copy} locale={locale} />
        <div className="flex flex-col gap-6">
          <a
            href={buildWhatsAppLink(messages.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[10px] bg-wa p-6 text-[var(--wa-ink)] transition-transform hover:-translate-y-0.5"
          >
            <b className="block font-display text-xl">{copy.whatsAppCard.title}</b>
            <span>{copy.whatsAppCard.body}</span>
          </a>
          <ContactDetails copy={copy} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
