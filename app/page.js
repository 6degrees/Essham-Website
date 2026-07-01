"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import WhatWeDoVideo from "./components/WhatWeDoVideo";
import { useLanguage } from "../lib/i18n/LanguageProvider";
import { assetPath } from "../lib/assetPath";

const highlightIcons = [
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
  <svg key="building" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
  </svg>,
  <svg key="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>,
];

const featureIcons = {
  pricing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  buildings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

const featureIconKeys = ["pricing", "buildings", "clock"];

export default function HomePage() {
  const { messages } = useLanguage();
  const { hero, about, whatWeDo, contact } = messages;

  return (
    <div className="site-wrap">
      <Navbar />

      <section className="hero">
        <div className="hero-bg">
          <img src={assetPath("/hero-home.png")} alt="" aria-hidden="true" />
        </div>
        <div className="hero-overlay" />

        <div className="container hero-inner">
          <p className="hero-tagline" data-reveal data-reveal-delay={80}>
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
            {hero.tagline}
          </p>

          <h1 className="hero-title" data-reveal data-reveal-delay={160}>
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            <br />
            {hero.titleLine3}
          </h1>

          <div className="hero-ratings" data-reveal data-reveal-delay={240}>
            <div className="hero-rating">
              <span className="hero-rating-dot hero-rating-dot--orange" />
              {hero.rating1}
            </div>
            <div className="hero-rating">
              <span className="hero-rating-dot hero-rating-dot--green" />
              {hero.rating2}
            </div>
          </div>
        </div>

        <div className="hero-info-bar" data-reveal data-reveal-delay={480}>
          <span className="hero-info-location">{hero.location}</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid">
          <aside className="about-sidebar" data-reveal="left">
            <span className="about-badge">
              <span className="about-badge-dot" />
              {about.badge}
            </span>
            <ul className="about-highlights" aria-label={about.highlightsLabel}>
              {about.highlights.map((label, index) => (
                <li className="about-highlight" key={`highlight-${index}`}>
                  <span className="about-highlight-icon" aria-hidden="true">
                    {highlightIcons[index]}
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <p className="about-team-text">{about.teamText}</p>
            <Link href="/services" className="about-cta-btn">
              {about.cta}
              <span aria-hidden="true">+</span>
            </Link>
          </aside>

          <div className="about-main" data-reveal="right" data-reveal-delay={100}>
            <span className="about-tag">{about.tag}</span>
            <h2 className="about-statement">
              {about.statement}{" "}
              <span className="about-statement-muted">{about.statementMuted}</span>
            </h2>
            <div className="about-stats">
              {about.stats.map((item, index) => (
                <article
                  className="about-stat-card"
                  key={`stat-${index}`}
                  data-reveal
                  data-reveal-delay={index * 120}
                >
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
          <div className="whatwedo-header" data-reveal>
            <div className="whatwedo-header-text">
              <span className="whatwedo-badge">
                <span className="whatwedo-badge-dot" />
                {whatWeDo.badge}
              </span>
              <h2>{whatWeDo.title}</h2>
            </div>
            <Link href="/services" className="whatwedo-cta-btn">
              {whatWeDo.cta}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="whatwedo-grid">
            <div data-reveal="left" data-reveal-delay={100}>
              <WhatWeDoVideo />
            </div>

            <div className="whatwedo-content" data-reveal="right" data-reveal-delay={200}>
              <p className="whatwedo-intro">{whatWeDo.intro}</p>
              <ul className="whatwedo-features">
                {whatWeDo.features.map((item, index) => (
                  <li
                    key={`feature-${index}`}
                    className="whatwedo-feature"
                    data-reveal
                    data-reveal-delay={index * 100}
                  >
                    <span className="whatwedo-feature-icon" aria-hidden="true">
                      {featureIcons[featureIconKeys[index]]}
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

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card" data-reveal="scale">
            <div className="contact-card-copy">
              <span className="contact-pill">
                <span className="contact-pill-dot" />
                {contact.badge}
              </span>
              <h2 className="contact-title">{contact.title}</h2>
              <ul className="contact-details">
                <li className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-detail-label">{contact.callLabel}</span>
                    <a href="tel:+966570563333">057 056 3333</a>
                  </div>
                </li>
                <li className="contact-detail">
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-detail-label">{contact.visitLabel}</span>
                    <p>{contact.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-card-actions">
              <a href="tel:+966570563333" className="contact-primary-btn">
                {contact.callNow}
                <span className="icon-flip" aria-hidden="true">
                  →
                </span>
              </a>
              <Link href="/services" className="contact-secondary-btn">
                {contact.viewPlans}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
