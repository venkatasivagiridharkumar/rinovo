import React, { useEffect, useState } from "react";
import "./index.css";

const words = ["Faster", "Bigger", "Better"];

export default function HeroTop() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="hero-top">
      <div className="hero-inner">
        <h1 className="hero-title">
          Build{" "}
          <span className="typing-text">
            {text}
            <span className="cursor">|</span>
          </span>
        </h1>

        <p className="hero-subtext">
          We provide Seamless Digital Acceleration by boosting engineering and
          design capabilities, improving processes, and delivering end-to-end
          digital products.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Start a Project</button>
          <button className="secondary-btn">Contact Us</button>
        </div>

        <div className="trusted-by">
          <span className="trusted-label">Trusted by</span>
          <div className="trusted-logos">
            <div>NEOM</div>
            <div>RE/MAX</div>
            <div>ThermoFisher</div>
            <div>NOKIA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
