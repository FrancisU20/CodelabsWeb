import Link from "next/link";
import { fillTerms } from "@/i18n/fill-terms";
import type { Locale } from "@/i18n/locale";
import type { Messages } from "@/i18n/messages/messages";
import { pagePath } from "@/i18n/routing";
import Card from "@/shared/ui/card/card";
import styles from "./commitments.module.css";

const ENGAGEMENT_ANCHOR = "#engagement";

type PaymentTermsProps = {
  copy: Messages["howWeWork"]["payment"];
  locale: Locale;
};

const PaymentTerms = ({ copy, locale }: PaymentTermsProps) => (
  <div className={styles.payment}>
    <h2 className={styles.paymentTitle}>{copy.title}</h2>
    <div className={styles.terms}>
      {copy.items.map((item) => (
        <Card key={item.label} as="article" className={styles.term} reveal>
          <p className={styles.termLabel}>{item.label}</p>
          <h3>{fillTerms(item.title)}</h3>
          <p>{item.body}</p>
        </Card>
      ))}
    </div>
    <Link href={`${pagePath("services", locale)}${ENGAGEMENT_ANCHOR}`} className={styles.compare}>
      {copy.compareLink}
    </Link>
  </div>
);

export default PaymentTerms;
