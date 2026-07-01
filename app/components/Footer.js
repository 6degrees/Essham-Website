"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import { assetPath } from "../../lib/assetPath";

export default function Footer() {
  const { messages } = useLanguage();
  const { footer: f } = messages;

  const navLinks = [
    { label: f.home, href: "/" },
    { label: f.services, href: "/services" },
    { label: f.faq, href: "/services#faq" },
    { label: f.bookService, href: "tel:+966570563333" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-newsletter" data-reveal="left">
            <Link href="/" className="footer-logo">
              <Image
                src={assetPath("/essham-logo.png")}
                alt="Essham"
                width={140}
                height={48}
              />
            </Link>
            <p className="footer-newsletter-text">{f.newsletter}</p>
            <div className="footer-subscribe">
              <input type="email" placeholder={f.emailPlaceholder} />
              <button type="button">{f.subscribe}</button>
            </div>
          </div>

          <div className="footer-cta" data-reveal="right" data-reveal-delay={120}>
            <h2 className="footer-cta-title">{f.ctaTitle}</h2>
            <p className="footer-cta-text">{f.ctaText}</p>
            <a href="tel:+966570563333" className="footer-book-btn">
              {f.bookBtn}
              <span className="footer-book-plus" aria-hidden="true">
                +
              </span>
            </a>
          </div>
        </div>

        <div className="footer-nav footer-nav--compact">
          <div className="footer-col" data-reveal data-reveal-delay={0}>
            <h4 className="footer-col-title">{f.navigate}</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("tel:") ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" data-reveal data-reveal-delay={100}>
            <h4 className="footer-col-title">{f.contact}</h4>
            <ul>
              <li>
                <a href="tel:+966570563333">057 056 3333</a>
              </li>
              <li>
                <a href="tel:+966570563333">{f.emergency}</a>
              </li>
            </ul>
            <p className="footer-address">
              {f.addressLine1}
              <br />
              {f.addressLine2}
            </p>
          </div>
        </div>

        <div className="footer-bottom" data-reveal data-reveal-delay={100}>
          <p className="footer-copyright">
            © Essham {new Date().getFullYear()} | {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
