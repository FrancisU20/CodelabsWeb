import StatusBar from "@/shared/devices/status-bar";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./mockups.module.css";
import appStyles from "./lexa.module.css";

const TOTAL_STEPS = 3;
const CURRENT_STEP = 2;
const SAMPLE_MRZ = "IDECU1723456789<<<<<<<<";

const LexaApp = () => (
  <div className={`${styles.app} ${appStyles.lexa}`}>
    <StatusBar />
    <div className={styles.row}>
      <div className={styles.brandline}>
        <Icon name="mark-lexa" className={styles.mark} />
        <b className={appStyles.lexaWord}>
          lexa<span>.</span>
        </b>
      </div>
      <span className={appStyles.lexaStep}>
        {CURRENT_STEP} de {TOTAL_STEPS}
      </span>
    </div>
    <div className={appStyles.progress}>
      {[...Array(TOTAL_STEPS).keys()].map((stepIndex) => (
        <i key={stepIndex} className={stepIndex < CURRENT_STEP ? appStyles.progressDone : ""} />
      ))}
    </div>
    <div>
      <p className={appStyles.lexaTitle}>Escanea tu cédula</p>
      <small>Ubícala dentro del marco</small>
    </div>
    <div className={appStyles.camera}>
      <div className={appStyles.idCard}>
        <span className={appStyles.idPhoto} />
        <span className={appStyles.idLines}>
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className={appStyles.mrz}>{SAMPLE_MRZ}</span>
      </div>
      <span className={`${appStyles.corner} ${appStyles.cornerTopLeft}`} />
      <span className={`${appStyles.corner} ${appStyles.cornerTopRight}`} />
      <span className={`${appStyles.corner} ${appStyles.cornerBottomLeft}`} />
      <span className={`${appStyles.corner} ${appStyles.cornerBottomRight}`} />
      <span className={appStyles.scanLine} />
    </div>
    <div className={appStyles.tip}>
      <Icon name="sun" />
      Buena luz y sin reflejos
    </div>
    <div className={appStyles.lexaCta}>Capturar</div>
  </div>
);

export default LexaApp;
