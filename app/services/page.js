import Navbar from "../components/Navbar";

const serviceGroups = [
  {
    title: "Management & Support",
    items: [
      "Internal system setup and governance",
      "Mullak platform registration",
      "24/7 customer support",
      "Utility and billing management",
    ],
  },
  {
    title: "Maintenance",
    items: [
      "Elevators, intercoms, and automatic doors",
      "Lighting, safety devices, and CCTV",
      "HVAC, water tanks, and drainage",
      "Parking, corridors, and external areas",
    ],
  },
  {
    title: "Cleaning",
    items: [
      "Trained cleaning teams and modern equipment",
      "Waste movement and sanitation",
      "Pest control (scheduled)",
      "Water tank cleaning and quality checks",
    ],
  },
];

const faqs = [
  "What services does Essham specialize in?",
  "How does your cleaning process work?",
  "Do you provide emergency maintenance support?",
  "Can I request a custom annual package?",
];

export default function ServicesPage() {
  return (
    <div className="site-wrap">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Elevated facility services for residential communities.</h1>
        </div>
      </section>

      <section className="section light">
        <div className="container cards-grid">
          {serviceGroups.map((group) => (
            <article className="service-panel" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="container faq-wrap">
          <div className="section-head left">
            <p className="eyebrow">FAQ</p>
            <h2>Simple and transparent process.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((q) => (
              <details key={q} className="faq-item">
                <summary>{q}</summary>
                <p>
                  Essham team will confirm scope, timing, and service details with
                  clear communication and no hidden steps.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="section light">
        <div className="container booking">
          <div>
            <p className="eyebrow dark">Book Service</p>
            <h2>Send your request and we will call you back.</h2>
            <p>We confirm every request by phone or text. No hidden fees.</p>
          </div>
          <form className="book-form">
            <input placeholder="Full Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Email Address" />
            <select defaultValue="">
              <option value="" disabled>
                Service Type
              </option>
              <option>Management & Support</option>
              <option>Maintenance</option>
              <option>Cleaning</option>
            </select>
            <textarea placeholder="Property details" rows={4} />
            <button type="button" className="btn btn-accent">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
