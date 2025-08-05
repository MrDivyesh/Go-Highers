import React from 'react';
import './BrandElevateSection.css';
import img1 from '../assets/brand/brand1.jpg'; // Left big image
import img2 from '../assets/brand/brand2.jpg'; // Right col, left (full height)
import img3 from '../assets/brand/brand3.jpg'; // Right col, right, top
import img4 from '../assets/brand/brand4.jpg'; // Right col, right, bottom

const BrandShowcaseSection = () => (
  <section className="brand-showcase-section">
    <div className="brand-showcase-header">
      <div className="brand-showcase-label">Crafting the Digital Tomorrow, Today.</div>
      <h2 className="brand-showcase-title">Who We Are</h2>
      <div className="brand-showcase-desc">
      At Go-Higher Infotech, we believe technology is more than just code — it’s a bridge to a smarter, more connected world. With a passionate team of developers, designers, strategists, and problem-solvers, we work hand-in-hand with clients to transform ideas into reality.
      </div>
    </div>
    <div className="brand-showcase-grid">
      {/* Left big image */}
      <div className="brand-showcase-img brand-showcase-img-main">
        <img src={img1} alt="Brand 1" />
      </div>
      {/* Right side */}
      <div className="brand-showcase-right">
        <div className="brand-showcase-img brand-showcase-img-tall">
          <img src={img2} alt="Brand 2" />
        </div>
        <div className="brand-showcase-vertical">
          <div className="brand-showcase-img brand-showcase-img-half">
            <img src={img3} alt="Brand 3" />
          </div>
          <div className="brand-showcase-img brand-showcase-img-half">
            <img src={img4} alt="Brand 4" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BrandShowcaseSection;
