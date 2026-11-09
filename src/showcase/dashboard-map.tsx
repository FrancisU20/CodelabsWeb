import StatusPill from "./status-pill";
import styles from "./dashboard.module.css";

const ROUTE_PATH = "M40 110C120 120 180 20 280 40";
const ROUTE_PROGRESS = "60 100";

const DashboardMap = () => (
  <div className={styles.mapCard}>
    <div className={styles.mapHeader}>
      MSKU 204118
      <StatusPill status="transit" />
    </div>
    <svg viewBox="0 0 320 150" aria-hidden="true">
      <defs>
        <pattern id="route-map-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#D5DEEA" />
        </pattern>
      </defs>
      <rect width="320" height="150" rx="10" fill="url(#route-map-dots)" />
      <path d="M18 70c14-20 40-30 52-18s4 40 20 56 30 10 34 26H18z" fill="#E6EDF6" />
      <path d="M222 10c24-6 60 0 80 14s4 34-18 34-40-8-56-20-30-22-6-28z" fill="#E6EDF6" />
      <path d={ROUTE_PATH} fill="none" stroke="#A9BBD4" strokeWidth="2" strokeDasharray="4 5" />
      <path d={ROUTE_PATH} fill="none" stroke="#2F80ED" strokeWidth="3" strokeLinecap="round" pathLength={100} strokeDasharray={ROUTE_PROGRESS} />
      <circle cx="40" cy="110" r="5" fill="#0F2747" />
      <circle cx="280" cy="40" r="5" fill="#FFFFFF" stroke="#0F2747" strokeWidth="2.5" />
      <circle cx="180" cy="57" r="9" fill="#2F80ED" opacity="0.2" />
      <circle cx="180" cy="57" r="5" fill="#2F80ED" />
      <text x="40" y="132" fontSize="11" fontWeight="700" fill="#0F2747" textAnchor="middle">
        Guayaquil
      </text>
      <text x="280" y="24" fontSize="11" fontWeight="700" fill="#0F2747" textAnchor="middle">
        Rotterdam
      </text>
    </svg>
    <div className={styles.mapFooter}>
      <span>
        Salida <b>02 oct</b>
      </span>
      <span>
        Llegada estimada <b>21 oct</b>
      </span>
    </div>
  </div>
);

export default DashboardMap;
