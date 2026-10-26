import { cssVars } from "@/shared/lib/css-vars";
import styles from "./mockups.module.css";

type AvatarProps = {
  initials: string;
  from: string;
  to: string;
};

const Avatar = ({ initials, from, to }: AvatarProps) => (
  <span className={styles.avatar} style={cssVars({ "--from": from, "--to": to })}>
    {initials}
  </span>
);

export default Avatar;
