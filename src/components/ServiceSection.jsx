import React from 'react';
import './ServiceSection.css';
import img1 from '../assets/service/1.jpg';
import img2 from '../assets/service/2.jpg';
import img3 from '../assets/service/3.jpg';
import img4 from '../assets/service/4.jpg';
import img5 from '../assets/service/5.jpg';

const services = [
  {
    img: img3,
    title:'Mobile App Development',
    desc: 'We design and develop high-performing mobile applications tailored to your business goals, ensuring seamless user experience and maximum digital reach.',
  },
  {
    img: img4,
    title: 'Website Development',
    desc: 'We build fast, secure, and scalable websites that not only reflect your brand identity but also drive measurable business results.',
  },
  {
    img: img2,
    title: 'Game Design & Development',
    desc: 'From concept to launch, we craft engaging and immersive games that stand out in today’s competitive gaming market with captivating design and smooth gameplay.',
  },
  {
    img: img1,
    title: 'Blockchain & NFT Solutions',
    desc: 'We deliver secure and scalable blockchain and NFT solutions to help businesses embrace the future of decentralized technologies and digital assets.',
  },
  {
    img: img5,
    title:  'AI & Machine Learning',
    desc: 'We empower your business with intelligent AI and machine learning models that automate processes, deliver insights, and accelerate growth.',
  },
];

const FeatureListSection = () => (
  <section className="feature-list-section">
    <div className="feature-list-header">
      <div className="feature-list-label">EMPOWERING YOUR WEB DEVELOPMENT</div>
      <h2 className="feature-list-title" >We develop digital solutions</h2>
      <div className="feature-list-desc">
        Elementra is dedicated to transforming businesses through innovative technology solutions.
      </div>
    </div>
    <div className="feature-list-grid">
      {services.map((service, idx) => (
        <div className="feature-card" key={idx}>
          <div className="feature-card-img">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="feature-card-title">{service.title}</div>
          {/* Show service list for IT consulting only */}
          {service.serviceList && (
            <ul className="feature-service-list">
              {service.serviceList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          <div className="feature-card-desc">{service.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureListSection;
