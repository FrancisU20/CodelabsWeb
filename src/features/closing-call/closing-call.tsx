import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import Section from "@/shared/ui/section/section";

const ClosingCall = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).closingCall;

  return (
    <Section tone="brand" aria-labelledby="closing-call-title">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-6 py-14 sm:py-16" data-reveal>
        <div>
          <h2 id="closing-call-title" className="section-title m-0">
            {copy.title}
          </h2>
          <p className="mt-3 mb-0 text-lg text-brand-on">{copy.body}</p>
        </div>
        <ButtonLink variant="light" href={pagePath("contact", locale)}>
          {copy.cta}
        </ButtonLink>
      </div>
    </Section>
  );
};

export default ClosingCall;
