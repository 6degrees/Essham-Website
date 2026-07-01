import Navbar from "../components/Navbar";
import ServicesSidebar from "../components/ServicesSidebar";
import { assetPath } from "../../lib/assetPath";

const services = [
  {
    slug: "management",
    navLabel: "Management & Support",
    title: "Management & Support",
    description:
      "Complete operational oversight for residential buildings — from internal governance and Mullak platform registration to utility billing and round-the-clock resident support.",
    tags: [
      "INTERNAL SYSTEMS",
      "MULLAK PLATFORM",
      "24/7 SUPPORT",
      "UTILITY BILLING",
      "GOVERNANCE",
      "MORE...",
    ],
    footnoteLabel: "Availability",
    footnoteValue: "24/7 Support",
    image: "/hero-bg.jpg",
  },
  {
    slug: "maintenance",
    navLabel: "Maintenance",
    title: "Maintenance",
    description:
      "Preventive and emergency maintenance across every critical system — elevators, HVAC, lighting, CCTV, water tanks, drainage, parking areas, and shared corridors.",
    tags: [
      "ELEVATORS",
      "HVAC",
      "CCTV",
      "LIGHTING",
      "WATER TANKS",
      "PARKING",
      "MORE...",
    ],
    footnoteLabel: "Response Time",
    footnoteValue: "Same-day",
    image: "/maintenance.jpg",
  },
  {
    slug: "cleaning",
    navLabel: "Cleaning",
    title: "Cleaning",
    description:
      "Professional cleaning teams with modern equipment for daily sanitation, waste management, pest control, and periodic deep cleans that keep communities spotless.",
    tags: [
      "DAILY CLEANING",
      "WASTE MANAGEMENT",
      "PEST CONTROL",
      "WATER TANKS",
      "COMMON AREAS",
      "MORE...",
    ],
    footnoteLabel: "Coverage",
    footnoteValue: "Full building",
    image: "/hero-bg.jpg",
    imagePosition: "center 30%",
  },
];

const faqs = [
  {
    q: "What services does Essham specialize in?",
    a: "We provide full facility management for residential buildings — including operations, maintenance, and cleaning across Al Khobar and the Eastern Province.",
  },
  {
    q: "How does your maintenance process work?",
    a: "We run scheduled preventive maintenance across all building systems, with documented inspections and rapid response for urgent issues.",
  },
  {
    q: "Do you provide emergency maintenance support?",
    a: "Yes. Essham offers 24/7 emergency response for critical systems like elevators, HVAC, plumbing, and electrical issues.",
  },
  {
    q: "How can I book a facility management service?",
    a: "Submit a booking request through our form, call 057 056 3333, or visit our Al Khobar office — we confirm every request by phone or text.",
  },
  {
    q: "Do you offer custom annual packages?",
    a: "Absolutely. We build annual service plans around your building's size, systems, and resident requirements.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Essham provides clear scope and pricing upfront — we confirm every detail before work begins.",
  },
  {
    q: "What's included in standard facility management?",
    a: "Operations oversight, resident support, utility billing, maintenance coordination, cleaning schedules, and compliance with community regulations.",
  },
  {
    q: "Do you handle Mullak platform registration?",
    a: "Yes. We assist with Mullak platform setup and ongoing governance for residential communities across Saudi Arabia.",
  },
  {
    q: "Are your teams trained and certified?",
    a: "Our maintenance and cleaning teams are professionally trained, equipped with modern tools, and supervised under strict quality standards.",
  },
  {
    q: "Can I reschedule or cancel my booking?",
    a: "Yes. Contact our team at least 24 hours in advance and we will adjust your service schedule at no extra hassle.",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-wrap services-page">
      <Navbar />

      <section className="services-hero">
        <div className="container">
          <div className="services-hero-top" data-reveal data-reveal-delay={80}>
            <span className="services-pill">
              <span className="services-pill-dot" />
              Services
            </span>
            <span className="services-years">2019–2026</span>
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
            Reliable, professional facility management for residential communities
          </p>

          <div className="services-hero-main" data-reveal data-reveal-delay={240}>
            <h1 className="services-headline">
              No task too big.
              <br />
              No detail too small.
            </h1>
            <a href="tel:+966570563333" className="services-book-btn">
              Booking Request
              <span className="services-book-plus" aria-hidden="true">
                +
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container services-list-layout">
          <ServicesSidebar services={services} />

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
              Frequently Asked Questions
            </span>
            <a href="tel:+966570563333" className="faq-help-link">
              Need Help?
            </a>
          </div>

          <div className="faq-grid">
            {faqs.map((item, index) => (
              <details
                key={item.q}
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
