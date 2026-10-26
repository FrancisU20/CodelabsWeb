import { Fragment } from "react";
import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cssVars } from "@/shared/lib/css-vars";
import styles from "./manifesto.module.css";

const splitWords = (text: string): string[] => text.split(/\s+/).filter(Boolean);

const Manifesto = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).manifesto;
  const leadWords = splitWords(dict.lead);
  const accentWords = splitWords(dict.accent);
  const words = [
    ...leadWords.map((word) => ({ word, accent: false })),
    ...accentWords.map((word) => ({ word, accent: true })),
  ];

  return (
    <section aria-label={dict.ariaLabel} data-pin style={cssVars({ "--pin-height": "220vh" })}>
      <div className={`site-wrap ${styles.stage}`} data-stage>
        <p className="sr-only">{`${dict.lead} ${dict.accent}`}</p>
        <p className={styles.text} style={cssVars({ "--n": words.length })} aria-hidden="true">
          {words.map((entry, index) => (
            <Fragment key={`${entry.word}-${index}`}>
              <span className={`${styles.word} ${entry.accent ? styles.accent : ""}`} style={cssVars({ "--i": index })}>
                {entry.word}
              </span>{" "}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
