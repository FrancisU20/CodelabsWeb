import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";
import Logo from "@/shared/ui/logo";
import Section from "@/shared/ui/section/section";

const NOT_FOUND_CODE = "404";

const NotFoundView = () => {
  const spanish = getMessages("es").notFound;
  const english = getMessages("en").notFound;

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
            <h1 className="lift-in m-0 max-w-[18ch] text-display font-extrabold leading-[1.06] tracking-[-0.035em]">{spanish.title}</h1>
            <p className="lede m-0 max-w-xl">{spanish.body}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <ButtonLink variant="light" href={pagePath("home", "es")}>
                {spanish.links.home}
              </ButtonLink>
              <ButtonLink variant="outline" href={pagePath("services", "es")}>
                {spanish.links.services}
              </ButtonLink>
              <ButtonLink variant="outline" href={pagePath("contact", "es")}>
                {spanish.links.contact}
              </ButtonLink>
            </div>
            <p lang="en" className="m-0 mt-6 text-sm text-[color:var(--night-text)]">
              {english.eyebrow}.{" "}
              <Link href={pagePath("home", "en")} className="font-semibold underline underline-offset-4">
                {english.links.home}
              </Link>
            </p>
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
