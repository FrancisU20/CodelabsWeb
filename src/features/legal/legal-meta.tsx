import type { LegalDocument } from "@/content/legal/legal-document";
import styles from "./legal.module.css";

const LegalMeta = ({ document }: { document: LegalDocument }) => (
  <div className={styles.meta}>
    <p>{document.updated}</p>
    {document.notice && <p className={styles.notice}>{document.notice}</p>}
  </div>
);

export default LegalMeta;
