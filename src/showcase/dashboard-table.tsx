import { RUTA_SHIPMENTS } from "./ruta-shipments";
import StatusPill from "./status-pill";
import styles from "./dashboard.module.css";

const DashboardTable = () => (
  <div className={styles.table}>
    <div className={`${styles.tableRow} ${styles.tableHead}`}>
      <span>Contenedor</span>
      <span>Ruta</span>
      <span>Estado</span>
    </div>
    {RUTA_SHIPMENTS.map((shipment) => (
      <div key={shipment.container} className={styles.tableRow}>
        <span>{shipment.container}</span>
        <span>{shipment.route}</span>
        <StatusPill status={shipment.status} className={styles.tablePill} />
      </div>
    ))}
  </div>
);

export default DashboardTable;
