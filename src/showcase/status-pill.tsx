import { joinClassNames } from "@/shared/lib/class-names";
import type { DispatchStatus } from "./dispatch-status";
import styles from "./mockups.module.css";

const STATUS_LABEL: Record<DispatchStatus, string> = {
  picking: "En preparación",
  transit: "En ruta",
  shelved: "Perchado",
};

const STATUS_CLASS: Record<DispatchStatus, string> = {
  picking: styles.pillInspection,
  transit: styles.pillTransit,
  shelved: styles.pillReleased,
};

type StatusPillProps = {
  status: DispatchStatus;
  className?: string;
};

const StatusPill = ({ status, className }: StatusPillProps) => (
  <span className={joinClassNames(styles.pill, STATUS_CLASS[status], className)}>{STATUS_LABEL[status]}</span>
);

export default StatusPill;
