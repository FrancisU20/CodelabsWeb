"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/i18n/dictionary";
import { localeFromPathname } from "@/app/i18n/paths";

const WhatsAppButton = () => {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale).whatsapp;
  const phone = "0984522092";
  const waLink = `https://wa.me/593${phone.replace(/\D/g, "").slice(-9)}`;

  return (
    <Link
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.ariaLabel}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#1ebe57] text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.54.67 4.92 1.85 6.97L3 29l6.18-1.8A12.97 12.97 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.27c-1.94 0-3.73-.52-5.28-1.42l-.38-.22-3.82.99 1.02-3.72-.25-.39A10.28 10.28 0 0 1 5.73 16c0-5.68 4.6-10.27 10.27-10.27 2.75 0 5.34 1.08 7.29 3.04a10.23 10.23 0 0 1 3.03 7.29c0 5.68-4.6 10.27-10.27 10.27Zm5.6-7.64c-.31-.16-1.84-.9-2.13-1.02-.29-.12-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.52-1.8-1.7-2.11-.18-.31-.02-.48.14-.64.14-.13.31-.35.46-.52.15-.17.2-.29.31-.47.1-.19.05-.37-.03-.53-.08-.16-.71-1.71-.97-2.35-.25-.6-.5-.52-.71-.53l-.6-.01c-.19 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.28-.19-.59-.35Z"
        />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;
