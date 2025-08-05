import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Mobile App Development',
    desc: 'We create intuitive, scalable, and high-performance mobile apps for Android & iOS. Our focus is user experience, seamless functionality, and cutting-edge technology. From idea to deployment, we build apps that users love and businesses trust.',
  },
  {
    title: 'Website Development',
    desc: "We build responsive, fast, and SEO-optimized websites tailored to your goals.Combining sleek UI with robust backend, we ensure performance and scalability.Whether it's corporate, eCommerce, or custom portals — we deliver excellence.",
  },
  {
    title: 'Game Design & Development',
    desc:'Bringing imagination to life through immersive and engaging game experiences.From concept art to development, we specialize in 2D/3D mobile and desktop games.Our game devs focus on creativity, performance, and cross-platform compatibility.',
  },
  {
    title: 'Blockchain & NFT Solutions',
    desc: 'We offer secure, decentralized solutions for blockchain, DeFi, and NFT platforms.Our blockchain engineers build smart contracts, crypto wallets, and marketplaces.Step confidently into Web3 with custom-built blockchain-powered systems.',
  },
  {
    title: 'AI & ML',
    desc: 'Automate your business and enhance decisions with our AI-powered systems. We build intelligent models for prediction, vision, NLP, and smart automation. From data to deployment, we deliver real-world-ready AI solutions.',
  },
];

const FeatureListSection = () => (
  <div style={{ background: '#fff', padding: '64px 0' }}>
    <Container style={{ maxWidth: 1400 }}>
      <div style={{ fontWeight: 600, letterSpacing: 1, color: '#222', fontSize: 16, textTransform: 'uppercase', marginBottom: 16 }}>
        Our Best Provide Service
      </div>
      <h1 style={{
        fontWeight: 600,
        fontSize: '3.2rem',
        lineHeight: 1.1,
        color: '#191919',
        marginBottom: 32,
      }}>
       Empowering Your <br/> Digital Tomorrow
      </h1>
      <hr style={{ borderTop: '2px solid #191919', marginBottom: 0 }} />
      {features.map((f, idx) => (
        <Row key={idx} className="align-items-center py-4 justify-content-between" style={{ borderBottom: idx < features.length - 1 ? '1px solid #eee' : 'none' }}>
          <Col xs={2} md={1} style={{ fontSize: 36, fontWeight: 400, color: '#888', textAlign: 'right' }}>
            {String(idx + 1).padStart(2, '0')}
          </Col>
          <Col xs={10} md={3} style={{ fontSize: 30, fontWeight: 600, color: '#191919' }}>
            {f.title}
          </Col>
          <Col xs={12} md={4} style={{ fontSize: 15, color: '#444', marginTop: 8 }}>
            {f.desc}
          </Col>
          <Col xs={12} md={2} className="text-md-center text-end mt-3 mt-md-0">
            <Link to="/service" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline-light"
                style={{
                  border: '1.5px solid #eee',
                  borderRadius: '50%',
                  width: 48,
                  height: 48,
                  boxShadow: 'none',
                  color: '#191919',
                  fontSize: 24,
                  background: '#fff',
                  padding: 0,
                }}
              >
                →
              </Button>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
    <style>{`
      @media (max-width: 768px) {
        .feature-title { font-size: 1.3rem !important; }
        .feature-desc { font-size: 0.98rem !important; }
      }
    `}</style>
  </div>
);

export default FeatureListSection;
