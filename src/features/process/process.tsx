import { getMessages } from "@/i18n/messages/get-messages";
import { fillTerms } from "@/i18n/fill-terms";
import type { Locale } from "@/i18n/locale";
import ChapterScene from "@/shared/ui/chapter-scene/chapter-scene";
import ProcessVisual from "./process-visual";
import styles from "./process.module.css";

const Process = ({ locale }: { locale: Locale }) => {
  const copy = getMessages(locale).howWeWork;
  const chapters = copy.phases.items.map((phase) => ({
    id: phase.id,
    label: phase.label,
    title: phase.title,
    body: fillTerms(phase.body),
    extra: (
      <p className={styles.receives}>
        <b>{copy.phases.receivesLabel}</b>
        {fillTerms(phase.receives)}
      </p>
    ),
    visual: <ProcessVisual phase={phase.id} visuals={copy.visuals} />,
  }));

  return <ChapterScene id="proceso" titleId="process-title" title={copy.phases.title} chapters={chapters} />;
};

export default Process;
