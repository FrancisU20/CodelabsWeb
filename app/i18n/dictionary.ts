import type { Locale } from "./locale";

export type Dictionary = {
  nav: {
    clientes: string;
    servicios: string;
    casos: string;
    nosotros: string;
    contacto: string;
    cta: string;
    homeAriaLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
    addressPrefix: string;
    navTitle: string;
    legalTitle: string;
    copyright: (year: number) => string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: { title: string; detail: string }[];
    panelLabel: string;
    panelTag: string;
    panelItems: { label: string; value: string }[];
  };
  trustBar: {
    badge: string;
    text: string;
  };
  valueProp: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: { title: string; detail: string }[];
    cta: string;
  };
  clients: {
    eyebrow: string;
    title: string;
    description: string;
  };
  capabilitiesTeaser: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  capabilities: {
    description: string;
    cardCta: string;
  };
  awsShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    partnerLabel: string;
    partnerSub: string;
    benefits: string[];
    servicesLabel: string;
  };
  techStack: {
    eyebrow: string;
    title: string;
    description: string;
  };
  caseStudiesTeaser: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  caseStudies: {
    description: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    manifestoLabel: string;
    manifestoTitle: string;
    manifestoBadge: string;
    highlights: string[];
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    steps: { title: string; detail: string }[];
  };
  contactInfo: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; value: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailCta: string;
    labels: { nombre: string; email: string; empresa: string; descripcion: string };
    placeholders: { nombre: string; email: string; empresa: string; descripcion: string };
    submit: string;
    whatsapp: {
      greeting: string;
      fallbackName: string;
      email: string;
      empresa: string;
      proyecto: string;
      defaultMessage: string;
    };
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  whatsapp: {
    ariaLabel: string;
  };
};

