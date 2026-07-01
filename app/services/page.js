"use client";

import Navbar from "../components/Navbar";
import ServicesSidebar from "../components/ServicesSidebar";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import { assetPath } from "../../lib/assetPath";

export default function ServicesPage() {
  const { messages } = useLanguage();
  const { servicesPage: sp } = messages;
  const services = sp.services;
  const faqs = sp.faqs;

  return (
    <div className="site-wrap services-page">
      <Navbar />

      <section className="services-hero">
        <div className="services-hero-bg">
          <img src={assetPath("/services-hero.png")} alt="" aria-hidden="true" />
        </div>
        <div className="services-hero-overlay" />

        <div className="container services-hero-inner">
          <div className="services-hero-top" data-reveal data-reveal-delay={80}>
            <span className="services-pill">
              <span className="services-pill-dot" />
              {sp.badge}
            </span>
          </div>

          <p className="services-tagline" data-reveal data-reveal-delay={160}>
            <svg
              className="services-tagline-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
            {sp.tagline}
          </p>

          <div className="services-hero-main" data-reveal data-reveal-delay={240}>
            <h1 className="services-headline">
              {sp.headlineLine1}
              <br />
              {sp.headlineLine2}
            </h1>
            <a href="tel:+966570563333" className="services-book-btn">
              {sp.booking}
              <span className="services-book-plus" aria-hidden="true">
                +
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container services-list-layout">
          <ServicesSidebar services={services} jumpLabel={sp.jumpTo} />

          <div className="services-list">
            {services.map((service, index) => (
              <article
                className="service-card"
                id={service.slug}
                key={service.slug}
                data-reveal
                data-reveal-delay={index * 120}
              >
                <div className="service-card-body">
                  <h2 className="service-card-title">{service.title}</h2>
                  <div className="service-card-content">
                    <p className="service-card-desc">{service.description}</p>
                    <div className="service-card-tags">
                      {service.tags.map((tag) => (
                        <span className="service-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="service-card-foot">
                    <span className="service-card-foot-label">{service.footnoteLabel}</span>
                    <span className="service-card-foot-value">{service.footnoteValue}</span>
                  </div>
                </div>
                <div className="service-card-media">
                  <img
                    src={assetPath(service.image)}
                    alt={service.title}
                    style={
                      service.imagePosition
                        ? { objectPosition: service.imagePosition }
                        : undefined
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header" data-reveal>
            <span className="faq-pill">
              <span className="faq-pill-dot" />
              {sp.faqBadge}
            </span>
            <a href="tel:+966570563333" className="faq-help-link">
              {sp.needHelp}
            </a>
          </div>

          <div className="faq-grid">
            {faqs.map((item, index) => (
              <details
                key={`faq-${index}`}
                className="faq-item"
                data-reveal
                data-reveal-delay={(index % 5) * 80}
              >
                <summary>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                  {item.q}
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
