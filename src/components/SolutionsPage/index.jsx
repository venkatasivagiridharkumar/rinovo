import React from "react";
import "./index.css";

export default function SolutionsPage() {
  return (
    <main className="solutions">

      <section className="solutions-hero">
        <span className="eyebrow">Solutions</span>
        <h1>
          Digital solutions <br />
          <span>built to scale</span>
        </h1>
        <p>
          Rinovo delivers end-to-end digital solutions that help businesses
          modernise, scale faster, and stay competitive in a rapidly evolving
          digital landscape.
        </p>
      </section>

      <section className="solution-pillars">
        <div className="pillar">
          <h3>Digital Transformation</h3>
          <p>
            Modernise legacy systems, optimise processes, and unlock new
            business models through strategic digital transformation.
          </p>
        </div>

        <div className="pillar">
          <h3>Product Innovation</h3>
          <p>
            Design and build user-centric digital products that deliver
            measurable business value and high adoption.
          </p>
        </div>

        <div className="pillar">
          <h3>AI-Driven Solutions</h3>
          <p>
            Leverage Artificial Intelligence and Machine Learning to automate,
            predict, and optimise critical business operations.
          </p>
        </div>

        <div className="pillar">
          <h3>Scalable Engineering</h3>
          <p>
            Build secure, cloud-native, and scalable platforms designed for
            long-term growth and resilience.
          </p>
        </div>
      </section>

      {/* ================= SOLUTION AREAS ================= */}
      <section className="solution-areas">
        <h2>What We Solve</h2>

        <div className="areas-grid">
          <SolutionCard
            title="Enterprise Platforms"
            desc="Robust internal systems, dashboards, and platforms that support complex business workflows."
          />

          <SolutionCard
            title="Customer-Facing Applications"
            desc="High-performance web and mobile applications that deliver seamless user experiences."
          />

          <SolutionCard
            title="Data & Analytics"
            desc="End-to-end data pipelines, analytics dashboards, and intelligence platforms."
          />

          <SolutionCard
            title="AI & Automation"
            desc="AI-powered automation, predictive systems, and intelligent decision-making tools."
          />

          <SolutionCard
            title="Cloud & DevOps"
            desc="Cloud migration, infrastructure optimisation, and DevOps pipelines on AWS, Azure, and GCP."
          />

          <SolutionCard
            title="Security & Compliance"
            desc="Secure-by-design architectures with compliance baked into every layer."
          />
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="solution-industries">
        <span className="eyebrow">Industry-focused solutions</span>
        <h2>Built for Complex Industries</h2>

        <div className="industry-grid">
          {[
            "FinTech",
            "HealthTech",
            "Retail",
            "PropTech",
            "LegalTech",
            "Manufacturing",
          ].map((industry) => (
            <div className="industry-card" key={industry}>
              <h3>{industry}</h3>
              <p>
                Tailored digital solutions designed to solve real-world
                challenges in {industry}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="solution-tech">
        <h2>
          Technology that <span>powers scale</span>
        </h2>

        <p>
          We build solutions using modern, proven technologies across cloud,
          web, mobile, and AI ecosystems.
        </p>

        <div className="tech-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Google Cloud</span>
          <span>AI / ML</span>
          <span>DevOps</span>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="solutions-cta">
        <h2>Have a challenge to solve?</h2>
        <h1>Let’s Build the Right Solution</h1>
        <p>Response in less than 1 hour</p>

        <div className="cta-actions">
          <button className="btn primary">Start a Project</button>
          <button className="btn outline">Contact Us</button>
        </div>
      </section>

    </main>
  );
}

/* ---------- Helper ---------- */
function SolutionCard({ title, desc }) {
  return (
    <div className="solution-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="link">Explore →</span>
    </div>
  );
}
