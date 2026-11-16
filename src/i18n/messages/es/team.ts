import type { Messages } from "../messages";

export const team: Messages["team"] = {
  founder: {
    label: "Fundador",
    role: "Fundador y CEO de CodeLabs",
    bio: [
      "Lleva más de {experience} años construyendo software para empresas. Fundó CodeLabs en {founded} y desde entonces ha dirigido más de {projects} proyectos para banca, salud, retail y logística en Ecuador, Perú, Colombia y México.",
      "Participa en cada proyecto desde la propuesta: revisa el alcance, el plazo y el precio, y se asegura de que lo que prometemos se entregue.",
    ],
    quote: "Cada proyecto que firmamos lleva mi nombre. Si algo no está bien, respondo yo.",
    linkedin: "Ver perfil de Francisco en LinkedIn",
  },
  title: { lines: ["Un equipo armado"], accent: "para tu proyecto." },
  body: "Tú hablas con una sola persona. Detrás, cada especialidad la cubre alguien que sabe de eso.",
  clientLabel: "Tu empresa",
  leadBadge: "Tu contacto",
  roles: [
    { id: "manager", title: "Dirección de proyecto", body: "Te informa cada semana cómo va todo." },
    { id: "design", title: "Diseño", body: "Hace las pantallas y cuida que se entiendan a la primera." },
    { id: "development", title: "Desarrollo web y móvil", body: "Programa tu página, tu app o tu sistema." },
    { id: "automation", title: "Automatización e IA", body: "Integra tus sistemas y prepara los asistentes con la información de tu empresa." },
    { id: "cloud", title: "Nube y seguridad", body: "Se encarga de los servidores y de proteger tu información." },
    { id: "support", title: "Pruebas y soporte", body: "Revisa todo antes de entregarlo y te atiende cuando ya está en uso." },
  ],
};
