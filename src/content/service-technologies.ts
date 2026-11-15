import type { ServiceId } from "./service-id";

export const SERVICE_TECHNOLOGIES: Record<ServiceId, readonly string[]> = {
  web: ["Next.js", "React", "Angular", "Node.js", "NestJS", "AWS"],
  mobile: ["Flutter", "React Native", "Swift", "Kotlin", "PWA"],
  automation: ["Python", "Node.js", ".NET", "AWS Lambda", "Amazon EventBridge", "WhatsApp Business API"],
  ai: ["OpenAI", "Claude", "Amazon Bedrock", "WhatsApp Business API", "Python"],
  custom: [".NET", "Node.js", "NestJS", "Python", "Angular", "React"],
  cloud: ["Amazon ECS", "AWS Lambda", "Amazon RDS", "Amazon S3", "Amazon CloudFront", "AWS Rekognition"],
};
