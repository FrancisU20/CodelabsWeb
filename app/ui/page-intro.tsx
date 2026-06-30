type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => {
  return (
    <section className="bg-[#0E0E10] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/70">{description}</p>
      </div>
    </section>
  );
};

export default PageIntro;
