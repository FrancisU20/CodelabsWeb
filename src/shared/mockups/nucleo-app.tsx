import StatusBar from "@/shared/devices/status-bar";
import Icon from "@/shared/ui/icons/svg-icon";
import Avatar from "./avatar";
import styles from "./mockups.module.css";
import appStyles from "./nucleo.module.css";

const ACTIVE_DATE = 13;

const WEEK = [
  { letter: "L", date: 12 },
  { letter: "M", date: 13 },
  { letter: "M", date: 14 },
  { letter: "J", date: 15 },
  { letter: "V", date: 16 },
  { letter: "S", date: 17 },
];

const CLASSES = [
  { initials: "MR", from: "#C0785A", to: "#7A4532", name: "Mat & Core", detail: "18:30 · con Mariana", seats: "3 cupos" },
  { initials: "JS", from: "#8C7B70", to: "#2E2622", name: "Stretch & Relax", detail: "19:30 · con Julia", seats: "5 cupos" },
];

const NucleoApp = () => (
  <div className={`${styles.app} ${appStyles.nucleo}`}>
    <StatusBar />
    <div className={styles.row}>
      <div className={styles.brandline}>
        <Icon name="mark-nucleo" className={styles.mark} />
        <b className={appStyles.nucleoWord}>núcleo</b>
      </div>
      <Avatar initials="AV" from="#E2A985" to="#9A5B40" />
    </div>
    <div>
      <small>Hola, Andrea</small>
      <p className={appStyles.nucleoTitle}>Tu semana en movimiento</p>
    </div>
    <div className={appStyles.feature}>
      <span className={appStyles.chipOk}>✓ Reservada</span>
      <div>
        <b>Reformer Flow</b>
        <small>Hoy · 07:00 · Sala 2</small>
      </div>
    </div>
    <div className={appStyles.days}>
      {WEEK.map((day) => (
        <span key={day.date} className={`${appStyles.day} ${day.date === ACTIVE_DATE ? appStyles.dayActive : ""}`}>
          {day.letter}
          <b>{day.date}</b>
        </span>
      ))}
    </div>
    {CLASSES.map((session) => (
      <div key={session.name} className={appStyles.classRow}>
        <Avatar initials={session.initials} from={session.from} to={session.to} />
        <div className={appStyles.classInfo}>
          <b>{session.name}</b>
          <small>{session.detail}</small>
        </div>
        <span className={appStyles.seat}>{session.seats}</span>
      </div>
    ))}
    <nav className={styles.tabs}>
      <Icon name="home" />
      <Icon name="calendar" />
      <Icon name="card" />
      <Icon name="user" />
    </nav>
  </div>
);

export default NucleoApp;
