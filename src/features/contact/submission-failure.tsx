type SubmissionFailureProps = {
  message: string;
  actionLabel: string;
  whatsAppLink: string;
};

const SubmissionFailure = ({ message, actionLabel, whatsAppLink }: SubmissionFailureProps) => (
  <p className="m-0 flex flex-col gap-3 rounded-xl bg-panel-2 p-4">
    <span>{message}</span>
    <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
      {actionLabel}
    </a>
  </p>
);

export default SubmissionFailure;
