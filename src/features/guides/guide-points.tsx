import type { GuidePoint } from "@/content/guides/guide-point";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./guide-blocks.module.css";

type GuidePointsProps = {
  variant: "points" | "steps" | "checklist";
  items: GuidePoint[];
};

const stepNumber = (index: number): string => String(index + 1);

const GuidePoints = ({ variant, items }: GuidePointsProps) => {
  const List = variant === "steps" ? "ol" : "ul";

  return (
    <List className={styles[variant]}>
      {items.map((item, index) => (
        <li key={item.title}>
          {variant === "steps" && (
            <span className={styles.number} aria-hidden="true">
              {stepNumber(index)}
            </span>
          )}
          {variant === "checklist" && <Icon name="check" className={styles.tick} />}
          <div>
            <b>{item.title}</b>
            {item.text && <span>{item.text}</span>}
          </div>
        </li>
      ))}
    </List>
  );
};

export default GuidePoints;
