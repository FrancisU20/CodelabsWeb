type ContactFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
};

const FIELD_CLASS =
  "w-full rounded-[14px] border border-line bg-ink px-4 py-3.5 text-base text-fg transition-colors focus:border-brand focus:outline-none";

const ContactField = ({ name, label, placeholder, type = "text", autoComplete, required = false, multiline = false }: ContactFieldProps) => {
  const fieldId = `contact-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea id={fieldId} name={name} placeholder={placeholder} className={`${FIELD_CLASS} min-h-[120px] resize-y`} />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          className={`${FIELD_CLASS} min-h-[52px]`}
        />
      )}
    </div>
  );
};

export default ContactField;
