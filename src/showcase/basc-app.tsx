import StatusBar from "@/shared/devices/status-bar";
import { cssVars } from "@/shared/lib/css-vars";
import { joinClassNames } from "@/shared/lib/class-names";
import AppTabBar from "./app-tab-bar";
import BrandLogo from "./brand-logo";
import styles from "./mockups.module.css";
import appStyles from "./basc.module.css";

const COURSE_PROGRESS = "72%";

const NEXT_LESSONS = [
  { title: "Gestión de riesgos en la cadena", detail: "Módulo 6 · 40 min" },
  { title: "Control de contenedores", detail: "Módulo 7 · 35 min" },
];

const BascApp = ({ logoSrc }: { logoSrc: string }) => (
  <div className={joinClassNames(styles.app, appStyles.basc)}>
    <StatusBar />
    <div className={styles.brandline}>
      <BrandLogo src={logoSrc} name="BASC" width={180} height={168} className={appStyles.logo} />
      <b className={appStyles.word}>Cursos</b>
    </div>
    <small>Hola, Mónica</small>
    <div className={appStyles.course} style={cssVars({ "--progress": COURSE_PROGRESS })}>
      <small>Curso en progreso</small>
      <b>Cadena de suministro segura</b>
      <div className={appStyles.bar}>
        <i />
      </div>
      <small>{COURSE_PROGRESS} completado · Módulo 5 de 7</small>
    </div>
    {NEXT_LESSONS.map((lesson) => (
      <div key={lesson.title} className={appStyles.lesson}>
        <b>{lesson.title}</b>
        <small>{lesson.detail}</small>
      </div>
    ))}
    <AppTabBar icons={["home", "chart", "calendar", "user"]} />
  </div>
);

export default BascApp;
