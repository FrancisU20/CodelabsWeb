import WindowFrame from "@/shared/devices/window-frame";
import Icon from "@/shared/ui/icons/svg-icon";
import DashboardKpis from "./dashboard-kpis";
import DashboardMap from "./dashboard-map";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardTable from "./dashboard-table";
import styles from "./dashboard.module.css";

const APP_ADDRESS = "app.rutaclara.com/embarques";

const RutaDashboard = ({ className }: { className?: string }) => (
  <WindowFrame kind="browser" caption={APP_ADDRESS} className={className}>
    <div className={styles.layout}>
      <DashboardSidebar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div>
            <p className={styles.title}>Trazabilidad de embarques</p>
            <small>Actualizado hace 2 min</small>
          </div>
          <span className={styles.search}>
            <Icon name="search" />
            Buscar contenedor
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

export default RutaDashboard;
