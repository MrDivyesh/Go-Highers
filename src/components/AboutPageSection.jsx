import React from 'react';
import './AboutSection.css';
import about1 from '../assets/about/img1.jpg';
import about2 from '../assets/about/img2.jpg';

const AboutSection = () => (
  <section className="about-section">
    <div className="about-grid">
      <div className="about-img">
        <img src={about1} alt="Working on laptop" />
      </div>
      <div className="about-content">
        <div className="about-label">EMPOWERING BUSINESSES</div>
        <h2 className="about-title">Transform brands<br />through innovation</h2>
        <p className="about-desc">
        At Go-Higher Infotech, we’re not just building digital solutions — we’re building relationships. Let’s create, innovate, and elevate together.


        </p>
      </div>
      <div className="about-img img2" style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}>
        <img src={about2} alt="Creative thinking" />
      </div>
    </div>
  </section>
);

export default AboutSection;
