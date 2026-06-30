import { getDictionary } from "@/app/i18n/dictionary";
import type { Locale } from "@/app/i18n/locale";

const icons = [
  <svg
    key="phone"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.5 4.5C5.5 4.5 6.5 4 8.5 6C10.5 8 9.5 9 9.5 9.5C9.5 10 12 12.5 12.5 12.5C13 12.5 14 11.5 16 13.5C18 15.5 17.5 16.5 17.5 16.5L15 19C15 19 11 18 7.5 14.5C4 11 3 7 3 7L5.5 4.5Z"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 5C15.4283 5.22838 16.2788 5.71671 16.9661 6.40381C17.6533 7.09091 18.1416 7.94135 18.37 8.86967"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 5.5C17.1234 5.7826 18.1346 6.3673 18.9067 7.18198C19.6788 7.99666 20.1788 9.00456 20.35 10.09"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    key="address"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 12C13.933 12 15.5 10.433 15.5 8.5C15.5 6.567 13.933 5 12 5C10.067 5 8.5 6.567 8.5 8.5C8.5 10.433 10.067 12 12 12Z"
      stroke="#0A0A0A"
      strokeWidth="1.5"
    />
    <path
      d="M12 3C8.68629 3 6 5.68629 6 9C6 13.5 12 21 12 21C12 21 18 13.5 18 9C18 5.68629 15.3137 3 12 3Z"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="email"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6.5H20V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V6.5Z"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M4 7L12 12L20 7"
      stroke="#0A0A0A"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>,
];

const hrefs = ["tel:0984522092", undefined, "mailto:info@codelabsecuador.com"];

const ContactInfo = ({ locale }: { locale: Locale }) => {
  const dict = getDictionary(locale).contactInfo;

  return (
    <section
      aria-labelledby="contact-info-title"
      className="bg-gradient-to-b from-[#F5F6FD] via-white to-[#EEF0FB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            {dict.eyebrow}
          </p>
          <h2
            id="contact-info-title"
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          >
            {dict.title}
          </h2>
          <p className="max-w-2xl text-base text-black/70">{dict.description}</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dict.items.map((item, index) => {
            const href = hrefs[index];
            const content = (
              <div className="group relative flex h-full flex-col gap-3 rounded-3xl border border-black/5 bg-white px-6 py-6 shadow-lg shadow-indigo-500/5 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FB]">
                    {icons[index]}
                  </div>
                  <p className="text-lg font-semibold text-black">{item.title}</p>
                </div>
                <p className="text-sm text-black/70">{item.value}</p>
              </div>
            );
            return href ? (
              <a
                key={item.title}
                href={href}
                className="h-full no-underline"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.title} className="h-full">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
