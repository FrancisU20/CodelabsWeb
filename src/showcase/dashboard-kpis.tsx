import styles from "./dashboard.module.css";

const KPIS = [
  { label: "En tránsito", value: 24, trend: "+4 esta semana", color: "#2F80ED", points: "0,20 10,17 20,18 30,12 40,13 50,7 64,4" },
  { label: "Inspeccionados", value: 9, trend: "Al día", color: "#E0A030", points: "0,14 10,16 20,10 30,13 40,9 50,11 64,8" },
  { label: "Liberados", value: 61, trend: "+12% vs. mes anterior", color: "#1B8A4B", points: "0,22 10,19 20,17 30,14 40,10 50,8 64,3" },
];

const DashboardKpis = () => (
  <div className={styles.kpis}>
    {KPIS.map((kpi) => (
      <div key={kpi.label} className={styles.kpi}>
        <small>{kpi.label}</small>
        <div className={styles.kpiRow}>
          <b>{kpi.value}</b>
          <svg viewBox="0 0 64 26" aria-hidden="true">
            <polyline
              points={kpi.points}
              fill="none"
              stroke={kpi.color}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <em>{kpi.trend}</em>
      </div>
    ))}
  </div>
);

export default DashboardKpis;
