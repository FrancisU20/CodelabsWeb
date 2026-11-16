import Link from "next/link";
import NotFoundLinks from "@/features/not-found/not-found-links";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";
import Section from "@/shared/ui/section/section";

const NOT_FOUND_CODE = "404";

const NotFoundView = () => {
  const spanish = getMessages("es").notFound;

  return (
    <main>
      <Section tone="deep" className="flex min-h-svh flex-col">
        <div className="site-wrap w-full py-6">
          <Link href={pagePath("home", "es")} className="[--fg:var(--on-dark)]">
            <Logo className="h-7 w-auto" />
          </Link>
        </div>
        <div className="site-wrap grid w-full flex-1 content-center items-center gap-10 pb-20 lg:[grid-template-columns:minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex min-w-0 flex-col items-start gap-4">
            <p className="eyebrow m-0">
              {spanish.code} · {spanish.eyebrow}
            </p>
            <h1 className="display-title lift-in max-w-[18ch]">{spanish.title}</h1>
            <p className="lede m-0 max-w-xl">{spanish.body}</p>
            <NotFoundLinks />
          </div>
          <p aria-hidden="true" className="text-accent m-0 hidden text-figure leading-none font-extrabold tracking-[-0.07em] lg:block">
            {NOT_FOUND_CODE}
          </p>
        </div>
      </Section>
    </main>
  );
};

export default NotFoundView;
