import React from "react";
import "./index.css";

const services = [
  {
    title: "Digital Strategy & Product Definition",
    tag: "Digital Transformation",
    desc:
      "High-level strategic guidance and a rigorous Scoping Session to clarify your vision, define the optimal product, and reduce development risk before any code is written.",
    image: "/services/strategy.jpg",
  },
  {
    title: "Digital Product Design",
    tag: "UX / UI Design",
    desc:
      "Our UX/UI Design process guarantees intuitive, engaging, and perfectly tailored products that maximise adoption and business value.",
    image: "/services/design.jpg",
  },
  {
    title: "AI-First Software Engineering",
    tag: "AI-Enabled Custom Development",
    desc:
      "End-to-end AI-First Software Engineering delivering scalable web and mobile solutions with integrated intelligence.",
    image: "/services/ai.jpg",
  },
  {
    title: "Elite Engineering Teams",
    tag: "Top 1% Talent",
    desc:
      "Access a top-tier Nearshore team made up of the top 1% of engineering talent to strengthen your in-house teams.",
    image: "/services/teams.jpg",
  },
  {
    title: "Applied AI & Machine Learning",
    tag: "Data & ML",
    desc:
      "We develop AI POCs, bespoke Machine Learning models, and robust Data Engineering solutions for a true competitive edge.",
    image: "/services/ml.jpg",
  },
  {
    title: "Digital Acceleration Programs",
    tag: "Optimisation & Acceleration",
    desc:
      "Rapid, iterative development using a reframed MVP approach to validate assumptions and reduce time-to-market.",
    image: "/services/acceleration.jpg",
  },
  {
    title: "Technical & UX Audit",
    tag: "Code Quality",
    desc:
      "In-depth Code and UX Audits to uncover technical debt, diagnose bottlenecks, and deliver a clear remediation roadmap.",
    image: "/services/audit.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      {/* HEADER */}
      <div className="services-header">
        <span className="eyebrow">Seamless Technology</span>
        <h2>
          Services built to scale <br />
          <span>your business</span>
        </h2>

        <p>
          We offer custom development that follows fast, reliable, and
          technical debt-free processes to ensure companies can scale without
          technology getting in the way.
        </p>

        <p className="highlight">
          That is what we call seamless technology.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">
        {services.map((s) => (
          <article className="service-card" key={s.title}>
            <div
              className="service-image"
              style={{ backgroundImage: `url(${s.image})` }}
            />

            <div className="service-content">
              <span className="service-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <button className="service-link">
                Explore <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
