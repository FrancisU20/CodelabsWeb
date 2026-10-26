import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import Logo from "@/shared/ui/logo";

const NOT_FOUND_CODE = "404";

const NotFoundView = () => {
  const spanish = getMessages("es").notFound;
  const english = getMessages("en").notFound;

  return (
    <main className="site-wrap flex min-h-svh flex-col items-center justify-center gap-6 py-24 text-center">
      <Logo className="h-7 w-auto" />
      <p className="text-glow m-0 text-[clamp(96px,22vw,220px)] leading-none font-extrabold tracking-[-0.07em]">{NOT_FOUND_CODE}</p>
      <h1 className="m-0 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.04em]">{spanish.title}</h1>
      <p className="lede m-0">{spanish.body}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href={pagePath("home", "es")} className="btn btn-primary">
          {spanish.cta}
        </Link>
        <Link href={pagePath("home", "en")} className="btn btn-ghost" lang="en">
          {english.cta} →
        </Link>
      </div>
    </main>
  );
};

export default NotFoundView;
