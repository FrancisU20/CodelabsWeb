import StatusBar from "@/shared/devices/status-bar";
import { joinClassNames } from "@/shared/lib/class-names";
import type { IconName } from "@/shared/ui/icons/icon-name";
import Icon from "@/shared/ui/icons/svg-icon";
import AppTabBar from "./app-tab-bar";
import Avatar from "./avatar";
import BrandLogo from "./brand-logo";
import styles from "./mockups.module.css";
import appStyles from "./confiamed.module.css";

const SHORTCUTS: { icon: IconName; label: string }[] = [
  { icon: "card", label: "Reembolsos" },
  { icon: "calendar", label: "Citas" },
  { icon: "check", label: "Receta electrónica" },
  { icon: "whatsapp", label: "Médico en línea" },
];

const ConfiamedApp = ({ logoSrc }: { logoSrc: string }) => (
  <div className={joinClassNames(styles.app, appStyles.confiamed)}>
    <StatusBar />
    <div className={styles.row}>
      <BrandLogo src={logoSrc} name="Confiamed" width={422} height={100} className={appStyles.logo} />
      <Avatar initials="DM" from="#3BA8F0" to="#0B4DB8" />
    </div>
    <small>Hola, Daniela</small>
    <div className={appStyles.claim}>
      <span className={appStyles.claimStatus}>✓ Reembolso aprobado</span>
      <b>$86,40</b>
      <small>Se acredita en tu cuenta en 48 horas</small>
    </div>
    <div className={appStyles.appointment}>
      <Icon name="calendar" />
      <div>
        <b>Medicina general</b>
        <small>Jue 16 · 10:30 · Dra. Paula Vega</small>
      </div>
    </div>
    <div className={appStyles.shortcuts}>
      {SHORTCUTS.map((shortcut) => (
        <span key={shortcut.label} className={appStyles.shortcut}>
          <Icon name={shortcut.icon} />
          {shortcut.label}
        </span>
      ))}
    </div>
    <AppTabBar icons={["home", "card", "calendar", "user"]} />
  </div>
);

export default ConfiamedApp;
