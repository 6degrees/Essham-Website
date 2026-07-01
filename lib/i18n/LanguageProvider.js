"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "essham-locale";

const LanguageContext = createContext({
  locale: "en",
  setLocale: () => {},
  messages: translations.en,
});

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "ar" || stored === "en" ? stored : "en";
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") {
      setLocaleState(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const isArabic = locale === "ar";
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = translations[locale].meta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", translations[locale].meta.description);
    }

    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = (nextLocale) => {
    if (nextLocale === "en" || nextLocale === "ar") {
      setLocaleState(nextLocale);
    }
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: translations[locale],
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
