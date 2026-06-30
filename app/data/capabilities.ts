export type Capability = {
  id: string;
  title: Record<"es" | "en", string>;
  description: Record<"es" | "en", string>;
  accent: Record<"es" | "en", string>;
};

export const capabilities: Capability[] = [
  {
    id: "mobile",
    title: {
      es: "Apps móviles (Flutter, React Native)",
      en: "Mobile apps (Flutter, React Native)",
    },
    description: {
      es: "Experiencias nativas con rendimiento alto, CI/CD y analítica. Arquitectura modular para escalar productos sin deuda.",
      en: "Native experiences with high performance, CI/CD, and analytics. Modular architecture to scale products without debt.",
    },
    accent: { es: "Móvil", en: "Mobile" },
  },
  {
    id: "backend",
    title: {
      es: "Cloud & Backend (NestJS, Node, Python)",
      en: "Cloud & Backend (NestJS, Node, Python)",
    },
    description: {
      es: "APIs limpias y observables, modeladas con DDD y pruebas desde el inicio. Seguridad y cumplimiento como requisito, no como adorno.",
      en: "Clean, observable APIs modeled with DDD and tested from day one. Security and compliance as a requirement, not an afterthought.",
    },
    accent: { es: "Backend", en: "Backend" },
  },
  {
    id: "web",
    title: {
      es: "Web Apps (Vue, Next.js)",
      en: "Web Apps (Vue, Next.js)",
    },
    description: {
      es: "Frontends rápidos, accesibles y optimizados para SEO y Core Web Vitals. Sistemas de diseño consistentes para escalar equipos.",
      en: "Fast, accessible frontends optimized for SEO and Core Web Vitals. Consistent design systems to scale teams.",
    },
    accent: { es: "Web", en: "Web" },
  },
  {
    id: "aws",
    title: {
      es: "Arquitectura en AWS",
      en: "AWS Architecture",
    },
    description: {
      es: "ECS, Lambda, EventBridge, RDS, SQS: arquitecturas resilientes con observabilidad, controles de costos y cumplimiento.",
      en: "ECS, Lambda, EventBridge, RDS, SQS: resilient architectures with observability, cost controls, and compliance.",
    },
    accent: { es: "AWS", en: "AWS" },
  },
  {
    id: "architecture",
    title: {
      es: "Clean Architecture & DDD",
      en: "Clean Architecture & DDD",
    },
    description: {
      es: "Separación clara de dominios, puertos/adaptadores y capas para equipos que crecen sin fricción. Diseño que soporta auditorías y cambio.",
      en: "Clear separation of domains, ports/adapters, and layers for teams that grow without friction. Design that withstands audits and change.",
    },
    accent: { es: "Arquitectura", en: "Architecture" },
  },
  {
    id: "wordpress",
    title: {
      es: "WordPress experto",
      en: "Expert WordPress",
    },
    description: {
      es: "Implementaciones empresariales seguras y performantes cuando el time-to-market es clave. Integraciones robustas y gobernadas.",
      en: "Secure, performant enterprise implementations when time-to-market is key. Robust, governed integrations.",
    },
    accent: { es: "WP", en: "WP" },
  },
];
