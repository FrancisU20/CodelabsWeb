export type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "accepted"; reference: string; whatsAppLink: string }
  | { status: "failed"; whatsAppLink: string };
