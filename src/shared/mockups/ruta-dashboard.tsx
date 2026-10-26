import Icon from "@/shared/ui/icons/svg-icon";
import DashboardKpis from "./dashboard-kpis";
import DashboardMap from "./dashboard-map";
import DashboardSidebar from "./dashboard-sidebar";
import DashboardTable from "./dashboard-table";
import styles from "./dashboard.module.css";

const RutaDashboard = ({ className = "" }: { className?: string }) => (
  <div className={`${styles.browser} ${className}`}>
    <div className={styles.bar}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.url}>app.rutaclara.com/embarques</span>
    </div>
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
  </div>
);

export default RutaDashboard;
