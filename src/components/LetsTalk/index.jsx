import {
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaClock,
} from "react-icons/fa";
import "./index.css";

export default function LetsTalk() {
  return (
    <section className="talk-section">
      <div className="talk-container">

        <div className="talk-left">
          <span className="eyebrow">New project in mind?</span>
          <h1>
            Let’s <span>Talk</span>
          </h1>

          <div className="response-time">
            <FaClock />
            <p>Response in less than 1 hour</p>
          </div>

          <div className="contact-block">
            <h4>Alternative contacts (landline)</h4>

            <p><FaPhoneAlt /> Ind: +91 9492116537</p>
            <p><FaPhoneAlt /> UK: +44 747 656 3437</p>
            <p><FaPhoneAlt /> PT: +351 21 386 0577</p>
            <p><FaEnvelope /> rinovo@gmail.com</p>
            <p><FaComments /> Chat</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="talk-form-card">
          <h3>
            Explain your project and <br />
            <span>book a meeting today.</span>
          </h3>

          <form className="talk-form">
            <div className="row">
              <input placeholder="Name*" />
              <input placeholder="Company*" />
            </div>

            <div className="row">
              <input placeholder="Email*" />
              <input placeholder="Phone" />
            </div>

            <select>
              <option>I am looking for*</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>AI / ML</option>
            </select>

            <textarea placeholder="Message*"></textarea>

            <select>
              <option>How did you hear about us?</option>
              <option>Google</option>
              <option>Referral</option>
              <option>LinkedIn</option>
            </select>

            <div className="file-upload">
              <label>
                Choose file
                <input type="file" />
              </label>
              <span>No file chosen</span>
            </div>

            <div className="consent">
              <input type="checkbox" />
              <p>I allow Rinovo to store and process my personal data*</p>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}
