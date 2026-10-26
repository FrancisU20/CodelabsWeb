import StatusBar from "@/shared/devices/status-bar";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./mockups.module.css";
import appStyles from "./aura.module.css";

const ACTIVE_CATEGORY = "Pestañas";
const ACTIVE_SLOT = "11:30";
const CATEGORIES = ["Uñas", "Pestañas", "Cejas", "Facial"];
const SLOTS = ["10:00", "11:30", "15:00", "17:30"];

const SERVICES = [
  { name: "Lifting de pestañas", detail: "75 min · con Valeria", price: "$35", active: true },
  { name: "Extensiones clásicas", detail: "120 min", price: "$55", active: false },
];

const AuraApp = () => (
  <div className={`${styles.app} ${appStyles.aura}`}>
    <StatusBar />
    <div className={appStyles.auraLogo}>
      <Icon name="mark-aura" className={styles.mark} />
      <b>AURA</b>
      <small>BEAUTY STUDIO</small>
    </div>
    <div className={appStyles.promo}>
      <div>
        <b>Glow Week</b>
        <small>20% en faciales esta semana</small>
      </div>
      <span className={appStyles.promoAction}>Ver</span>
    </div>
    <div className={appStyles.pills}>
      {CATEGORIES.map((category) => (
        <span key={category} className={`${appStyles.category} ${category === ACTIVE_CATEGORY ? appStyles.categoryActive : ""}`}>
          {category}
        </span>
      ))}
    </div>
    <div>
      {SERVICES.map((service) => (
        <div key={service.name} className={`${appStyles.serviceRow} ${service.active ? appStyles.serviceRowActive : ""}`}>
          <div>
            {service.name}
            <small>{service.detail}</small>
          </div>
          <b>{service.price}</b>
        </div>
      ))}
    </div>
    <div className={appStyles.pills}>
      {SLOTS.map((slot) => (
        <span key={slot} className={`${appStyles.slot} ${slot === ACTIVE_SLOT ? appStyles.slotActive : ""}`}>
          {slot}
        </span>
      ))}
    </div>
    <div className={appStyles.auraCta}>
      Reservar cita<span>$35</span>
    </div>
  </div>
);

export default AuraApp;
