import StatusBar from "@/shared/devices/status-bar";
import { joinClassNames } from "@/shared/lib/class-names";
import AppTabBar from "./app-tab-bar";
import BrandLogo from "./brand-logo";
import { FARMAENLACE_DISPATCHES } from "./farmaenlace-dispatches";
import StatusPill from "./status-pill";
import styles from "./mockups.module.css";
import appStyles from "./farmaenlace.module.css";

const [featured, ...others] = FARMAENLACE_DISPATCHES;
const LISTED_DISPATCHES = others.slice(0, 2);

const FarmaenlaceApp = ({ logoSrc }: { logoSrc: string }) => (
  <div className={joinClassNames(styles.app, appStyles.farmaenlace)}>
    <StatusBar />
    <BrandLogo src={logoSrc} name="Farmaenlace" width={422} height={92} className={appStyles.logo} />
    <div className={appStyles.routeCard}>
      <div className={appStyles.routeEnds}>
        <span>
          BOD<small>Bodega central</small>
        </span>
        <span className="text-right">
          IBA<small>Medicity Ibarra</small>
        </span>
      </div>
      <div className={appStyles.trackBar}>
        <i className={appStyles.trackFill} />
        <b className={appStyles.trackDot} />
      </div>
      <small>{featured.code} · llega en 25 min</small>
    </div>
    {LISTED_DISPATCHES.map((dispatch) => (
      <div key={dispatch.code} className={appStyles.dispatch}>
        <div>
          {dispatch.code}
          <small>{dispatch.route}</small>
        </div>
        <StatusPill status={dispatch.status} />
      </div>
    ))}
    <AppTabBar icons={["box", "search", "chart", "user"]} />
  </div>
);

export default FarmaenlaceApp;
