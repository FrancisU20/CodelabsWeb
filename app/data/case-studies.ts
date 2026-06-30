export type CaseStudy = {
  id: string;
  title: Record<"es" | "en", string>;
  result: Record<"es" | "en", string>;
  impact: Record<"es" | "en", string>;
  focus: Record<"es" | "en", string>;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "health-apps",
    title: { es: "Apps de salud", en: "Health apps" },
    result: { es: "+40% en rendimiento", en: "+40% in performance" },
    impact: {
      es: "Plataforma móvil con seguimiento clínico y tableros en tiempo real. +40% en rendimiento y cumplimiento estricto de privacidad.",
      en: "Mobile platform with clinical tracking and real-time dashboards. +40% in performance and strict privacy compliance.",
    },
    focus: {
      es: "Flutter · APIs seguras · Analytics",
      en: "Flutter · Secure APIs · Analytics",
    },
  },
  {
    id: "insurance-platforms",
    title: { es: "Plataformas de seguros", en: "Insurance platforms" },
    result: {
      es: "Time-to-market en semanas",
      en: "Time-to-market in weeks",
    },
    impact: {
      es: "Onboarding digital y cotización automática. Arquitectura modular que reduce el time-to-market de nuevos productos a semanas.",
      en: "Digital onboarding and automated quoting. Modular architecture that cuts new product time-to-market to weeks.",
    },
    focus: {
      es: "Microservicios · Clean Architecture · UX conversacional",
      en: "Microservices · Clean Architecture · Conversational UX",
    },
  },
  {
    id: "identity-biometrics",
    title: { es: "Identidad y biometría", en: "Identity and biometrics" },
    result: {
      es: "Alta disponibilidad en producción",
      en: "High availability in production",
    },
    impact: {
      es: "Orquestación de validaciones biométricas y antifraude. Latencia optimizada y alta disponibilidad en AWS con observabilidad finamente instrumentada.",
      en: "Orchestration of biometric and anti-fraud checks. Optimized latency and high availability on AWS with finely instrumented observability.",
    },
    focus: {
      es: "EventBridge · Lambda · Observabilidad",
      en: "EventBridge · Lambda · Observability",
    },
  },
  {
    id: "high-traffic-web",
    title: { es: "Webs de alto tráfico", en: "High-traffic websites" },
    result: {
      es: "Core Web Vitals en verde",
      en: "Core Web Vitals in the green",
    },
    impact: {
      es: "Sitios performantes con SEO técnico y CDN global. Core Web Vitals en verde, despliegues confiables y operación 24/7.",
      en: "High-performance sites with technical SEO and a global CDN. Core Web Vitals in the green, reliable deployments, and 24/7 operation.",
    },
    focus: {
      es: "Next.js · Edge · Diseño de sistemas",
      en: "Next.js · Edge · Systems design",
    },
  },
  {
    id: "automation-platforms",
    title: {
      es: "Plataformas de automatización",
      en: "Automation platforms",
    },
    result: {
      es: "Errores operativos a la baja",
      en: "Operational errors trending down",
    },
    impact: {
      es: "Workflows orquestados con colas y eventos. Reducción de errores operativos, alertas proactivas y trazabilidad de punta a punta.",
      en: "Workflows orchestrated with queues and events. Fewer operational errors, proactive alerts, and end-to-end traceability.",
    },
    focus: {
      es: "SQS · RDS · Domain events",
      en: "SQS · RDS · Domain events",
    },
  },
];
