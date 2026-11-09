import { sha256Hex } from "@/shared/lib/sha256-hex";
import type { LeadSubmission } from "./lead-submission";

const LEAD_INTAKE_PATH = "/api/leads";
const CONTENT_HASH_HEADER = "x-amz-content-sha256";

export const sendLead = async (submission: LeadSubmission): Promise<string> => {
  const body = JSON.stringify(submission);
  const response = await fetch(LEAD_INTAKE_PATH, {
    method: "POST",
    headers: { "content-type": "application/json", [CONTENT_HASH_HEADER]: await sha256Hex(body) },
    body,
  });
  if (!response.ok) throw new Error(`Lead intake responded ${response.status}`);
  const { reference } = (await response.json()) as { reference: string };
  return reference;
};
