import type { ReactNode } from "react";
import SectionToc from "./section-toc";
import type { TocEntry } from "./toc-entry";
import styles from "./toc-article.module.css";

type TocArticleProps = {
  tocTitle: string;
  items: TocEntry[];
  children: ReactNode;
};

const TocArticle = ({ tocTitle, items, children }: TocArticleProps) => (
  <div className={`site-wrap ${styles.layout}`}>
    <SectionToc title={tocTitle} items={items} />
    <article className={styles.body}>{children}</article>
  </div>
);

export default TocArticle;
