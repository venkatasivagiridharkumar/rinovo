import {
  FaLightbulb,
  FaPencilRuler,
  FaRobot,
  FaUsers,
  FaBrain,
  FaRocket,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import "./index.css";

export default function ServicesSection() {
  return (
    <section className="services-section">
      {/* INTRO */}
      <div className="services-intro">
        <h2>Seamless Technology</h2>
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
        <ServiceCard
          icon={<FaLightbulb />}
          title="Digital Strategy & Product Definition"
          subtitle="Digital Transformation"
          desc="High-level strategic guidance and a rigorous Scoping Session to clarify your vision, define the optimal product, and reduce development risk before any code is written."
        />

        <ServiceCard
          icon={<FaPencilRuler />}
          title="Digital Product Design"
          desc="Our UX/UI Design process guarantees the final product is intuitive, engaging, and perfectly tailored to user requirements."
        />

        <ServiceCard
          icon={<FaRobot />}
          title="AI-First Software Engineering"
          subtitle="AI-Enabled Custom Development"
          desc="End-to-end AI-First Software Engineering delivering scalable web and mobile solutions with integrated intelligence."
        />

        <ServiceCard
          icon={<FaUsers />}
          title="Elite Engineering Teams"
          desc="Access a top-tier Nearshore team made up of the top 1% of engineering talent to strengthen your in-house teams."
        />

        <ServiceCard
          icon={<FaBrain />}
          title="Applied AI & Machine Learning"
          desc="We develop AI POCs, Machine Learning models, and robust Data Engineering solutions for a competitive edge."
        />

        <ServiceCard
          icon={<FaRocket />}
          title="Digital Acceleration Programs"
          subtitle="Optimisation & Acceleration"
          desc="Rapid, iterative development using a reframed MVP approach to reduce time-to-market."
        />

        <ServiceCard
          icon={<FaSearch />}
          title="Technical & UX Audit"
          desc="Code and UX Audits to uncover technical debt, diagnose performance bottlenecks, and deliver a clear remediation roadmap."
        />
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ icon, title, subtitle, desc }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>

      <h3>{title}</h3>
      {subtitle && <span className="subtitle">{subtitle}</span>}

      <p>{desc}</p>

      <button className="explore-btn">
        Explore <FaArrowRight />
      </button>
    </div>
  );
}
