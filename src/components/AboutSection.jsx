import React, { useLayoutEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptop1 from '../assets/about/about1.jpg';
import phone from '../assets/about/about2.jpg';
import laptop2 from '../assets/about/about3.jpg';
import gsap from 'gsap';

const cardData = [
  {
    img: laptop1,
    bg: '#181818',
    alt: 'Laptop 1',
  },
  {
    img: phone,
    bg: '#f3f3f3',
    alt: 'Phone',
  },
  {
    img: laptop2,
    bg: '#f3f0f6',
    alt: 'Laptop 2',
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const ctx = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const q = gsap.utils.selector(el);

    // Set initial state
    gsap.set(q('.about-heading-block > *, .card-image'), { opacity: 0 });

    ctx.current = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(q('.about-heading-block > *'), {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3
      }).to(q('.card-image'), {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8
      }, '-=0.5');
    }, el);

    // Cleanup function
    return () => {
      if (ctx.current && ctx.current.revert) {
        ctx.current.revert();
      }
      // Kill only the animations for this component
      const elements = q('.about-heading-block > *, .card-image');
      elements.forEach(element => {
        if (element) gsap.killTweensOf(element);
      });
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ background: '#fff', padding: '68px 0 0 0', borderTop: '2px solid #191919' }}>
      <Container fluid style={{ maxWidth: 1400 }}>
        <Row>
          <Col xs={12} md={8} lg={7} style={{ marginTop: 24 }}>
            <div className="about-heading-block">
              <div className="about-label">OUR BEST PROVIDE SERVICE</div>
              <h1 className="about-main-heading">
                Empowering Your<br />Digital Tomorrow
              </h1>
              <div className="about-heading-underline"></div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          {cardData.map((card, idx) => (
            <Col key={idx} xs={12} md={4} className="d-flex justify-content-center mb-4">
              <img
                src={card.img}
                alt={card.alt}
                className="card-image"
                style={{
                  width: '90%',
                  height: 'auto',
                  objectFit: 'cover',
                  boxShadow: idx === 0 ? '0 0 0 0 #000' : 'none',
                  paddingTop: '50px'
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection; 