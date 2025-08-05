import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFeedback('');
    if (!form.name || !form.email || !form.agree) {
      setFeedback('Please fill all required fields and agree to the terms.');
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        agree: form.agree,
        timestamp: Timestamp.now(),
      });
      setFeedback('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', message: '', agree: false });
    } catch (err) {
      setFeedback('Something went wrong. Please try again.');
      console.error('Firestore error:', err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="contact-section">
        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-info">
            <div className="contact-label">COMMON QUESTIONS</div>
            <h1 className="contact-title">Got questions?<br />Contact us!</h1>
            <div className="contact-desc">
              We are here to assist you with any questions or concerns you may have. Feel free to reach out to us anytime.
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-icon">📍</span>
                Vikash Shopper, Vrajbhumi Bus Parking, 312, Bhagwan Chowk  Surat, Gujarat 395010
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📱</span>
                <b>+91 70412 44800</b>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">✉️</span>
                info@gohighers.in
              </div>
            </div>
          </div>
          {/* Right Side */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label>Name <span className="required">*</span></label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="contact-form-group">
                <label>Email <span className="required">*</span></label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your number"
                autoComplete="off"
              />
            </div>
            <div className="contact-form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="contact-form-group checkbox-group">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree">
                I agree that my submitted data is being <span className="highlight">collected and stored.</span>
              </label>
            </div>
            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {feedback && (
              <div style={{ marginTop: 12, color: feedback.includes('success') ? 'green' : 'red' }}>
                {feedback}
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className="contact-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.640217658598!2d72.90001677584517!3d21.2261592809683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa83daac0f1%3A0xc752ba7aacd2c960!2sGo%20Highers%20Infotech!5e1!3m2!1sen!2sin!4v1751094466682!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Go Highers Infotech Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contact; 