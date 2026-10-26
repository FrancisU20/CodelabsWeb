import type { ServiceId } from "@/content/service-id";
import type { PageKey } from "../page-key";

export type Messages = {
  nav: {
    homeAriaLabel: string;
    menuAriaLabel: string;
    clients: string;
    work: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    switchLanguage: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  clients: {
    eyebrow: string;
    title: string;
  };
  manifesto: {
    ariaLabel: string;
    lead: string;
    accent: string;
  };
  stories: {
    items: { tag: string; title: string; body: string }[];
    note: string;
  };
  webShowcase: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
  };
  services: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    idealFor: string;
    items: { id: ServiceId; title: string; body: string; audience: string }[];
  };
  quality: {
    ariaLabel: string;
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    windowLabel: string;
    meterTitle: string;
    meterCaption: string;
    checks: string[];
    approved: string;
    live: string;
  };
  impact: {
    eyebrow: string;
    captionStrong: string;
    captionMuted: string;
    resultsAriaLabel: string;
    results: { title: string; body: string }[];
  };
  aws: {
    eyebrow: string;
    titleLines: string[];
    badgeTitle: string;
    badgeCaption: string;
    body: string;
    benefits: { title: string; body: string }[];
    flowAriaLabel: string;
    flow: { label: string; detail: string }[];
  };
  team: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    roles: { title: string; body: string }[];
  };
  howWeWork: {
    eyebrow: string;
    titleLines: string[];
    steps: { title: string; body: string }[];
  };
  contact: {
    titleLead: string;
    titleAccent: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    office: string;
    labels: { name: string; company: string; email: string; project: string };
    placeholders: { name: string; company: string; email: string; project: string };
    submit: string;
    ready: string;
    openWhatsApp: string;
    message: { greeting: string; fallbackName: string; company: string; email: string; project: string };
  };
  footer: {
    location: string;
    legalAriaLabel: string;
    privacy: string;
    terms: string;
    dataProcessing: string;
    unsubscribe: string;
  };
  whatsapp: {
    ariaLabel: string;
    label: string;
    message: string;
  };
  notFound: { title: string; body: string; cta: string };
  pages: Record<Exclude<PageKey, "home">, { eyebrow: string; title: string; description: string }>;
  seo: Record<PageKey, { title: string; description: string }>;
};
