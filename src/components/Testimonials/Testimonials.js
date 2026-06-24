import React, { useState } from 'react';
import { testimonials } from '../../data';
import './Testimonials.css';

const StarRating = ({ rating }) => (
  <div className="testimonial__stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`testimonial__star ${i < rating ? 'testimonial__star--filled' : ''}`}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Customer Love</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Over 10,000 happy customers have trusted RentLook for their special moments
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`testimonial__card ${index === activeIndex ? 'testimonial__card--featured' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Large quote decoration */}
              <div className="testimonial__quote-icon">"</div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <p className="testimonial__review">{t.review}</p>

              {/* Tags */}
              <div className="testimonial__tags">
                <span className="testimonial__tag">{t.occasion}</span>
                <span className="testimonial__tag">👗 {t.outfit}</span>
              </div>

              {/* Author */}
              <div className="testimonial__author">
                <div
                  className="testimonial__avatar"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className="testimonial__author-info">
                  <div className="testimonial__author-name">{t.name}</div>
                  <div className="testimonial__author-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {t.location}
                  </div>
                </div>
                <div className="testimonial__verified">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#7c3aed20" stroke="#a78bfa" strokeWidth="1.5"/>
                  </svg>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="testimonials__nav">
          <button className="testimonials__arrow" onClick={handlePrev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button className="testimonials__arrow" onClick={handleNext} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Trust row */}
        <div className="testimonials__trust">
          <div className="testimonials__trust-item trust--purple">
            <span>🔒</span><span>Secure Payments</span>
          </div>
          <div className="testimonials__trust-divider"></div>
          <div className="testimonials__trust-item trust--blue">
            <span>♻️</span><span>Eco-Friendly Packaging</span>
          </div>
          <div className="testimonials__trust-divider"></div>
          <div className="testimonials__trust-item trust--teal">
            <span>⚡</span><span>Same-Day Delivery</span>
          </div>
          <div className="testimonials__trust-divider"></div>
          <div className="testimonials__trust-item trust--purple">
            <span>🏆</span><span>Award Winning Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
