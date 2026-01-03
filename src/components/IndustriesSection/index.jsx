import {
  FaHeartbeat,
  FaCity,
  FaShoppingBag,
  FaCoins,
  FaGavel,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";
import "./index.css";

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-overlay"></div>

      <div className="industries-container">
        {/* HEADER */}
        <div className="industries-header">
          <span className="eyebrow">We help reimagine</span>
          <h2>Industries</h2>
          <p>
            We work across some of the most demanding industries, delivering
            robust web, software, and mobile app solutions.
          </p>
        </div>

        {/* CARDS */}
        <div className="industries-grid">
          <IndustryCard
            icon={<FaHeartbeat />}
            title="Healthtech"
            desc="Embrace digital transformation to enhance patient experiences and attract new users."
          />

          <IndustryCard
            icon={<FaCity />}
            title="PropTech"
            desc="Transform property, construction, and real estate with innovative digital platforms."
          />

          <IndustryCard
            icon={<FaShoppingBag />}
            title="Retail"
            desc="Boost engagement and conversion through personalised digital experiences."
          />

          <IndustryCard
            icon={<FaCoins />}
            title="FinTech"
            desc="Build secure and scalable financial platforms for the digital economy."
          />

          <IndustryCard
            icon={<FaGavel />}
            title="LegalTech"
            desc="Optimise legal workflows with powerful tools for research and case management."
          />

          <IndustryCard
            icon={<FaIndustry />}
            title="Manufacturing"
            desc="Gain control over production planning with smart manufacturing software."
          />
        </div>
      </div>
    </section>
  );
}

/* CARD */
function IndustryCard({ icon, title, desc }) {
  return (
    <div className="industry-card">
      <div className="industry-icon">{icon}</div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <button className="industry-btn">
        Explore <FaArrowRight />
      </button>
    </div>
  );
}
