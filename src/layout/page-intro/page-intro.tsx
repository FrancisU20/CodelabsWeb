type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => (
  <section className="border-b border-line">
    <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-4 py-24 text-center sm:py-32">
      <p className="font-mono text-[13px] uppercase tracking-[0.1em] text-brand">{eyebrow}</p>
      <h1 className="rise-in max-w-4xl text-[clamp(38px,6vw,76px)] font-bold leading-[1.02] tracking-[-0.045em]">
        {title}
      </h1>
      <p className="max-w-2xl text-[clamp(17px,1.6vw,21px)] text-muted">{description}</p>
    </div>
  </section>
);

export default PageIntro;
