"use client";

import { useLanguage } from "../../lib/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle-btn${locale === "en" ? " lang-toggle-btn--active" : ""}`}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-btn${locale === "ar" ? " lang-toggle-btn--active" : ""}`}
        onClick={() => setLocale("ar")}
        aria-pressed={locale === "ar"}
      >
        عر
      </button>
    </div>
  );
}
