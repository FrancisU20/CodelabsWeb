import type { ShipmentStatus } from "./shipment-status";
import styles from "./mockups.module.css";

const STATUS_LABEL: Record<ShipmentStatus, string> = {
  transit: "En tránsito",
  inspection: "Inspección",
  released: "Liberado",
};

const STATUS_CLASS: Record<ShipmentStatus, string> = {
  transit: styles.pillTransit,
  inspection: styles.pillInspection,
  released: styles.pillReleased,
};

type StatusPillProps = {
  status: ShipmentStatus;
  className?: string;
};

const StatusPill = ({ status, className = "" }: StatusPillProps) => (
  <span className={`${styles.pill} ${STATUS_CLASS[status]} ${className}`}>{STATUS_LABEL[status]}</span>
);

export default StatusPill;
