type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => (
  <section className="border-b border-line">
    <div className="site-wrap flex flex-col items-start gap-4 py-16 sm:py-24">
      <p className="eyebrow m-0">{eyebrow}</p>
      <h1 className="lift-in m-0 max-w-[20ch] text-[clamp(36px,5vw,62px)] font-bold leading-[1.08] tracking-[-0.035em]">{title}</h1>
      <p className="m-0 max-w-2xl text-[clamp(17px,1.5vw,20px)] text-muted">{description}</p>
    </div>
  </section>
);

export default PageIntro;
