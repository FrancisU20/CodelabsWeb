import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import SectionHeading from "@/shared/ui/section/section-heading";

const Team = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).team;

  return (
    <section id="equipo" aria-labelledby="team-title" className="pt-[100px] pb-10">
      <div className="site-wrap">
        <div className="mb-12 grid items-end gap-x-16 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]" data-reveal>
          <SectionHeading className="flex flex-col gap-[18px]" title={dict.title} titleId="team-title" />
          <p className="lede m-0">{dict.body}</p>
        </div>
        <div className="grid gap-x-12 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]" data-reveal>
          {dict.roles.map((role) => (
            <div key={role.id} className="border-t border-line py-5">
              <b className="mb-1 block font-display text-xl font-semibold tracking-[-0.015em]">{role.title}</b>
              <span className="text-[17px] text-muted">{role.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
