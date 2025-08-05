import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const stats = [
  { value: '200', label: 'Projects Completed' },
  { value: '50', label: 'Happy Clients' },
  { value: '50', label: 'Master Minds' },
  { value: '4', label: 'Products' },
];

// Slot machine style counter for the second stat
const SlotScrollCounter = ({ targetValue, duration = 2000 }) => {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animateScroll();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [hasStarted]);

  const animateScroll = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(targetValue * ease);
      setCurrent(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(targetValue);
      }
    };
    requestAnimationFrame(animate);
  };

  // Split digits for slot effect
  const digits = String(targetValue).split("");
  const currentDigits = String(current).padStart(digits.length, "0").split("");

  return (
    <div ref={elementRef} style={{ display: 'flex', gap: '0.2em' }}>
      {digits.map((digit, idx) => (
        <div key={idx} style={{ height: '9rem', overflow: 'hidden', width: '6rem', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s cubic-bezier(.23,1.02,.64,1)',
              transform: `translateY(-${parseInt(currentDigits[idx]) * 9}rem)`
            }}
          >
            {[...Array(10).keys()].map((n) => (
              <div
                key={n}
                style={{
                  fontSize: '9rem',
                  fontWeight: 400,
                  color: '#191919',
                  lineHeight: 1,
                  height: '9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Counter for other stats
const Counter = ({ targetValue }) => (
  <div style={{ fontSize: '9rem', fontWeight: 400, color: '#191919', lineHeight: 1 }}>
    {targetValue}
  </div>
);

const AnimatedCounter = ({ targetValue, start, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(targetValue * ease);
      setCount(value);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [start, targetValue, duration]);

  return (
    <div
      style={{
        fontSize: '9rem',
        fontWeight: 400,
        color: '#191919',
        lineHeight: 1,
      }}
    >
      {count}
    </div>
  );
};

const StatsSection = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ background: '#fff', padding: '40px 0' }}>
      <Container>
        <Row className="text-center justify-content-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={6} md={3} className="mt-5 mb-4 mb-md-0">
              <AnimatedCounter targetValue={stat.value} start={start} />
              <div style={{ fontSize: 20, color: '#191919', marginTop: 8 }}>{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StatsSection; 