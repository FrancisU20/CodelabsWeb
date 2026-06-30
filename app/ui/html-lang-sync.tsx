"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/app/i18n/paths";

const HtmlLangSync = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname);
  }, [pathname]);

  return null;
};

export default HtmlLangSync;
