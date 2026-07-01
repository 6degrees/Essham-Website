import { assetPath } from "../../lib/assetPath";

const partners = [
  {
    name: "Promotion Efficiency",
    src: "/partners/promotion-efficiency.png",
  },
  {
    name: "Efficiency Center",
    src: "/partners/efficiency-center.png",
  },
  {
    name: "6degrees",
    src: "/partners/6degrees.png",
  },
  {
    name: "RAWAS",
    src: "/partners/rawas.png",
    size: "lg",
  },
];

function PartnerGroup({ suffix, hidden = false }) {
  return (
    <ul className="partner-marquee-group" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <li
          className={`partner-marquee-item${partner.size ? ` partner-marquee-item--${partner.size}` : ""}`}
          key={`${partner.name}-${suffix}`}
        >
          <img src={assetPath(partner.src)} alt={hidden ? "" : partner.name} loading="lazy" />
        </li>
      ))}
    </ul>
  );
}

export default function PartnerMarquee({ title }) {
  return (
    <section className="partner-marquee" aria-labelledby="partner-marquee-title">
      <div className="container partner-marquee-inner">
        <div className="partner-marquee-header">
          <h2 className="partner-marquee-title" id="partner-marquee-title">
            <span className="partner-marquee-pill">
              <span className="partner-marquee-pill-dot" />
              {title}
            </span>
          </h2>
        </div>

        <div className="partner-marquee-mask">
          <div className="partner-marquee-track">
            <PartnerGroup suffix="a" />
            <PartnerGroup suffix="b" hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
