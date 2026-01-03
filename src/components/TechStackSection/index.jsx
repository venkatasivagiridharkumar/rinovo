import {
  FaFigma,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaMicrosoft,
  FaGoogle,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiWebflow,
  SiRubyonrails,
  SiDjango,
  SiDotnet,
  SiFlutter,
  SiPytorch,
  SiMlflow,
  SiDvc,
} from "react-icons/si";

import "./index.css";

export default function TechStackSection() {
  return (
    <section className="tech-section">
      {/* HEADER */}
      <div className="tech-header">
        <span className="eyebrow">The tech stack that helps</span>
        <h2>Maximise Your Business Value</h2>
      </div>

      {/* GRID */}
      <div className="tech-grid">
        <TechCard title="Design">
          <TechItem icon={<FaFigma />} label="Figma" />
          <TechItem icon={<SiAdobephotoshop />} label="Photoshop" />
          <TechItem icon={<SiAdobeillustrator />} label="Illustrator" />
          <TechItem icon={<SiAdobeindesign />} label="InDesign" />
        </TechCard>

        <TechCard title="Front-end">
          <TechItem icon={<FaReact />} label="React" />
          <TechItem icon={<FaAngular />} label="Angular" />
          <TechItem icon={<FaVuejs />} label="Vue" />
          <TechItem icon={<SiWebflow />} label="Webflow" />
        </TechCard>

        <TechCard title="Back-end">
          <TechItem icon={<FaNodeJs />} label="Node.js" />
          <TechItem icon={<FaPython />} label="Python" />
          <TechItem icon={<SiRubyonrails />} label="Rails" />
          <TechItem icon={<SiDjango />} label="Django" />
          <TechItem icon={<SiDotnet />} label=".NET" />
          <TechItem icon={<FaJava />} label="Java" />
        </TechCard>

        <TechCard title="Mobile">
          <TechItem icon={<FaReact />} label="React Native" />
          <TechItem icon={<SiFlutter />} label="Flutter" />
        </TechCard>

        <TechCard title="Systems">
          <TechItem icon={<FaAws />} label="AWS" />
          <TechItem icon={<FaMicrosoft />} label="Azure" />
          <TechItem icon={<FaGoogle />} label="GCP" />
        </TechCard>

        <TechCard title="AI / Data Science">
          <TechItem icon={<SiPytorch />} label="PyTorch" />
          <TechItem icon={<SiDvc />} label="DVC" />
          <TechItem icon={<SiMlflow />} label="MLflow" />
          <TechItem icon={<FaAws />} label="AWS" />
          <TechItem icon={<FaGoogle />} label="Vertex AI" />
          <TechItem icon={<FaMicrosoft />} label="Azure AI" />
        </TechCard>
      </div>

      {/* CTA */}
      <div className="tech-cta">
        <button>Explore Our Services</button>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */
function TechCard({ title, children }) {
  return (
    <div className="tech-card">
      <h3>{title}</h3>
      <div className="tech-items">{children}</div>
    </div>
  );
}

function TechItem({ icon, label }) {
  return (
    <div className="tech-item">
      {icon}
      <span>{label}</span>
    </div>
  );
}
