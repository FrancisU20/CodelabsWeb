import StatusBar from "@/shared/devices/status-bar";
import { joinClassNames } from "@/shared/lib/class-names";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./mockups.module.css";
import appStyles from "./bank-sign.module.css";

const TOTAL_STEPS = 3;
const CURRENT_STEP = 2;
const STEP_INDEXES = [0, 1, 2];

const CHECKS = ["Prueba de vida superada", "Rostro coincide con tu cédula"];

const BankSignApp = () => (
  <div className={joinClassNames(styles.app, appStyles.bank)}>
    <StatusBar />
    <div className={styles.row}>
      <b className={appStyles.title}>Firma digital</b>
      <span className={appStyles.step}>
        {CURRENT_STEP} de {TOTAL_STEPS}
      </span>
    </div>
    <div className={appStyles.progress}>
      {STEP_INDEXES.map((stepIndex) => (
        <i key={stepIndex} className={stepIndex < CURRENT_STEP ? appStyles.progressDone : undefined} />
      ))}
    </div>
    <div className={appStyles.face}>
      <span className={appStyles.oval}>
        <Icon name="user" />
      </span>
    </div>
    {CHECKS.map((check) => (
      <span key={check} className={appStyles.check}>
        <Icon name="check" />
        {check}
      </span>
    ))}
    <div className={appStyles.contract}>
      <small>Contrato de cuenta de ahorros</small>
      <span className={appStyles.sign}>Firmar contrato</span>
    </div>
  </div>
);

export default BankSignApp;
