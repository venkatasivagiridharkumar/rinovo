import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo-text-decoration">
        <div className="nav-logo">
          Rinovo<span>.</span>
        </div></Link>

        {/* DESKTOP NAV */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/contact" className="nav-cta mobile-cta">
            Start a Project
          </Link>
        </nav>

        <Link to="/contact" className="nav-cta desktop-cta">
          Start a Project
        </Link>

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
