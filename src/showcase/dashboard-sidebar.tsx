import Icon from "@/shared/ui/icons/svg-icon";
import type { IconName } from "@/shared/ui/icons/icon-name";
import { joinClassNames } from "@/shared/lib/class-names";
import Avatar from "./avatar";
import BrandLogo from "./brand-logo";
import styles from "./dashboard.module.css";

const NAV_ITEMS: { icon: IconName; label: string; active: boolean }[] = [
  { icon: "box", label: "Despachos", active: true },
  { icon: "search", label: "Bodega", active: false },
  { icon: "home", label: "Farmacias", active: false },
  { icon: "chart", label: "Reportes", active: false },
];

const DashboardSidebar = ({ logoSrc }: { logoSrc: string }) => (
  <div className={styles.side}>
    <div className={styles.brand}>
      <BrandLogo src={logoSrc} name="Farmaenlace" width={422} height={92} />
    </div>
    {NAV_ITEMS.map((item) => (
      <span key={item.label} className={joinClassNames(styles.navItem, item.active && styles.navItemActive)}>
        <Icon name={item.icon} />
        {item.label}
      </span>
    ))}
    <div className={styles.user}>
      <Avatar initials="DP" from="#8CC63F" to="#12235F" />
      <div>
        <b>Diego Paredes</b>
        Logística
      </div>
    </div>
  </div>
);

export default DashboardSidebar;
