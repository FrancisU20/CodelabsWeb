import type { Messages } from "../messages";

export const about: Messages["about"] = {
  factsLabel: "CodeLabs en cifras",
  facts: {
    founded: "año de fundación",
    projects: "proyectos entregados",
    apps: "apps publicadas",
    countries: "países: Ecuador, Perú, Colombia y México",
  },
  trust: {
    title: { lines: ["Empresas que ya"], accent: "confían en nosotros." },
    body: "Somos socios AWS de nivel Select, con {certifications} certificaciones y {accreditations} acreditaciones de Amazon en el equipo.",
    link: "Ver casos de éxito",
  },
};
