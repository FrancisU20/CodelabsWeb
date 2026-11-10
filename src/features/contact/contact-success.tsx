import type { Messages } from "@/i18n/messages/messages";

type ContactSuccessProps = {
  copy: Messages["contact"]["success"];
  reference: string;
  whatsAppLink: string;
};

const ContactSuccess = ({ copy, reference, whatsAppLink }: ContactSuccessProps) => (
  <div aria-live="polite" className="flex min-w-0 flex-col gap-4 rounded-xl border border-line bg-panel p-[clamp(24px,3vw,36px)]">
    <h3 className="m-0 text-2xl font-bold tracking-[-0.02em]">{copy.title}</h3>
    <p className="m-0 text-muted">{copy.body}</p>
    <div className="rounded-xl bg-panel-2 p-4">
      <span className="block text-xs text-dim">{copy.referenceLabel}</span>
      <b className="text-2xl tracking-[0.08em] text-brand">{reference}</b>
    </div>
    <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
      {copy.whatsApp}
    </a>
  </div>
);

export default ContactSuccess;
