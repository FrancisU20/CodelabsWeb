import styles from "./stories.module.css";

const StoryDots = ({ titles }: { titles: string[] }) => (
  <div className={styles.dots} aria-hidden="true">
    {titles.map((title, index) => (
      <i key={title} className={styles.dot} data-index={index} />
    ))}
  </div>
);

export default StoryDots;
