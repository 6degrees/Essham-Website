"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import { assetPath } from "../../lib/assetPath";

function isHeroVisible() {
  const hero = document.querySelector(".hero, .services-hero");
  if (!hero) return false;
  return hero.getBoundingClientRect().bottom > 80;
}

export default function Navbar() {
  const pathname = usePathname();
  const { messages } = useLanguage();
  const { nav } = messages;
  const isHome = pathname === "/";
  const isServices = pathname === "/services";
  const [pastHero, setPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrolled = pastHero;

  useEffect(() => {
    const hero = document.querySelector(".hero, .services-hero");

    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => setPastHero(!entry.isIntersecting),
          { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
        )
      : null;

    if (hero && heroObserver) {
      heroObserver.observe(hero);
    } else {
      setPastHero(true);
    }

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (isHeroVisible() || currentY < 24) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      const scrollingDown = currentY > lastScrollY.current + 4;
      const scrollingUp = currentY < lastScrollY.current - 4;

      if (scrollingDown) {
        setHidden(true);
      } else if (scrollingUp) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      heroObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <header
      className={`topbar${scrolled ? " topbar--scrolled" : ""}${hidden ? " topbar--hidden" : ""}`}
      data-reveal="fade"
      data-reveal-delay={0}
    >
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image
            src={assetPath("/essham-logo.png")}
            alt={nav.logoAlt}
            width={160}
            height={56}
            className="brand-logo"
            priority
          />
        </Link>
        <div className="nav-shell">
          <LanguageToggle />
          <nav className="nav-pill">
            <Link href="/" className={isHome ? "active" : ""}>
              {isHome && <span className="nav-dot" />}
              {nav.home}
            </Link>
            <Link href="/services" className={isServices ? "active" : ""}>
              {isServices && <span className="nav-dot" />}
              {nav.services}
            </Link>
          </nav>
          <Link className="btn btn-nav-primary" href={isServices ? "tel:+966570563333" : "/services"}>
            {nav.getStarted}
          </Link>
        </div>
      </div>
    </header>
  );
}
