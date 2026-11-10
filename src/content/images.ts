export const IMAGES = {
  brand: {
    favicon: "/favicon.ico",
    icon256: "/icon-256.png",
    icon512: "/icon-512.png",
    mark: "/codelabs-mark.svg",
    appleTouch: "/apple-touch-icon.png",
  },
  share: {
    es: "/og/share-es.png",
    en: "/og/share-en.png",
  },
  aws: {
    logo: "/aws/aws-logo-light.webp",
    services: ["/aws/ecs.webp", "/aws/lambda.webp", "/aws/eventbridge.webp", "/aws/sqs.webp", "/aws/rds.webp"],
  },
} as const;

export const clientLogoPath = (file: string): string => `/clients/${file}.webp`;
