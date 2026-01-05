import React from "react";
import "./index.css";

const projects = [
  {
    name: "AppTweak",
    category: "Software Development",
    result: "Improved loading time by 80% with a new dashboard",
  },
  {
    name: "Flipped Normals",
    category: "Marketplace Platform",
    result: "Full marketplace migration led to a 4% traffic increase",
  },
  {
    name: "Environmental Intellect",
    category: "Machine Learning",
    result: "Saved over $200k annually in contractor costs",
  },
  {
    name: "TrustPortal",
    category: "Enterprise Platform",
    result: "Built a secure, scalable compliance platform",
  },
  {
    name: "Moloco",
    category: "AdTech Platform",
    result: "Delivered high-performance data-driven systems",
  },
  {
    name: "Farmlink",
    category: "Supply Chain",
    result: "Optimised logistics workflows and reduced delays",
  },
];

export default function WorkPage() {
  return (
    <main className="work">

      {/* ================= HERO ================= */}
      <section className="work-hero">
        <span className="eyebrow">Our Work</span>
        <h1>
          Digital products <br />
          <span>that deliver results</span>
        </h1>
        <p>
          Since our inception, Rinovo has partnered with startups and enterprises
          to design, build, and scale high-impact digital products across
          industries.
        </p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="work-projects">
        <h2>Selected Case Studies</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-content">
                <span className="project-category">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.result}</p>
                <span className="project-link">View Case Study →</span>
              </div>
            </article>
          ))}
        </div>

        <div className="work-more">
          <button className="btn outline">See All Projects</button>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="work-process">
        <h2>How We Deliver Impact</h2>

        <div className="process-grid">
          <div className="process-step">
            <h3>Discover</h3>
            <p>
              Deep understanding of business goals, users, and technical
              constraints.
            </p>
          </div>

          <div className="process-step">
            <h3>Design</h3>
            <p>
              User-centric UX/UI design that balances usability and business
              value.
            </p>
          </div>

          <div className="process-step">
            <h3>Build</h3>
            <p>
              Scalable, secure, and maintainable engineering using modern
              technologies.
            </p>
          </div>

          <div className="process-step">
            <h3>Scale</h3>
            <p>
              Continuous optimisation, monitoring, and iteration to support
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="work-cta">
        <h2>Have a product in mind?</h2>
        <h1>Let’s Build Something Great</h1>
        <p>Response in less than 1 hour</p>

        <div className="cta-actions">
          <button className="btn primary">Start a Project</button>
          <button className="btn outline">Contact Us</button>
        </div>
      </section>

    </main>
  );
}
