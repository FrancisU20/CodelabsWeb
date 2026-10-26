import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import RoleIcon from "./role-icon";

const Team = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).team;

  return (
    <section id="equipo" aria-labelledby="team-title" className="pt-[140px] pb-10">
      <div className="site-wrap">
        <div className="mb-14 grid items-end gap-x-16 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]" data-reveal>
          <div className="flex flex-col gap-[18px]">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h2 id="team-title" className="section-title m-0">
              {dict.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="lede m-0">{dict.body}</p>
        </div>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]" data-reveal>
          {dict.roles.map((role, index) => (
            <div key={role.title} className="flex items-start gap-[18px] rounded-3xl border border-line bg-panel p-7">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-panel-2 text-brand [&>svg]:h-6 [&>svg]:w-6">
                <RoleIcon index={index} />
              </span>
              <div>
                <b className="mb-1 block text-lg tracking-[-0.02em]">{role.title}</b>
                <span className="text-[15px] text-muted">{role.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
