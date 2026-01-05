import React from "react";
import "./index.css";

export default function AboutPage() {
  return (
    <main className="about">

      <section className="about-hero">
        <span className="eyebrow">About Rinovo</span>
        <h1>
          Building <span>Seamless Technology</span>
        </h1>
        <p>
          Rinovo is a software solutions company delivering scalable, secure,
          and future-ready digital products for startups and enterprises
          worldwide.
        </p>
      </section>
      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            We provide Seamless Digital Acceleration by boosting engineering
            and design capabilities, improving processes, and delivering
            end-to-end digital products.
          </p>
          <p className="highlight">
            That is what we call seamless technology.
          </p>
        </div>

        <div className="mission-stats">
          <div>
            <h3>10+</h3>
            <p>Industries Served</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Client-Focused Delivery</p>
          </div>
          <div>
            <h3>Top 1%</h3>
            <p>Engineering Talent</p>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="about-how">
        <h2>How We Work</h2>

        <div className="how-grid">
          <div className="how-card">
            <h3>Digital Strategy & Product Definition</h3>
            <p>
              High-level strategic guidance and a rigorous Scoping Session to
              clarify your vision, define the optimal product, and reduce
              development risk before any code is written.
            </p>
          </div>

          <div className="how-card">
            <h3>Design-Driven Development</h3>
            <p>
              Our UX/UI Design process guarantees intuitive, engaging, and
              perfectly tailored digital products that users love.
            </p>
          </div>

          <div className="how-card">
            <h3>AI-First Engineering</h3>
            <p>
              End-to-end AI-First Software Engineering delivering scalable web
              and mobile solutions with integrated intelligence.
            </p>
          </div>

          <div className="how-card">
            <h3>Elite Engineering Teams</h3>
            <p>
              Access a top-tier Nearshore team made up of the top 1% of
              engineering talent to strengthen your in-house teams.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLOUD ================= */}
      <section className="about-cloud">
        <h2>
          Azure & Open <span>Source Ready</span>
        </h2>

        <p>
          We develop software on Microsoft Azure, AWS, Google Cloud, and
          open-source platforms. This flexibility allows us to adapt to each
          client’s needs.
        </p>

        <div className="cloud-list">
          <span>Azure</span>
          <span>AWS</span>
          <span>Google Cloud</span>
          <span>Open Source</span>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="about-industries">
        <span className="eyebrow">We help reimagine</span>
        <h2>Industries</h2>

        <div className="industry-grid">
          {[
            "HealthTech",
            "PropTech",
            "Retail",
            "FinTech",
            "LegalTech",
            "Manufacturing",
          ].map((industry) => (
            <div className="industry-card" key={industry}>
              <h3>{industry}</h3>
              <p>
                We build robust, scalable, and secure digital solutions tailored
                to industry-specific challenges.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="about-trust">
        <h2>Trusted by Leading Companies</h2>

        <div className="trust-grid">
          {[
            "NEOM","BNP PARIBAS","ADVANIA","RE/MAX","EUROFOUND",
            "THERMOFISHER","EY","NOKIA","SAGE","APPTWEAK",
            "TRUSTPORTAL","EI EVERYWHERE","MINICLIP","MOLOCO",
            "FLIPPED NORMALS","FARMLINK","ANOVA","ELSA","OBÉ",
            "ENDIPREV","TRAVELWIFI","CTT","LISBOA",
            "BANCO MONTEPIO","LABIALFARMA","TAP",
          ].map((brand) => (
            <span className="brand" key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <h2>New project in mind?</h2>
        <h1>Let’s Talk</h1>
        <p>Response in less than 1 hour</p>

        <div className="cta-actions">
          <button className="btn primary">Start a Project</button>
          <button className="btn outline">Contact Us</button>
        </div>
      </section>

    </main>
  );
}
