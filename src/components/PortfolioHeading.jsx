import React from 'react';
import '../assets/portfolioSection.css';

const PortfolioSection = ({ label, title, images }) => (
  <div className="portfolio-section py-5" style={{ background: '#fff', width: '100vw', paddingLeft: 0, paddingRight: 0 }}>
    <div className="container" style={{ padding: '0 4vw' }}>
      <div className="text-uppercase mb-2" style={{ letterSpacing: 1, fontWeight: 600, color: '#222', fontSize: 15 }}>
        {label}
      </div>
      <h1 style={{ fontWeight: 600, fontSize: '2.8rem', color: '#191919', marginBottom: 40 }}>
        {title}
      </h1>
    </div>
    <div className="portfolio-img-row">
      {images.map((img, idx) => (
        <div key={idx} className="portfolio-img-wrapper">
          <img src={img.src} alt={img.alt} className="portfolio-img" />
          {img.caption && (
            <div className="portfolio-img-caption">
              <div className="portfolio-img-title">{img.caption}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default PortfolioSection;
