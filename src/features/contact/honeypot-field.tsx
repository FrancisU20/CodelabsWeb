import { HONEYPOT_FIELD } from "./build-lead-submission";

const HoneypotField = ({ label }: { label: string }) => (
  <div aria-hidden="true" className="absolute left-[-9999px]">
    <label>
      {label}
      <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);

export default HoneypotField;