const es: Dictionary = {
  nav: {
    clientes: "Clientes",
    servicios: "Servicios",
    casos: "Casos",
    nosotros: "Nosotros",
    contacto: "Contacto",
    cta: "Hablemos",
    homeAriaLabel: "Inicio CodeLabs",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  footer: {
    tagline:
      "Empresa de ingeniería de software que diseña, construye y opera productos digitales con estándar de nivel empresarial.",
    addressPrefix: "Asunción y Estados Unidos, Quito, Ecuador · Tel: 0984522092 ·",
    navTitle: "Navegación",
    legalTitle: "Legal",
    copyright: (year) => `© ${year} CodeLabs. Todos los derechos reservados.`,
  },
  hero: {
    badge: "Ingeniería de software",
    title:
      "Construimos el software que sostiene a las empresas que no pueden permitirse fallar.",
    subtitle:
      "CodeLabs es una empresa de ingeniería de software que diseña, construye y opera plataformas digitales con estándares de nivel empresarial. Un equipo senior, un proceso probado y resultados medibles.",
    ctaPrimary: "Hablemos de tu proyecto",
    ctaSecondary: "Ver capacidades",
    chips: [
      {
        title: "Arquitectura",
        detail:
          "Clean Architecture, DDD y microservicios con gobernanza técnica de nivel empresarial",
      },
      {
        title: "Entrega",
        detail:
          "Sistemas críticos en salud, fintech, identidad y nube, respaldados por SLAs claros",
      },
    ],
    panelLabel: "Arquitectura + Producto",
    panelTag: "Web · Móvil · Nube",
    panelItems: [
      {
        label: "Dirección técnica",
        value: "Equipo senior asignado a cada cuenta.",
      },
      {
        label: "Calidad medible",
        value: "Escalabilidad, seguridad y experiencia de desarrollo desde el día uno.",
      },
      {
        label: "Ejecución completa",
        value: "Discovery, UX/UI, frontend, backend y DevOps en un solo equipo.",
      },
    ],
  },
  trustBar: {
    badge: "Experiencia comprobada",
    text:
      "Productos en producción en cloud, salud, fintech, identidad y sistemas empresariales.",
  },
  valueProp: {
    eyebrow: "Por qué CodeLabs",
    title: "Estándares de nivel empresarial, sin la fricción de una consultora tradicional.",
    description:
      "La mayoría de proveedores de software sacrifican arquitectura por velocidad, o velocidad por burocracia. CodeLabs no negocia ninguna de las dos: entregamos rápido, con el rigor técnico que exigen los sistemas de misión crítica.",
    pillars: [
      {
        title: "Ejecutamos con dueños claros",
        detail:
          "Cada iniciativa tiene un responsable técnico senior, no un ticket perdido en un backlog.",
      },
      {
        title: "Construimos para escalar",
        detail:
          "Arquitectura limpia y cloud-native pensada para crecer sin reescribir desde cero.",
      },
      {
        title: "Medimos lo que importa",
        detail:
          "Calidad, seguridad y performance verificables en producción, no promesas comerciales.",
      },
    ],
    cta: "Conoce cómo trabajamos →",
  },
  clients: {
    eyebrow: "Nuestros clientes",
    title: "Empresas que confían en CodeLabs",
    description:
      "Organizaciones en salud, fintech, seguros e identidad confían en nuestro equipo para lanzar y operar productos críticos.",
  },
  capabilitiesTeaser: {
    eyebrow: "Capacidades",
    title: "Diseño, arquitectura y entrega end-to-end",
    cta: "Ver todas las capacidades →",
  },
  capabilities: {
    description:
      "Seleccionamos la tecnología correcta para tu contexto empresarial. Arquitectura clara, código limpio y un proceso de trabajo transparente de principio a fin.",
    cardCta: "Cotiza este servicio →",
  },
  awsShowcase: {
    eyebrow: "AWS",
    title: "Embajadores de Amazon Web Services",
    description:
      "Somos embajadores y socios técnicos. Diseñamos y operamos plataformas sobre AWS para salud, fintech, identidad y empresas que necesitan disponibilidad, seguridad y velocidad de entrega.",
    partnerLabel: "Partner & Ambassador",
    partnerSub: "Arquitectura + Delivery",
    benefits: [
      "Arquitecturas en ECS, Lambda, EventBridge y SQS con resiliencia y costos controlados.",
      "Observabilidad con métricas, trazas y alertas alineadas a SLOs ejecutivos.",
      "Prácticas de seguridad y cumplimiento desde el diseño: IAM, redes, cifrado y segregación.",
      "Pipelines CI/CD, blue/green y canary para despliegues sin interrupción.",
    ],
    servicesLabel: "Servicios clave",
  },
  techStack: {
    eyebrow: "Stack",
    title: "Tecnologías favoritas",
    description:
      "Selección precisa según el contexto: performance, mantenibilidad, compliance y equipos que pueden operar sin fricción.",
  },
  caseStudiesTeaser: {
    eyebrow: "Casos",
    title: "Ejemplos de trabajo e impacto",
    cta: "Ver todos los casos →",
  },
  caseStudies: {
    description:
      "Historias reales con foco en resultados: performance, calidad, escalabilidad y experiencia de usuario.",
  },
  about: {
    eyebrow: "Quiénes somos",
    title: "Un equipo de ingeniería involucrado en cada decisión",
    paragraph1:
      "CodeLabs nace de una convicción simple: ninguna empresa debería elegir entre velocidad y calidad. Diseñamos y construimos software con la agilidad de un equipo especializado y el rigor técnico que exigen los sistemas que no pueden fallar.",
    paragraph2:
      "Nuestro equipo combina experiencia en arquitectura de software, Clean Architecture, DDD y microservicios en AWS, con un historial de implementaciones empresariales seguras y de alto impacto. Versatilidad técnica, con criterio.",
    manifestoLabel: "Manifiesto técnico",
    manifestoTitle: "Calidad que se siente en producción",
    manifestoBadge: "Arquitectura primero",
    highlights: [
      "Arquitectura limpia, hexagonal y DDD aplicada en producción",
      "Microservicios y eventos con AWS (ECS, Lambda, EventBridge, SQS, RDS)",
      "Experiencia en CI/CD, observabilidad y plataformas de alto tráfico",
      "Flutter y React Native para experiencias móviles rápidas y mantenibles",
      "Trayectoria entregando implementaciones WordPress empresariales seguras",
    ],
  },
  howWeWork: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro, sin sorpresas en producción",
    steps: [
      {
        title: "Discovery",
        detail:
          "Entendemos el problema de negocio antes de tocar código. Alcance y arquitectura claros desde la primera semana.",
      },
      {
        title: "Arquitectura",
        detail:
          "Diseñamos el sistema para que escale: Clean Architecture, DDD y decisiones técnicas documentadas.",
      },
      {
        title: "Delivery",
        detail:
          "Entregamos en iteraciones cortas, con supervisión técnica senior en cada decisión.",
      },
      {
        title: "Operación",
        detail:
          "Acompañamos en producción: observabilidad, seguridad y SLAs claros más allá del go-live.",
      },
    ],
  },
  contactInfo: {
    eyebrow: "Contacto directo",
    title: "Hablemos",
    description:
      "Respuesta rápida de nuestro equipo. Elige el canal que prefieras.",
    items: [
      { title: "Teléfonos", value: "0984522092" },
      { title: "Dirección", value: "Asunción y Estados Unidos. Quito, Ecuador" },
      { title: "Email", value: "info@codelabsecuador.com" },
    ],
  },
  contact: {
    eyebrow: "Hablemos",
    title: "Conversemos de tu iniciativa",
    description:
      "Respuesta directa de nuestro equipo de ingeniería. Clarificamos objetivos, riesgos y gobernanza técnica para presentarte una ruta ejecutiva en horas, no semanas.",
    emailCta: "Escribir por email",
    labels: {
      nombre: "Nombre",
      email: "Correo",
      empresa: "Empresa",
      descripcion: "Descripción del proyecto",
    },
    placeholders: {
      nombre: "Tu nombre",
      email: "nombre@empresa.com",
      empresa: "Nombre de la empresa",
      descripcion: "Reto, alcance, fechas, tecnologías...",
    },
    submit: "Enviar mensaje",
    whatsapp: {
      greeting: "Hola, soy",
      fallbackName: "un contacto",
      email: "Correo:",
      empresa: "Empresa:",
      proyecto: "Proyecto:",
      defaultMessage: "Quiero hablar con CodeLabs",
    },
  },
  ctaBanner: {
    eyebrow: "Trabajemos juntos",
    title: "Construyamos software que funcione en producción.",
    cta: "Hablemos de tu proyecto",
  },
  whatsapp: {
    ariaLabel: "Abrir WhatsApp",
  },
};

