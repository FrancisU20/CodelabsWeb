import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./fact-list.module.css";

type FactListProps = {
  facts: { label: string; text: string }[];
  className?: string;
};

const FactList = ({ facts, className }: FactListProps) => (
  <dl className={joinClassNames(styles.facts, className)}>
    {facts.map((fact) => (
      <div key={fact.label}>
        <dt>{fact.label}</dt>
        <dd>{fact.text}</dd>
      </div>
    ))}
  </dl>
);

export default FactList;
