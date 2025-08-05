import React, { useState, useEffect } from 'react';
import './ReviewSliderSection.css';
import img1 from '../assets/review/1.jpg';
import img2 from '../assets/review/2.jpg';
import img3 from '../assets/review/3.jpg';

const reviews = [
  {
    text: "Go Higher Infotech turned our vision into digital reality! Their team is highly professional and responsive",
    name: "Emma Roberts",
    role: "Marketing Manager",
    img: img1,
  },
  {
    text: "We approached them for website development and the results were outstanding! Everything was delivered on time with great quality.",
    name: "John Smith",
    role: "CEO, TechCorp",
    img: img2,
  },
  {
    text: "In today’s world, it’s rare to find a reliable IT partner – Go Higher Infotech truly earned our trust.",
    name: "Priya Patel",
    role: "Brand Strategist",
    img: img3,
  },
];

const ReviewSliderSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="review-slider-section">
      <div className="review-stars">★★★★★</div>
      <div className="review-text">{reviews[current].text}</div>
      <div className="review-user">
        <img src={reviews[current].img} alt={reviews[current].name} className="review-user-img" />
        <div>
          <div className="review-user-name">{reviews[current].name}</div>
          <div className="review-user-role">{reviews[current].role}</div>
        </div>
      </div>
      <div className="review-dots">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`review-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewSliderSection;
