import Link from "next/link";
import { getMessages } from "@/i18n/messages/get-messages";
import { pagePath } from "@/i18n/routing";
import ButtonLink from "@/shared/ui/button/button-link";

const NotFoundLinks = () => {
  const spanish = getMessages("es").notFound;
  const english = getMessages("en").notFound;

  return (
    <>
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
    </>
  );
};

export default NotFoundLinks;
