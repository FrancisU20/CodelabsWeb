import StatusBar from "@/shared/devices/status-bar";
import Icon from "@/shared/ui/icons/svg-icon";
import { cx } from "@/shared/lib/class-names";
import { RUTA_SHIPMENTS } from "./ruta-shipments";
import StatusPill from "./status-pill";
import AppTabBar from "./app-tab-bar";
import styles from "./mockups.module.css";
import appStyles from "./ruta.module.css";

const [featured, ...others] = RUTA_SHIPMENTS;
const LISTED_SHIPMENTS = others.slice(0, 2);

const RutaApp = () => (
  <div className={cx(styles.app, appStyles.ruta)}>
    <StatusBar />
    <div className={styles.brandline}>
      <Icon name="mark-ruta" className={styles.mark} />
      <b className={appStyles.rutaWord}>
        Ruta<span>Clara</span>
      </b>
    </div>
    <div className={appStyles.routeCard}>
      <div className={appStyles.routeEnds}>
        <span>
          GYE<small>Guayaquil</small>
        </span>
        <span className="text-right">
          RTM<small>Rotterdam</small>
        </span>
      </div>
      <div className={appStyles.trackBar}>
        <i className={appStyles.trackFill} />
        <b className={appStyles.trackDot} />
      </div>
      <small>{featured.container} · llega en 9 días</small>
    </div>
    {LISTED_SHIPMENTS.map((shipment) => (
      <div key={shipment.container} className={appStyles.shipment}>
        <div>
          {shipment.container}
          <small>{shipment.route}</small>
        </div>
        <StatusPill status={shipment.status} />
      </div>
    ))}
    <AppTabBar icons={["box", "search", "chart", "user"]} />
  </div>
);

export default RutaApp;
