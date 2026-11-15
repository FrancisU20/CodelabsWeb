import WindowFrame from "@/shared/devices/window-frame";
import Icon from "@/shared/ui/icons/svg-icon";
import DashboardKpis from "./dashboard-kpis";
import DashboardMap from "./dashboard-map";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardTable from "./dashboard-table";
import styles from "./dashboard.module.css";

const WINDOW_CAPTION = "Plataforma de despachos";

type FarmaenlaceDashboardProps = {
  logoSrc: string;
  className?: string;
};

const FarmaenlaceDashboard = ({ logoSrc, className }: FarmaenlaceDashboardProps) => (
  <WindowFrame kind="browser" caption={WINDOW_CAPTION} className={className}>
    <div className={styles.layout}>
      <DashboardSidebar logoSrc={logoSrc} />
      <div className={styles.main}>
        <div className={styles.head}>
          <div>
            <p className={styles.title}>Despachos a farmacias</p>
            <small>Actualizado hace 1 min</small>
          </div>
          <span className={styles.search}>
            <Icon name="search" />
            Buscar código
          </span>
        </div>
        <DashboardKpis />
        <div className={styles.grid}>
          <DashboardMap />
          <DashboardTable />
        </div>
      </div>
    </div>
  </WindowFrame>
);

export default FarmaenlaceDashboard;
