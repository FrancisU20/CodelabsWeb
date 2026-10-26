import Icon from "@/shared/ui/icons/svg-icon";
import type { IconName } from "@/shared/ui/icons/icon-name";
import Avatar from "./avatar";
import styles from "./dashboard.module.css";

const NAV_ITEMS: { icon: IconName; label: string; active: boolean }[] = [
  { icon: "box", label: "Embarques", active: true },
  { icon: "shield", label: "Auditorías", active: false },
  { icon: "user", label: "Proveedores", active: false },
  { icon: "chart", label: "Reportes", active: false },
];

const DashboardSidebar = () => (
  <div className={styles.side}>
    <div className={styles.brand}>
      <Icon name="mark-ruta" />
      <b>
        Ruta<span>Clara</span>
      </b>
    </div>
    {NAV_ITEMS.map((item) => (
      <span key={item.label} className={`${styles.navItem} ${item.active ? styles.navItemActive : ""}`}>
        <Icon name={item.icon} />
        {item.label}
      </span>
    ))}
    <div className={styles.user}>
      <Avatar initials="CO" from="#56CCF2" to="#2F80ED" />
      <div>
        <b>Carla Ortiz</b>
        Operaciones
      </div>
    </div>
  </div>
);

export default DashboardSidebar;
