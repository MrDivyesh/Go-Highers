import React from 'react';
import '../assets/TeamSection.css';
import divyeshImg from '../assets/team/divyesh.jpeg';
import sakshiImg from '../assets/team/sakshi.jpg';

const teamMembers = [
  {
    name: 'Divyesh Ramoliya',
    role: 'Founder',
    img: divyeshImg,
  },
  {
    name: 'Sakshi Paneliya',
    role: 'Co-Founder',
    img: sakshiImg,
  },
  {
    name: 'David Thompson',
    role: 'Digital Specialist',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80',
  },
  {
    name: 'Sophia Lee',
    role: 'Financial Analyst',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&q=80',
  },
];

const TeamSection = () => (
  <section className="team-section">
    <div className="container team-container">
      <div className="team-col team-col-left">
        <div className="team-label">MEET OUR TEAM</div>
        <h2 className="team-title">Our team</h2>
        <div className="team-desc">
            Creative Brains Technical Hearts <br/> One Strong Team.
        </div>
      </div>
      <div className="team-col team-col-right">
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;