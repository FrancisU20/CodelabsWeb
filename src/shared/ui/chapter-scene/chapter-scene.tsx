import { pinLength } from "@/shared/motion/pin-length";
import Section from "@/shared/ui/section/section";
import SectionTitle from "@/shared/ui/section/section-title";
import type { SectionTitleText } from "@/shared/ui/section/section-title-text";
import type { SceneChapter } from "./scene-chapter";
import styles from "./chapter-scene.module.css";

const chapterNumber = (index: number, total: number): string => `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

type ChapterSceneProps = {
  id?: string;
  titleId: string;
  title: SectionTitleText;
  chapters: SceneChapter[];
};

const ChapterScene = ({ id, titleId, title, chapters }: ChapterSceneProps) => (
  <Section
    tone="night"
    id={id}
    aria-labelledby={titleId}
    data-pin
    data-story
    data-story-count={chapters.length}
    data-active="0"
    style={pinLength("chapters")}
  >
    <div className={`site-wrap ${styles.stage}`} data-stage>
      <SectionTitle id={titleId} title={title} className={styles.heading} />
      <div className={styles.chapters}>
        {chapters.map((chapter, index) => (
          <article key={chapter.id} className={styles.chapter} data-index={index} data-current={index === 0 || undefined}>
            <div className={styles.copy}>
              <p className={styles.number}>
                {chapterNumber(index, chapters.length)} · {chapter.label}
              </p>
              <h3 className={styles.title}>{chapter.title}</h3>
              <p className={styles.summary}>{chapter.body}</p>
              {chapter.extra}
            </div>
            <div className={styles.visual} aria-hidden="true">
              {chapter.visual}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.progress} aria-hidden="true">
        <i />
      </div>
    </div>
  </Section>
);

export default ChapterScene;
