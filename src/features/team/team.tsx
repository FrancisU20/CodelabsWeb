import { getMessages } from "@/i18n/messages/get-messages";
import type { Locale } from "@/i18n/locale";
import Section from "@/shared/ui/section/section";
import SectionHeading from "@/shared/ui/section/section-heading";
import styles from "./team.module.css";

const LEAD_ROLE = "manager";

const Team = ({ locale }: { locale: Locale }) => {
  const dict = getMessages(locale).team;
  const lead = dict.roles.find((role) => role.id === LEAD_ROLE);
  const specialists = dict.roles.filter((role) => role.id !== LEAD_ROLE);

  return (
    <Section id="equipo" tone="night" space="section" aria-labelledby="team-title">
      <div className={`site-wrap ${styles.layout}`}>
        <SectionHeading title={dict.title} titleId="team-title" body={dict.body} className={styles.head} reveal />
        <div className={styles.org} data-reveal>
          <p className={styles.client}>{dict.clientLabel}</p>
          {lead && (
            <div className={styles.lead}>
              <span className={styles.badge}>{dict.leadBadge}</span>
              <h3>{lead.title}</h3>
              <p>{lead.body}</p>
            </div>
          )}
          <ul className={styles.specialists}>
            {specialists.map((role) => (
              <li key={role.id}>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Team;
