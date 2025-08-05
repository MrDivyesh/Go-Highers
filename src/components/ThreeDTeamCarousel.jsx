import React, { useState } from 'react';
import './ThreeDTeamCarousel.css';

const ThreeDTeamCarousel = ({ items }) => {
  const [active, setActive] = useState(0);
  const total = items.length;

  // For circular navigation
  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  // Show 5 at a time (center + 2 left/right)
  const visible = 2;

  return (
    <div className="team-3d-carousel">
      <div className="carousel-3d-track">
        {items.map((item, idx) => {
          // Calculate position relative to active
          let offset = idx - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          if (Math.abs(offset) > visible) return null;

          return (
            <div
              key={idx}
              className={`carousel-3d-item${offset === 0 ? ' active' : ''}`}
              style={{
                '--offset': offset,
                '--abs-offset': Math.abs(offset),
                'zIndex': visible - Math.abs(offset),
                'opacity': Math.abs(offset) > visible ? 0 : 1,
                'pointerEvents': Math.abs(offset) > visible ? 'none' : 'auto'
              }}
            >
              <img src={item.src} alt={item.name} />
              <div className="team-info">
                <div className="team-name">{item.name}</div>
                <div className="team-position">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Controls centered below the active image */}
      <div className="carousel-3d-controls-centered">
        <button className="carousel-arrow left" onClick={prev}>&lt;</button>
        <button className="carousel-arrow right" onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

export default ThreeDTeamCarousel;
