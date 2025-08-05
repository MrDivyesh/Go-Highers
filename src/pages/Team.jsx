import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDTeamCarousel from '../components/ThreeDTeamCarousel';

import Carousel from 'react-bootstrap/Carousel';
import img3 from '../assets/team/prince .jpg';
import img4 from '../assets/team/ajay.jpg';
import img5 from '../assets/team/dhiru.jpg';
import img6 from '../assets/team/leeza.jpg';
import img7 from '../assets/team/janvi.jpg';
import img8 from '../assets/team/meet.jpg';
import img9 from '../assets/team/denisha.jpg';
import img10 from '../assets/team/sahil.jpg';






// ...import all 20 images

const teamImages = [
  { src: img3, name: 'Prince Vadakul', position: 'Junior Game Developer' },
  { src: img4, name: 'Ajay Gediya', position: 'Junior Game Developer' },
  { src: img5, name: 'Janvi Makavana', position: 'Graphics & UI-UX' },
  { src: img6, name: 'Leeza Navadiya', position: 'Junior Game Developer' },
  { src: img7, name: 'Janvi Chodvadiya', position: 'Junior Game Developer' },
  { src: img8, name: 'Meet Vasoya', position: 'Senior Blockchain Developer' },
  { src: img9, name: 'Denisha Akabri', position: 'Senior full Stack Developer' },
  { src: img10, name: 'Sahil Sagar', position: 'Senior Website Developer' },

];

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div style={{ width: '100vw', maxWidth: '100vw', margin: '60px auto', overflow: 'hidden' }}>
      {isMobile ? (
        <Carousel>
          {teamImages.map((img, idx) => (
            <Carousel.Item key={idx}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                  padding: 24,
                  margin: '32px 12px 32px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: 220,
                  maxWidth: 260,
                }}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  style={{
                    borderRadius: '50%',
                    height: 120,
                    width: 120,
                    objectFit: 'cover',
                    marginBottom: 16,
                    border: '4px solid #ff914d',
                    boxShadow: '0 2px 12px 0 rgba(255,145,77,0.10)'

                  }}
                />
                <div style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#222',
                  marginBottom: 4,
                  marginTop: 0,
                  textAlign: 'center'
                }}>
                  {img.name}
                </div>
                <div style={{
                  background: 'rgba(255,145,77,0.08)',
                  color: '#ff914d',
                  borderRadius: 8,
                  padding: '4px 14px',
                  fontWeight: 500,
                  fontSize: '0.98rem',
                  marginBottom: 0,
                  textAlign: 'center'
                }}>
                  {img.position}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <ThreeDTeamCarousel items={teamImages} />
      )}
      <div style={{
        margin: '48px auto 0 auto',
        padding: '40px 0',
        background: '#f8f7f4',
        borderRadius: 24,
        maxWidth: 900,
        textAlign: 'center'
      }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 16 }}>
          Want to work with us?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 24 }}>
          We're always looking for talented people.<br />
          Let's build something amazing together!
        </p>
        <button
          onClick={handleContactClick}
          style={{
            display: 'inline-block',
            background: '#ff7300',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: 32,
            fontWeight: 600,
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
            transition: 'background 0.2s',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.currentTarget.style.background = '#ff9500'}
          onMouseOut={e => e.currentTarget.style.background = '#ff7300'}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Team;