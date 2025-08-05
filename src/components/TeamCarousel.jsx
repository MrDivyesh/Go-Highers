import React, { useState } from 'react';
import './TeamCarousel.css';
import img1 from '../assets/team/divyesh.jpg';
import img2 from '../assets/team/sakshi.jpg';
// Add more images as needed

const team = [
  { src: img1, name: 'Divyesh Ramoliya', role: 'Founder' },
  { src: img2, name: 'Sakshi Paneliya', role: 'Co-Founder' },
  // Add more team members here
];

const TeamCarousel = () => {
  const [center, setCenter] = useState(1); // Start with the second image centered

  const prev = () => setCenter((center - 1 + team.length) % team.length);
  const next = () => setCenter((center + 1) % team.length);

  return (
    <div className="team-carousel-wrapper">
      <button className="carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="team-carousel">
        {team.map((member, idx) => {
          // Calculate position relative to center
          const offset = idx - center;
          let className = 'carousel-card';
          if (offset === 0) className += ' center';
          else if (offset === -1 || (center === 0 && idx === team.length - 1)) className += ' left';
          else if (offset === 1 || (center === team.length - 1 && idx === 0)) className += ' right';
          else className += ' hidden';

          return (
            <div className={className} key={idx}>
              <img src={member.src} alt={member.name} />
              <div className="carousel-caption">
                <div className="carousel-name">{member.name}</div>
                <div className="carousel-role">{member.role}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-arrow right" onClick={next}>&gt;</button>
    </div>
  );
};

export default TeamCarousel;
