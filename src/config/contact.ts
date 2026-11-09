export const CONTACT_EMAIL = "info@codelabsecuador.com";

export const CONTACT_PRIVACY_EMAIL = "privacy@codelabsecuador.com";

export const LEAD_CONSENT_VERSION = "2026-11-09";

export const CONTACT_PHONE_DISPLAY = "098 452 2092";

export const WHATSAPP_NUMBER = "593984522092";

export const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

export const EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;

export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
