import StatusBar from "@/shared/devices/status-bar";
import { joinClassNames } from "@/shared/lib/class-names";
import AppTabBar from "./app-tab-bar";
import Avatar from "./avatar";
import styles from "./mockups.module.css";
import appStyles from "./supermaxi.module.css";

const CURRENT_STEP = 2;

const STEPS = ["Recibido", "Preparado", "En camino", "Entregado"];

const SupermaxiApp = () => (
  <div className={joinClassNames(styles.app, appStyles.supermaxi)}>
    <StatusBar />
    <b className={appStyles.word}>Supermaxi</b>
    <div className={appStyles.order}>
      <small>Tu pedido está en camino</small>
      <b>Llega 18:20 – 18:40</b>
      <div className={appStyles.steps}>
        {STEPS.map((step, stepIndex) => (
          <span key={step} className={joinClassNames(appStyles.step, stepIndex <= CURRENT_STEP && appStyles.stepDone)}>
            <i />
            {step}
          </span>
        ))}
      </div>
    </div>
    <div className={appStyles.courier}>
      <Avatar initials="CM" from="#F28B82" to="#C8102E" />
      <div>
        <b>Carlos M.</b>
        <small>Tu repartidor · moto</small>
      </div>
    </div>
    <div className={appStyles.summary}>
      <span>12 productos</span>
      <b>$48,75</b>
    </div>
    <AppTabBar icons={["home", "search", "box", "user"]} />
  </div>
);

export default SupermaxiApp;
