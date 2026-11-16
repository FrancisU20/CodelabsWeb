"use client";

import { useEffect, useState } from "react";
import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./toc-article.module.css";
import type { TocEntry } from "./toc-entry";

type SectionTocProps = {
  title: string;
  items: TocEntry[];
};

const VISIBLE_BAND = "-25% 0px -65% 0px";

const SectionToc = ({ title, items }: SectionTocProps) => {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.filter((entry) => entry.isIntersecting).forEach((entry) => setActive(entry.target.id)),
      { rootMargin: VISIBLE_BAND },
    );
    items.map((item) => document.getElementById(item.id)).filter((target) => target !== null).forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.toc} aria-label={title}>
      <p>{title}</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={joinClassNames(item.id === active && styles.tocActive)} aria-current={item.id === active || undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default SectionToc;
