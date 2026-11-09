import type { IconName } from "@/shared/ui/icons/icon-name";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./mockups.module.css";

const AppTabBar = ({ icons }: { icons: IconName[] }) => (
  <nav className={styles.tabs}>
    {icons.map((name) => (
      <Icon key={name} name={name} />
    ))}
  </nav>
);

export default AppTabBar;
