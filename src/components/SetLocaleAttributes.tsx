"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { isRtl } from "@/i18n/config";

export default function SetLocaleAttributes({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
