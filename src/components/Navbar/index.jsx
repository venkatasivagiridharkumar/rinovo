import React, { useState } from "react";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo">
          Rinovo<span>.</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          {/* Mobile CTA */}
          <a href="#contact" className="nav-cta mobile-cta">
            Start a Project
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <a href="#contact" className="nav-cta desktop-cta">
          Start a Project
        </a>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
