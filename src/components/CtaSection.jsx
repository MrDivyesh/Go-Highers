import React from 'react';
import './CtaSection.css';
import ctaBg from '../assets/cta/cta.jpg'; // Replace with your actual image file name

const CtaSection = () => (
  <section className="cta-section" style={{ backgroundImage: `url(${ctaBg})` }}>
    <div className="cta-content">
      <h2 className="cta-title">From Concepts to Code <br/> Complete IT Solutions.</h2>
      <button className="cta-btn">Get Started</button>
    </div>
  </section>
);

export default CtaSection; 