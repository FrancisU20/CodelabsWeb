import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import { cx } from "@/shared/lib/class-names";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./team.module.css";

const LEAD_ROLE = "manager";

const Team = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).team;

  return (
    <section id="equipo" aria-labelledby="team-title" className={styles.section}>
      <div className="site-wrap">
        <div className={styles.head} data-reveal>
          <SectionHeading title={dict.title} titleId="team-title" />
          <p className="lede m-0">{dict.body}</p>
        </div>
        <div className={styles.grid} data-reveal>
          {dict.roles.map((role) => (
            <div key={role.id} className={cx(styles.role, role.id === LEAD_ROLE && styles.lead)}>
              <div>
                <b>{role.title}</b>
                <span>{role.body}</span>
              </div>
              {role.id === LEAD_ROLE && <em>{dict.leadBadge}</em>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
