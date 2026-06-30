import Link from "next/link";
import Navbar from "../components/Navbar";
import { assetPath } from "../../lib/assetPath";

const services = [
  {
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
    image: "/hero-bg.jpg",
  },
  {
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
    image: "/maintenance.jpg",
  },
  {
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
          <div className="services-hero-top">
            <span className="services-pill">
              <span className="services-pill-dot" />
              Services
            </span>
            <span className="services-years">2019–2026</span>
          </div>

          <p className="services-tagline">
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

          <div className="services-hero-main">
            <h1 className="services-headline">
              No task too big.
              <br />
              No detail too small.
            </h1>
            <Link href="#book" className="services-book-btn">
              Booking Request
              <span className="services-book-plus" aria-hidden="true">
                +
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container services-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
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
      </section>

      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header">
            <span className="faq-pill">
              <span className="faq-pill-dot" />
              Frequently Asked Questions
            </span>
            <Link href="#book" className="faq-help-link">
              Need Help?
            </Link>
          </div>

          <div className="faq-grid">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
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

      <section id="book" className="book-section">
        <div className="book-section-bg" aria-hidden="true">
          <img src={assetPath("/maintenance.jpg")} alt="" />
        </div>
        <div className="book-section-overlay" />

        <div className="container book-section-inner">
          <div className="book-section-copy">
            <span className="book-pill">
              <span className="book-pill-dot" />
              Book Service
            </span>

            <h2 className="book-headline">
              Book a trusted facility management team{" "}
              <span className="book-headline-muted">who actually shows up.</span>
            </h2>

            <div className="book-ratings">
              <span className="book-rating-pill">
                <span className="book-rating-dot book-rating-dot--orange" />
                4.9 Client Rating
              </span>
              <span className="book-rating-pill">
                <span className="book-rating-dot book-rating-dot--green" />
                230+ Properties
              </span>
            </div>

            <div className="book-info-bar">
              <span>057 056 3333</span>
              <span>Al Khobar, Corniche Park — Prince Turki St, Office 3</span>
            </div>
          </div>

          <form className="book-glass-form">
            <div className="book-form-group">
              <p className="book-form-label">Contact Details</p>
              <div className="book-form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="book-form-group">
              <p className="book-form-label">Email Address</p>
              <div className="book-form-row">
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className="book-form-group">
              <p className="book-form-label">Service Details</p>
              <div className="book-form-row">
                <select defaultValue="">
                  <option value="" disabled>
                    Service Type
                  </option>
                  <option>Management & Support</option>
                  <option>Maintenance</option>
                  <option>Cleaning</option>
                </select>
                <input type="text" placeholder="Number of Units" />
              </div>
            </div>

            <div className="book-form-group">
              <p className="book-form-label">Notes</p>
              <textarea placeholder="Optional" rows={3} />
            </div>

            <p className="book-disclaimer">
              We confirm every request by phone or text. No hidden fees — ever.
            </p>

            <button type="button" className="book-submit-btn">
              Submit Booking Request
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
