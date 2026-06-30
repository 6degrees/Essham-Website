import Link from "next/link";
import Navbar from "./components/Navbar";
import WhatWeDoVideo from "./components/WhatWeDoVideo";
import { assetPath } from "../lib/assetPath";

const stats = [
  {
    value: "230+",
    label: "Properties Managed",
    description:
      "Residential buildings and shared properties managed with full operational oversight.",
  },
  {
    value: "10+",
    label: "Years of Experience",
    description:
      "Years of professional facility management experience you can rely on.",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description:
      "Customer satisfaction across the communities we serve every day.",
  },
];

const features = [
  {
    title: "Clear, upfront operations",
    description:
      "Eliminate the guesswork with honest, transparent service plans. We provide detailed scope with no hidden fees.",
    icon: "pricing",
  },
  {
    title: "Residential & community solutions",
    description:
      "From shared residential buildings to full facility portfolios, we offer versatile management tailored to your property.",
    icon: "buildings",
  },
  {
    title: "24/7 emergency support",
    description:
      "We value your residents' safety. Our trained teams respond around the clock for mandatory and emergency services.",
    icon: "clock",
  },
];

export default function HomePage() {
  return (
    <div className="site-wrap">
      <Navbar />

      <section className="hero">
        <div className="hero-bg">
          <img src={assetPath("/hero-bg.jpg")} alt="" aria-hidden="true" />
        </div>
        <div className="hero-overlay" />

        <div className="container hero-inner">
          <p className="hero-tagline">
            <svg
              className="hero-tagline-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
            </svg>
            Professional management, maintenance, and cleaning for residential
            buildings across Saudi Arabia.
          </p>

          <h1 className="hero-title">
            Elevate your
            <br />
            space with expert
            <br />
            management.
          </h1>

          <div className="hero-bottom">
            <div className="hero-rating hero-rating--left">
              <span className="hero-rating-dot hero-rating-dot--orange" />
              4.9 Client Rating
            </div>

            <div className="hero-cards">
              <a href="tel:+966570563333" className="hero-talk-card">
                <div className="hero-talk-avatar">E</div>
                <div className="hero-talk-text">
                  <span className="hero-talk-label">Let&apos;s Talk</span>
                  <strong>Essham Team</strong>
                  <span>Client Support</span>
                </div>
                <span className="hero-talk-arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <Link href="/services" className="hero-services-card">
                <span>See All Services</span>
                <span className="hero-services-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>

            <div className="hero-rating hero-rating--right">
              <span className="hero-rating-dot hero-rating-dot--green" />
              30+ Services
            </div>
          </div>
        </div>

        <div className="hero-info-bar">
          <span>057 056 3333</span>
          <span>Al Khobar, Corniche Park — Prince Turki St, Office 3</span>
          <a href="tel:+966570563333" className="hero-info-cta" aria-label="Call Essham">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid">
          <aside className="about-sidebar">
            <span className="about-badge">
              <span className="about-badge-dot" />
              About Us
            </span>
            <p className="about-years">2019–2026</p>
            <div className="about-avatars" aria-hidden="true">
              <span className="about-avatar about-avatar--1">E</span>
              <span className="about-avatar about-avatar--2">S</span>
              <span className="about-avatar about-avatar--3">H</span>
            </div>
            <p className="about-team-text">
              Professional &amp; verified facility management experts.
            </p>
            <Link href="/services" className="about-cta-btn">
              Learn About Us
              <span aria-hidden="true">+</span>
            </Link>
          </aside>

          <div className="about-main">
            <span className="about-tag">#Facility Management</span>
            <h2 className="about-statement">
              Bringing quality and comfort back to your buildings. Delivering
              exceptional management, maintenance, and cleaning with care,
              precision, and trust.{" "}
              <span className="about-statement-muted">
                No shortcuts. No surface-level service. Just results!
              </span>
            </h2>
            <div className="about-stats">
              {stats.map((item) => (
                <article className="about-stat-card" key={item.label}>
                  <p className="about-stat-label">{item.label}</p>
                  <div className="about-stat-body">
                    <p className="about-stat-value">{item.value}</p>
                    <p className="about-stat-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="whatwedo-section">
        <div className="container">
          <div className="whatwedo-header">
            <div className="whatwedo-header-text">
              <span className="whatwedo-badge">
                <span className="whatwedo-badge-dot" />
                What We Do
              </span>
              <h2>
                We don&apos;t just maintain, we care for your buildings and
                residents.
              </h2>
            </div>
            <Link href="/services" className="whatwedo-cta-btn">
              Learn About Us
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="whatwedo-grid">
            <WhatWeDoVideo />

            <div className="whatwedo-content">
              <p className="whatwedo-intro">
                From elevators and HVAC to corridors and common areas, our
                detailed management approach covers every corner. We use
                professional standards and sustainable facility practices.
              </p>
              <ul className="whatwedo-features">
                {features.map((item) => (
                  <li key={item.title} className="whatwedo-feature">
                    <span className="whatwedo-feature-icon" aria-hidden="true">
                      {item.icon === "pricing" && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      )}
                      {item.icon === "buildings" && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                        </svg>
                      )}
                      {item.icon === "clock" && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section light">
        <div className="container contact-box">
          <div>
            <p className="eyebrow dark">Contact</p>
            <h2>Book a trusted, professional Essham team.</h2>
            <p>
              Kingdom of Saudi Arabia - Al Khobar - Corniche Park, Prince Turki
              Street, Al-Kafa&apos;ah Center, Office 3
            </p>
          </div>
          <div className="contact-actions">
            <a href="tel:+966570563333" className="btn btn-accent">
              Call Now
            </a>
            <Link href="/services" className="btn btn-dark">
              View Service Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
