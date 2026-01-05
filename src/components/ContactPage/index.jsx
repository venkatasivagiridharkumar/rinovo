import React from "react";
import "./index.css";

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-left">
          <span className="eyebrow">New project in mind?</span>
          <h2>
            Let’s <span>Talk</span>
          </h2>

          <p className="response">
            Response in less than <strong>1 hour</strong>
          </p>

          <div className="contact-info">
            <h4>Alternative contacts (landline)</h4>
            <p>🇮🇳 Ind: +91 94921 16537</p>
            <p>🇬🇧 UK: +44 747 656 3437</p>
            <p>🇵🇹 PT: +351 21 386 0577</p>
            <p>✉️ rinovo@gmail.com</p>
            <p className="chat">💬 Chat</p>
          </div>

          <div className="contact-image">
            {/* Decorative image */}
            <img
              src="/contact/contact-illustration.jpg"
              alt="Contact Rinovo"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-card">
          <h3>
            Explain your project and <br />
            <span>book a meeting today.</span>
          </h3>

          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Name*" required />
              <input type="text" placeholder="Company*" required />
            </div>

            <div className="row">
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Phone" />
            </div>

            <select required>
              <option value="">I am looking for*</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>AI / Machine Learning</option>
              <option>Dedicated Team</option>
              <option>UX / UI Design</option>
            </select>

            <textarea
              placeholder="Message*"
              rows="4"
              required
            ></textarea>

            <select>
              <option value="">How did you hear about us?</option>
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Other</option>
            </select>

            <div className="file-upload">
              <label>
                Choose file
                <input type="file" />
              </label>
              <span>No file chosen</span>
            </div>

            <div className="consent">
              <input type="checkbox" required />
              <p>
                I allow Rinovo to store and process my personal data*
              </p>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
