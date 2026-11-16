import type { ReactNode } from "react";
import Section from "@/shared/ui/section/section";
import type { SectionTone } from "@/shared/ui/section/section-tone";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  actions?: ReactNode;
  tone?: SectionTone;
};

const PageIntro = ({ eyebrow, title, description, aside, actions, tone = "default" }: PageIntroProps) => (
  <Section tone={tone} className={tone === "default" ? "border-b border-line" : undefined}>
    <div className="site-wrap grid items-center gap-10 py-10 sm:py-20 lg:[grid-template-columns:minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="flex min-w-0 flex-col items-start gap-4">
        <p className="eyebrow m-0">{eyebrow}</p>
        <h1 className="lift-in m-0 max-w-[20ch] text-display font-extrabold leading-[1.06] tracking-[-0.035em]">{title}</h1>
        <p className="lede m-0 max-w-2xl">{description}</p>
        {actions}
      </div>
      {aside && <div className="min-w-0">{aside}</div>}
    </div>
  </Section>
);

export default PageIntro;
