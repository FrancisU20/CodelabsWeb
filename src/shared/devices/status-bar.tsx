import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./phone.module.css";

const STATUS_TIME = "9:41";

const StatusBar = () => (
  <div className={styles.statusBar}>
    <b>{STATUS_TIME}</b>
    <span className={styles.statusIcons}>
      <Icon name="signal" viewBox="0 0 18 12" />
      <Icon name="wifi" viewBox="0 0 16 12" />
      <Icon name="battery" viewBox="0 0 27 12" />
    </span>
  </div>
);

export default StatusBar;