const en: Dictionary = {
  nav: {
    clientes: "Clients",
    servicios: "Services",
    casos: "Case Studies",
    nosotros: "About",
    contacto: "Contact",
    cta: "Let's talk",
    homeAriaLabel: "CodeLabs home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    tagline:
      "A software engineering company that designs, builds, and operates digital products to an enterprise-grade standard.",
    addressPrefix: "Asunción y Estados Unidos, Quito, Ecuador · Phone: 0984522092 ·",
    navTitle: "Navigation",
    legalTitle: "Legal",
    copyright: (year) => `© ${year} CodeLabs. All rights reserved.`,
  },
  hero: {
    badge: "Software Engineering",
    title:
      "We build the software that mission-critical businesses run on.",
    subtitle:
      "CodeLabs is a software engineering company that designs, builds, and operates digital platforms to an enterprise-grade standard. A senior team, a proven process, measurable results.",
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "See capabilities",
    chips: [
      {
        title: "Architecture",
        detail:
          "Clean Architecture, DDD, and microservices with enterprise-grade technical governance",
      },
      {
        title: "Delivery",
        detail:
          "Mission-critical systems in health, fintech, identity, and cloud, backed by clear SLAs",
      },
    ],
    panelLabel: "Architecture + Product",
    panelTag: "Web · Mobile · Cloud",
    panelItems: [
      {
        label: "Technical direction",
        value: "A senior team assigned to every account.",
      },
      {
        label: "Measurable quality",
        value: "Scalability, security, and developer experience from day one.",
      },
      {
        label: "Full execution",
        value: "Discovery, UX/UI, frontend, backend, and DevOps under one team.",
      },
    ],
  },
  trustBar: {
    badge: "Proven track record",
    text:
      "Products in production across cloud, health, fintech, identity, and enterprise systems.",
  },
  valueProp: {
    eyebrow: "Why CodeLabs",
    title: "Enterprise-grade standards, without traditional consultancy friction.",
    description:
      "Most software vendors trade architecture for speed, or speed for bureaucracy. CodeLabs doesn't make either trade-off: we ship fast, with the technical rigor mission-critical systems demand.",
    pillars: [
      {
        title: "We execute with clear ownership",
        detail:
          "Every initiative has a senior technical owner, not a ticket lost in a backlog.",
      },
      {
        title: "We build to scale",
        detail:
          "Clean, cloud-native architecture designed to grow without a rewrite.",
      },
      {
        title: "We measure what matters",
        detail:
          "Quality, security, and performance you can verify in production, not sales promises.",
      },
    ],
    cta: "See how we work →",
  },
  clients: {
    eyebrow: "Our clients",
    title: "Companies that trust CodeLabs",
    description:
      "Organizations in health, fintech, insurance, and identity trust our team to launch and operate critical products.",
  },
  capabilitiesTeaser: {
    eyebrow: "Capabilities",
    title: "Design, architecture, and end-to-end delivery",
    cta: "See all capabilities →",
  },
  capabilities: {
    description:
      "We pick the right technology for your business context. Clear architecture, clean code, and a transparent process from start to finish.",
    cardCta: "Get a quote →",
  },
  awsShowcase: {
    eyebrow: "AWS",
    title: "Amazon Web Services Ambassadors",
    description:
      "We're ambassadors and technical partners. We design and operate AWS platforms for health, fintech, identity, and companies that need availability, security, and delivery speed.",
    partnerLabel: "Partner & Ambassador",
    partnerSub: "Architecture + Delivery",
    benefits: [
      "Architectures on ECS, Lambda, EventBridge, and SQS with resilience and controlled costs.",
      "Observability with metrics, traces, and alerts aligned to executive SLOs.",
      "Security and compliance practices by design: IAM, networking, encryption, and segregation.",
      "CI/CD pipelines, blue/green, and canary deployments with zero downtime.",
    ],
    servicesLabel: "Key services",
  },
  techStack: {
    eyebrow: "Stack",
    title: "Favorite technologies",
    description:
      "A precise selection based on context: performance, maintainability, compliance, and teams that can operate without friction.",
  },
  caseStudiesTeaser: {
    eyebrow: "Case studies",
    title: "Examples of work and impact",
    cta: "See all case studies →",
  },
  caseStudies: {
    description:
      "Real stories focused on results: performance, quality, scalability, and user experience.",
  },
  about: {
    eyebrow: "Who we are",
    title: "An engineering team involved in every decision",
    paragraph1:
      "CodeLabs was founded on a simple conviction: no business should have to choose between speed and quality. We design and build software with the agility of a specialized team and the technical rigor mission-critical systems demand.",
    paragraph2:
      "Our team combines deep experience in software architecture, Clean Architecture, DDD, and microservices on AWS, with a track record of secure, high-impact enterprise implementations. Technical versatility, with judgment.",
    manifestoLabel: "Technical manifesto",
    manifestoTitle: "Quality you can feel in production",
    manifestoBadge: "Architecture first",
    highlights: [
      "Clean, hexagonal architecture and DDD applied in production",
      "Microservices and events with AWS (ECS, Lambda, EventBridge, SQS, RDS)",
      "Experience in CI/CD, observability, and high-traffic platforms",
      "Flutter and React Native for fast, maintainable mobile experiences",
      "A track record delivering secure, enterprise-grade WordPress implementations",
    ],
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "A clear process, no surprises in production",
    steps: [
      {
        title: "Discovery",
        detail:
          "We understand the business problem before touching code. Clear scope and architecture from week one.",
      },
      {
        title: "Architecture",
        detail:
          "We design the system to scale: Clean Architecture, DDD, and documented technical decisions.",
      },
      {
        title: "Delivery",
        detail:
          "We deliver in short iterations, with senior technical oversight on every decision.",
      },
      {
        title: "Operations",
        detail:
          "We stay involved in production: observability, security, and clear SLAs beyond go-live.",
      },
    ],
  },
  contactInfo: {
    eyebrow: "Direct contact",
    title: "Let's talk",
    description:
      "A fast response from our team. Pick the channel you prefer.",
    items: [
      { title: "Phone", value: "0984522092" },
      { title: "Address", value: "Asunción y Estados Unidos. Quito, Ecuador" },
      { title: "Email", value: "info@codelabsecuador.com" },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Let's talk about your project",
    description:
      "A direct response from our engineering team. We clarify goals, risks, and technical governance to hand you an executive roadmap in hours, not weeks.",
    emailCta: "Email us",
    labels: {
      nombre: "Name",
      email: "Email",
      empresa: "Company",
      descripcion: "Project description",
    },
    placeholders: {
      nombre: "Your name",
      email: "name@company.com",
      empresa: "Company name",
      descripcion: "Challenge, scope, timeline, technologies...",
    },
    submit: "Send message",
    whatsapp: {
      greeting: "Hi, I'm",
      fallbackName: "a contact",
      email: "Email:",
      empresa: "Company:",
      proyecto: "Project:",
      defaultMessage: "I'd like to talk to CodeLabs",
    },
  },
  ctaBanner: {
    eyebrow: "Let's work together",
    title: "Let's build software that works in production.",
    cta: "Let's talk about your project",
  },
  whatsapp: {
    ariaLabel: "Open WhatsApp",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
