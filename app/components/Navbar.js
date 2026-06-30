"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assetPath } from "../../lib/assetPath";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices = pathname === "/services";
  const forceScrolled = pathname === "/services";
  const [scrolled, setScrolled] = useState(forceScrolled);

  useEffect(() => {
    const hero = document.querySelector(".hero, .services-hero");
    if (!hero) {
      setScrolled(true);
      return;
    }

    if (forceScrolled) {
      setScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname, forceScrolled]);

  return (
    <header className={`topbar${scrolled ? " topbar--scrolled" : ""}`}>
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image
            src={assetPath("/essham-logo.png")}
            alt="Essham — Facilities and Residential Buildings Management"
            width={160}
            height={56}
            className="brand-logo"
            priority
          />
        </Link>
        <div className="nav-shell">
          <nav className="nav-pill">
            <Link href="/" className={isHome ? "active" : ""}>
              {isHome && <span className="nav-dot" />}
              Home
            </Link>
            <Link href={isHome ? "#about" : "/#about"}>About</Link>
            <Link href="/services" className={isServices ? "active" : ""}>
              {isServices && <span className="nav-dot" />}
              Services
            </Link>
            <Link href={isServices ? "#book" : "/services#book"}>Contact</Link>
          </nav>
          <Link className="btn btn-nav-primary" href={isServices ? "tel:+966570563333" : "/services"}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
