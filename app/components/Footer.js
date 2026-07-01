import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../../lib/assetPath";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/services#faq" },
  { label: "Book Service", href: "tel:+966570563333" },
];

export default function Footer() {
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
            <p className="footer-newsletter-text">
              Stay up-to-date with our newsletter. No spam, just good stuff.
              Right to your inbox!
            </p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter email address..." />
              <button type="button">Subscribe Now</button>
            </div>
          </div>

          <div className="footer-cta" data-reveal="right" data-reveal-delay={120}>
            <h2 className="footer-cta-title">
              Reliable facility management for residential communities.
            </h2>
            <p className="footer-cta-text">
              Book a trusted Essham team who shows up, cares, and keeps your
              property running smoothly.
            </p>
            <a href="tel:+966570563333" className="footer-book-btn">
              Submit Booking Request
              <span className="footer-book-plus" aria-hidden="true">
                +
              </span>
            </a>
          </div>
        </div>

        <div className="footer-nav footer-nav--compact">
          <div className="footer-col" data-reveal data-reveal-delay={0}>
            <h4 className="footer-col-title">Navigate</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
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
            <h4 className="footer-col-title">Contact</h4>
            <ul>
              <li>
                <a href="tel:+966570563333">057 056 3333</a>
              </li>
              <li>
                <a href="tel:+966570563333">Emergency Support</a>
              </li>
            </ul>
            <p className="footer-address">
              Al Khobar, Corniche Park,
              <br />
              Prince Turki St, Al-Kafa&apos;ah Center, Office 3
            </p>
          </div>
        </div>

        <div className="footer-bottom" data-reveal data-reveal-delay={100}>
          <p className="footer-copyright">
            © Essham {new Date().getFullYear()} | Facilities & Residential Buildings
            Management
          </p>
        </div>
      </div>
    </footer>
  );
}
