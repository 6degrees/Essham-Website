"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

function revealElement(el, observer) {
  const delay = el.getAttribute("data-reveal-delay");
  const show = () => {
    el.classList.add("reveal--visible");
    observer.unobserve(el);
  };

  if (delay) {
    window.setTimeout(show, Number(delay));
  } else {
    show();
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 48 && rect.bottom > 48;
}

export default function RevealObserver() {
  const pathname = usePathname();
  const { locale } = useLanguage();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.reveal--visible)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target, observer);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((el) => {
      if (isInViewport(el)) {
        revealElement(el, observer);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname, locale]);

  return null;
}
