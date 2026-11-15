import Image from "next/image";
import StatusBar from "@/shared/devices/status-bar";
import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./mockups.module.css";
import appStyles from "./curve.module.css";

const SCREEN_WIDTH = 603;
const SCREEN_HEIGHT = 1220;

const CurveApp = ({ screenSrc }: { screenSrc: string }) => (
  <div className={joinClassNames(styles.app, appStyles.curve)}>
    <StatusBar />
    <Image
      src={screenSrc}
      alt="Curve Pilates Studio: agendar clase"
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      className={appStyles.screen}
    />
  </div>
);

export default CurveApp;
