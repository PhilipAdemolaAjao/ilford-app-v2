import React from "react";
import "./App.css";
import logo from "./assets/ilford-logo.jpg"; // 🔁 update this path/name if different
import building from "./assets/ilford-building.jpg"; // 🔁 update if needed

const App = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("request-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="ilford-app">
      {/* Hero Section */}
      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
              rgba(0,0,0,0.55),
              rgba(0,0,0,0.75)
            ), url(${building})`,
        }}
      >
        <nav className="hero-nav">
          <div className="brand">
            <img src={logo} alt="Ilford MSC" className="brand-logo" />
            <span className="brand-name">Ilford Multiconcept Services</span>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Reliable Office & Print Support in Ilford</h1>
          <p>
            We keep your printers, copiers and office equipment running —
            with fast supply, maintenance and on-site support for universities,
            offices and SMEs.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleScrollToForm}>
              Request Support
            </button>
            <a href="#contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* What We Do */}
      <section className="section" id="services">
        <h2>What We Do</h2>
        <p className="section-intro">
          End-to-end office support so you can focus on your work, not your
          equipment.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Printer & Photocopier Supply</h3>
            <p>
              Sourcing and installing printers, copiers and 3D printers that
              match your usage and budget.
            </p>
          </div>
          <div className="card">
            <h3>Consumables & Toner Refill</h3>
            <p>
              Regular supply of paper, toner and cartridges — with refill and
              emergency top-up when you need it most.
            </p>
          </div>
          <div className="card">
            <h3>Maintenance & On-Site Support</h3>
            <p>
              Fault diagnosis, minor repairs and coordination with engineers to
              minimise downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section section-alt">
        <h2>Who We Work With</h2>
        <p className="section-intro">
          We support organisations in and around Ilford and East London.
        </p>
        <div className="chips">
          <span className="chip">Universities & Colleges</span>
          <span className="chip">Corporate Offices</span>
          <span className="chip">SMEs & Agencies</span>
          <span className="chip">Print-heavy Teams</span>
        </div>
      </section>

      {/* Request Form (Google Forms) */}
      <section className="section" id="request-form">
        <h2>Request Support or a Quote</h2>
        <p className="section-intro">
          Tell us what you need — supplies, maintenance or a new setup — and
          we’ll get back to you quickly.
        </p>

        {/* Option A: Embedded Google Form */}
        <div className="form-embed-wrapper">
          <iframe
            title="Ilford Support Request Form"
            src="https://docs.google.com/forms/d/FORM_ID/viewform?embedded=true"
            // 🔁 replace with your real Google Forms URL
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        {/* Option B: Just a button linking to the form (uncomment if you prefer) */}
        {/*
        <div className="form-link-only">
          <a
            href="https://docs.google.com/forms/d/FORM_ID/viewform"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Open Request Form
          </a>
        </div>
        */}
      </section>

      {/* Contact Section */}
      <section className="section section-alt" id="contact">
        <h2>Contact & Location</h2>
        <div className="contact-grid">
          <div>
            <h3>Contact Details</h3>
            <p>
              <strong>Phone:</strong> +44 (0) 0000 000000
              <br />
              <strong>Email:</strong> info@ilfordmsc.com
              {/* 🔁 update with your real details */}
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              Ilford, East London
              <br />
              United Kingdom
            </p>
          </div>
          <div>
            <h3>Business Hours</h3>
            <p>
              Monday – Friday: 9:00 – 17:30
              <br />
              Saturday: By appointment
              <br />
              Sunday & Bank Holidays: Closed
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ilford Multiconcept Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
