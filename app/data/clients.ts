export type Client = {
  name: string;
  sector: Record<"es" | "en", string>;
  summary: Record<"es" | "en", string>;
  logoText?: string;
  logoUrl?: string;
  webUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
};

export const clients: Client[] = [
  {
    name: "Curve Pilates",
    sector: { es: "FitTech", en: "FitTech" },
    summary: {
      es: "App de entrenamiento y reservas con membresías digitales.",
      en: "Training and booking app with digital memberships.",
    },
    logoText: "CP",
    logoUrl: "/logos/curve-pilates.png",
    webUrl: "https://www.instagram.com/curvepilates_",
  },
  {
    name: "TodoLegal",
    sector: { es: "LegalTech", en: "LegalTech" },
    summary: {
      es: "Soluciones legales y pagos con onboarding KYC.",
      en: "Legal and payment solutions with KYC onboarding.",
    },
    logoText: "TL",
    logoUrl: "/logos/todolegal.png",
    webUrl: "https://todolegal.com/",
  },
  {
    name: "BASC",
    sector: { es: "SupplyTech", en: "SupplyTech" },
    summary: {
      es: "Plataforma de trazabilidad y compliance para cadena de suministro.",
      en: "Traceability and compliance platform for the supply chain.",
    },
    logoText: "BA",
    logoUrl: "/logos/basc.png",
    webUrl: "https://www.basc-pichincha.org.ec/",
  },
  {
    name: "Emilia Beauty Bar",
    sector: { es: "BeautyTech", en: "BeautyTech" },
    summary: {
      es: "Reservas omnicanal, catálogo y pagos para beauty studios.",
      en: "Omnichannel booking, catalog, and payments for beauty studios.",
    },
    logoText: "EB",
    logoUrl: "/logos/emilia-beauty.png",
    webUrl: "https://www.instagram.com/emiliabeautybar_/",
  },
];
