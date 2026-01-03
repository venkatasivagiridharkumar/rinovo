import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP GRID */}
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-col">
            <h3 className="logo">
              Rinovo<span>.</span>
            </h3>
            <p className="footer-desc">
              Rinovo is a software solutions company delivering scalable,
              secure, and future-ready digital products for startups and
              enterprises worldwide.
            </p>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Digital Transformation</li>
              <li>Product Design</li>
              <li>AI-Enabled Development</li>
              <li>Elite Engineering Teams</li>
              <li>Applied AI & ML</li>
              <li>Technical & UX Audit</li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li>FinTech</li>
              <li>HealthTech</li>
              <li>Retail</li>
              <li>PropTech</li>
              <li>LegalTech</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Why Rinovo</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📧 info@rinovo.com</p>
            <p>📞 +91 98765 43210</p>
            <p className="footer-link">Send us a message →</p>

            <div className="socials">
              <FaLinkedinIn />
              <FaFacebookF />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>
        </div>

        {/* OFFICE + MAP */}
        <div className="footer-office">
          <div className="office-text">
            <h4>Bengaluru Office</h4>
            <p>
              Rinovo Technologies Pvt. Ltd.<br />
              BTM Layout, 2nd Stage<br />
              Bengaluru, Karnataka – 560076<br />
              India
            </p>
          </div>

          <div className="office-map">
            <iframe
              title="Rinovo Bengaluru Office"
              src="https://www.google.com/maps?q=BTM+Layout+Bangalore&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Rinovo. All rights reserved.
          </p>

          <div className="policies">
            <span>Company Policy</span>
            <span>Privacy Policy</span>
            <span>Quality Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
