import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, EMAIL_LINK, PHONE_LINK } from "@/config/contact";
import type { Messages } from "@/i18n/messages/messages";

const LINK_CLASS = "underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand";

const ContactDetails = ({ copy }: { copy: Messages["contact"] }) => {
  const channels = [
    { label: copy.emailLabel, value: CONTACT_EMAIL, href: EMAIL_LINK },
    { label: copy.phoneLabel, value: CONTACT_PHONE_DISPLAY, href: PHONE_LINK },
    { label: copy.officeLabel, value: copy.office, href: undefined },
  ];

  return (
    <dl className="mt-8 flex flex-col gap-5">
      {channels.map((channel) => (
        <div key={channel.label} className="flex flex-col gap-0.5">
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-dim">{channel.label}</dt>
          <dd className="m-0 text-[19px]">
            {channel.href ? (
              <a href={channel.href} className={LINK_CLASS}>
                {channel.value}
              </a>
            ) : (
              channel.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default ContactDetails;
