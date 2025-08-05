import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Footer.css';
import logo from '../assets/header/dark-logo.png'; // Use your logo path

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg-word">GO HIGHERS</div>
    <div className="footer-content">
      <div className="footer-col footer-brand">
        <div className="footer-logo">
          <img src={logo} alt="Elementra" />
        </div>
        <p className="footer-desc">
          Go-higher Infotech is your trusted technology partner.
          We specialize in crafting innovative digital solutions that grow with you.
          Driven by vision, powered by code — let's build the future together.
        </p>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <div className="footer-contact">
          <div>info@gohighers.in</div>
          
          <div style={{marginTop : '10px'}}>Vikash Shopper, Vrajbhumi Bus Parking, 312, Bhagwan Chowk  Surat, Gujarat 395010</div>
        </div>
      </div>
      <div className="footer-col ms-4">
        <h4>Links</h4>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Get in Touch</h4>
        <div className="footer-social">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <span className="footer-social-icon">
              <i className="bi bi-facebook"></i>
            </span>
          </a>
          <a href="https://www.linkedin.com/company/go-highersinfotech/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span className="footer-social-icon">
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
          <a href="https://www.instagram.com/go.highersinfotech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span className="footer-social-icon">
              <i className="bi bi-instagram"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 