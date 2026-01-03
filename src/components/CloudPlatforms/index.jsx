import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCode,
} from "react-icons/fa";
import "./index.css";

export default function CloudPlatforms() {
  return (
    <section className="cloud-section">
      {/* Overlay */}
      <div className="cloud-overlay"></div>

      <div className="cloud-content">
        {/* LEFT TEXT */}
        <div className="cloud-text">
          <h2>
            Azure & Open <br />
            <span>Source Ready</span>
          </h2>

          <p>
            We develop software on Microsoft Azure, AWS, Google Cloud,
            and open-source platforms. This flexibility allows us to adapt
            to each client’s needs — whether that’s an enterprise-grade
            ecosystem like Azure or more open-source-friendly options such
            as AWS and Google Cloud.
          </p>

          <p>
            Our dedicated expert teams specialise in each platform to ensure
            the best results.
          </p>
        </div>

        {/* RIGHT LOGOS */}
        <div className="cloud-logos">
          <div className="platform-card">
            <FaMicrosoft />
            <span>Azure</span>
          </div>

          <div className="platform-card">
            <FaAws />
            <span>AWS</span>
          </div>

          <div className="platform-card">
            <FaGoogle />
            <span>Google Cloud</span>
          </div>

          <div className="platform-card">
            <FaCode />
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
