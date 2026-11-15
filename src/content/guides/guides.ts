import { appCostGuide } from "./app-cost-guide";
import { awsMigrationGuide } from "./aws-migration-guide";
import { chooseCompanyGuide } from "./choose-company-guide";
import { engagementModelsGuide } from "./engagement-models-guide";
import type { Guide } from "./guide";
import { whatsappAiGuide } from "./whatsapp-ai-guide";

export const GUIDES: readonly Guide[] = [appCostGuide, chooseCompanyGuide, whatsappAiGuide, engagementModelsGuide, awsMigrationGuide];

export const guideBySlug = (slug: string): Guide | undefined => GUIDES.find((guide) => guide.slug === slug);
