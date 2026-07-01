"use client";

import { useEffect, useState } from "react";

export default function ServicesSidebar({ services, jumpLabel }) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");

  useEffect(() => {
    setActiveSlug(services[0]?.slug ?? "");
  }, [services]);

  useEffect(() => {
    const cards = services
      .map((service) => document.getElementById(service.slug))
      .filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -45% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [services]);

  const scrollToService = (slug) => {
    const target = document.getElementById(slug);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSlug(slug);
  };

  return (
    <>
      <aside className="services-sidebar" data-reveal="left">
        <nav aria-label={jumpLabel}>
          <ul className="services-sidebar-list">
            {services.map((service, index) => {
              const isActive = activeSlug === service.slug;

              return (
                <li key={service.slug}>
                  <button
                    type="button"
                    className={`services-sidebar-item${isActive ? " services-sidebar-item--active" : ""}`}
                    onClick={() => scrollToService(service.slug)}
                  >
                    <span className="services-sidebar-index">{index + 1}/</span>
                    <span className="services-sidebar-label">{service.navLabel}</span>
                    {isActive && (
                      <span className="services-sidebar-arrow icon-flip" aria-hidden="true">
                        →
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div className="services-mobile-jump" data-reveal>
        <label className="services-mobile-jump-label" htmlFor="services-jump">
          {jumpLabel}
        </label>
        <div className="services-mobile-jump-field">
          <select
            id="services-jump"
            className="services-mobile-jump-select"
            value={activeSlug}
            onChange={(event) => scrollToService(event.target.value)}
          >
            {services.map((service, index) => (
              <option key={service.slug} value={service.slug}>
                {index + 1}. {service.navLabel}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
