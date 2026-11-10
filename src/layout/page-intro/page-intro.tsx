import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

const PageIntro = ({ eyebrow, title, description, aside }: PageIntroProps) => (
  <section className="border-b border-line">
    <div className="site-wrap grid items-center gap-10 py-10 sm:py-20 lg:[grid-template-columns:minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="flex min-w-0 flex-col items-start gap-4">
        <p className="eyebrow m-0">{eyebrow}</p>
        <h1 className="lift-in m-0 max-w-[20ch] text-[clamp(36px,5vw,62px)] font-extrabold leading-[1.06] tracking-[-0.035em]">{title}</h1>
        <p className="m-0 max-w-2xl text-[clamp(17px,1.5vw,20px)] text-muted">{description}</p>
      </div>
      {aside && <div className="min-w-0">{aside}</div>}
    </div>
  </section>
);

export default PageIntro;
