"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices = pathname === "/services";

  return (
    <header className="topbar">
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image
            src="/essham-logo.png"
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
            <a href={isHome ? "#about" : "/#about"}>About</a>
            <Link href="/services" className={isServices ? "active" : ""}>
              {isServices && <span className="nav-dot" />}
              Services
            </Link>
            <a href={isServices ? "#book" : "/services#book"}>Contact</a>
          </nav>
          <Link className="btn btn-nav-primary" href={isServices ? "tel:+966570563333" : "/services"}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
