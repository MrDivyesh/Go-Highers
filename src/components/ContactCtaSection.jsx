import React from 'react';
import './ContactCtaSection.css';
import ctaBg from '../assets/cta/cta2.jpg';

const ContactCtaSection = () => (
  <section className="contact-cta-section" style={{ backgroundImage: `url(${ctaBg})` }}>
    <div className="contact-cta-overlay">
      <h2 className="contact-cta-title">
        Contact us today and find out<br />
        how we can help
      </h2>
      <button className="contact-cta-btn">Our Solution</button>
    </div>
  </section>
);

export default ContactCtaSection;
