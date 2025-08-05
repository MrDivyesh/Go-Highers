import React from 'react';
import '../assets/marquee.css';

const marqueeItems = [
  'Mobile App Design & Development', '→',
  'Website Design & Development', '→',
  'Game Design & Development', '→',
  'Blockchain & NFT Solutions', '→',
  'AI & Machine Learning Development', '→',
];

const SimpleMarqueeSection = () => (
  <div className="simple-marquee-section">
    <div className="simple-marquee-track">
      {[...marqueeItems, ...marqueeItems].map((item, idx) => (
        <span className="simple-marquee-text" key={idx}>{item}</span>
      ))}
    </div>
  </div>
);

export default SimpleMarqueeSection;
