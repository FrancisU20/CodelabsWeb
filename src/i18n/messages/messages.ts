import type { RoleId } from "@/content/role-id";
import type { ServiceId } from "@/content/service-id";
import type { PageKey } from "../page-key";
import type { ChatCopy } from "./chat-copy";
import type { SectionTitleCopy } from "./section-title-copy";

export type Messages = {
  nav: {
    homeAriaLabel: string;
    menuAriaLabel: string;
    work: string;
    howWeWork: string;
    services: string;
    allServices: string;
    about: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    languageAriaLabel: string;
    currentLanguage: string;
    otherLanguage: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    chat: ChatCopy;
    chatLabel: string;
    toast: { title: string; detail: string };
  };
  clients: {
    title: string;
  };
  manifesto: {
    ariaLabel: string;
    lead: string;
    accent: string;
  };
  stories: {
    label: string;
    items: { tag: string; title: string; body: string }[];
  };
  aiCases: {
    label: string;
    note: string;
    items: { sector: string; title: string; body: string; chat: ChatCopy }[];
  };
  webShowcase: {
    eyebrow: string;
    title: SectionTitleCopy;
    body: string;
  };
  services: {
    title: SectionTitleCopy;
    more: string;
    helpChat: ChatCopy;
    items: { id: ServiceId; title: string; need: string; summary: string; vignette: { lines: string[]; state?: string } }[];
  };
  quality: {
    ariaLabel: string;
    title: SectionTitleCopy;
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
    title: SectionTitleCopy;
    badgeTitle: string;
    badgeCaption: string;
    body: string;
    flowAriaLabel: string;
    flow: { label: string; detail: string }[];
  };
  team: {
    title: SectionTitleCopy;
    body: string;
    leadBadge: string;
    roles: { id: RoleId; title: string; body: string }[];
  };
  howWeWork: {
    title: SectionTitleCopy;
    steps: { title: string; body: string }[];
  };
  contact: {
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    labels: { name: string; company: string; email: string; project: string };
    placeholders: { name: string; company: string; email: string; project: string };
    submit: string;
    submitting: string;
    honeypotLabel: string;
    consent: { text: string; linkLabel: string };
    success: { title: string; body: string; referenceLabel: string; whatsApp: string };
    failure: string;
    openWhatsApp: string;
    message: { greeting: string; fallbackName: string; reference: string; company: string; email: string; project: string };
    whatsAppCard: { title: string; body: string };
  };
  footer: {
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
  servicePages: {
    labels: { back: string; cta: string; fitTitle: string; includesTitle: string; otherTitle: string; exampleNote: string };
    items: Record<
      ServiceId,
      {
        seoTitle: string;
        seoDescription: string;
        title: string;
        description: string;
        fit: string[];
        includes: { title: string; body: string }[];
        example?: ChatCopy;
      }
    >;
  };
  closingCall: {
    title: string;
    body: string;
    cta: string;
  };
};
