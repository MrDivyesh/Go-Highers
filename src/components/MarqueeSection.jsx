import React from 'react';
import Image from 'react-bootstrap/Image';
import '../assets/marquee.css'; // We'll add custom CSS here
import flower from '../assets/marquee/flower.png'; // Update path if needed

const RotatingFlower = () => (
  <span className="rotating-flower d-inline-block align-middle mx-3">
    <Image src={flower} alt="flower" width={160} height={160} />
  </span>
);

const marqueeItems = [
  'WEB / APP  SOLUTION', <RotatingFlower key="f1" />, 'GAME DEVELOPMENT', <RotatingFlower key="f2" />,
  'BLOCKCHAIN DEVELOPMENT', <RotatingFlower key="f3" />, 'UI & UX DESIGN', <RotatingFlower key="f4" />,
  'UI & UX DESIGN', <RotatingFlower key="f5" />, 'BLOCKCHAIN DEVELOPMENT', <RotatingFlower key="f6" />,
  'GAME DEVELOPMENT', <RotatingFlower key="f7" />, 'WEB / APP  SOLUTION', <RotatingFlower key="f8" />,
];

const MarqueeSection = () => (
  <div className="marquee-section bg-white py-4 w-100 overflow-hidden position-relative">
    <div className="marquee-track">
      {/* Duplicate the items for seamless loop */}
      {[...marqueeItems, ...marqueeItems].map((item, idx) =>
        typeof item === 'string' ? (
          <span className="marquee-text" key={idx}>{item}</span>
        ) : (
          React.cloneElement(item, { key: idx })
        )
      )}
    </div>
  </div>
);

export default MarqueeSection;
