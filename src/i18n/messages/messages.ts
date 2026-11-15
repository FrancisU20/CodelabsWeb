import type { EngagementModelId } from "@/content/engagement-model-id";
import type { IndustryId } from "@/content/industry-id";
import type { ReviewId } from "@/content/review-id";
import type { ReviewSource } from "@/content/review-source";
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
    guides: string;
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
    showcaseLabel: string;
    showcaseNote: string;
  };
  clients: {
    title: string;
    industries: { title: string; items: Record<IndustryId, string> };
  };
  manifesto: {
    ariaLabel: string;
    lead: string;
    accent: string;
  };
  stories: {
    label: string;
    storeLabel: string;
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
    timelineLabel: string;
    engagement: {
      title: SectionTitleCopy;
      featured: string;
      items: Record<EngagementModelId, { title: string; forWho: string; details: { label: string; text: string }[]; priceNote: string }>;
      chooser: { question: string; answer: string }[];
      guideLink: string;
    };
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
    title: string;
    projects: string;
    apps: string;
    countries: string;
    years: string;
    awsPartner: string;
    awsCertifications: string;
  };
  aws: {
    eyebrow: string;
    title: SectionTitleCopy;
    badgeTitle: string;
    badgeCertifications: string;
    badgeAccreditations: string;
    body: string;
    flowAriaLabel: string;
    flow: { label: string; detail: string }[];
  };
  team: {
    founder: { label: string; bio: string; linkedin: string };
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
    bookingCard: { title: string; body: string };
  };
  footer: {
    legalAriaLabel: string;
    linkedin: string;
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
    labels: { back: string; cta: string; fitTitle: string; includesTitle: string; otherTitle: string };
    items: Record<
      ServiceId,
      {
        seoTitle: string;
        seoDescription: string;
        title: string;
        description: string;
        timeline: string;
        fit: string[];
        includes: { title: string; body: string }[];
        example?: ChatCopy;
      }
    >;
  };
  serviceDetails: {
    labels: { outcomesTitle: string; stepsTitle: string; casesTitle: string; casesLink: string; techTitle: string; faqTitle: string };
    items: Record<
      ServiceId,
      {
        headline: string;
        outcomes: { title: string; body: string }[];
        steps: { when: string; title: string; body: string }[];
        faqs: { question: string; answer: string }[];
        cases: { name: string; summary: string }[];
      }
    >;
  };
  guides: {
    eyebrow: string;
    title: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    label: string;
    readingTime: string;
    published: string;
    faqTitle: string;
    relatedTitle: string;
    read: string;
  };
  reviews: {
    title: string;
    averageLabel: string;
    seeAll: string;
    ratingLabel: string;
    sources: Record<ReviewSource, string>;
    quotes: Record<ReviewId, string>;
  };
  pricing: {
    from: string;
    perMonth: string;
    note: string;
  };
  closingCall: {
    title: string;
    body: string;
    cta: string;
    bookingCta: string;
    photoAlt: string;
  };
};
