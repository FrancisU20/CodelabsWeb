import { FARMAENLACE_DISPATCHES } from "./farmaenlace-dispatches";
import StatusPill from "./status-pill";
import styles from "./dashboard.module.css";

const DashboardTable = () => (
  <div className={styles.table}>
    <div className={`${styles.tableRow} ${styles.tableHead}`}>
      <span>Código</span>
      <span>Destino</span>
      <span>Estado</span>
    </div>
    {FARMAENLACE_DISPATCHES.map((dispatch) => (
      <div key={dispatch.code} className={styles.tableRow}>
        <span>{dispatch.code}</span>
        <span>{dispatch.route}</span>
        <StatusPill status={dispatch.status} className={styles.tablePill} />
      </div>
    ))}
  </div>
);

export default DashboardTable;
