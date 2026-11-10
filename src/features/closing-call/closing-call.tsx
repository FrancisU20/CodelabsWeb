import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";

const ClosingCall = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).closingCall;

  return (
    <section aria-labelledby="closing-call-title" className="border-t border-line">
      <div className="site-wrap flex flex-wrap items-end justify-between gap-6 py-14 sm:py-20" data-reveal>
        <div>
          <h2 id="closing-call-title" className="section-title m-0">
            {copy.title}
          </h2>
          <p className="lede mt-3 mb-0">{copy.body}</p>
        </div>
        <Link className="btn btn-primary" href={pagePath("contact", locale)}>
          {copy.cta}
        </Link>
      </div>
    </section>
  );
};

export default ClosingCall;
