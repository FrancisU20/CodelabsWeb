import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/config/contact";
import { SITE_LOCATION, SITE_LOGO_PATH, SITE_NAME, SITE_URL } from "@/config/site";
import type { Locale } from "@/i18n/locale";
import { getMessages } from "@/i18n/messages/get-messages";

const OrganizationJsonLd = ({ locale }: { locale: Locale }) => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    image: `${SITE_URL}${SITE_LOGO_PATH}`,
    description: getMessages(locale).seo.home.description,
    email: CONTACT_EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    areaServed: SITE_LOCATION.country,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_LOCATION.street,
      addressLocality: SITE_LOCATION.locality,
      addressRegion: SITE_LOCATION.region,
      addressCountry: SITE_LOCATION.country,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />;
};

export default OrganizationJsonLd;
