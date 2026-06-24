import React, { useEffect, useRef } from 'react';
import { stats } from '../../data';
import heroBanner from '../../assets/hero_banner.png';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero__particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${10 + Math.random() * 15}s`;
      particle.style.width = `${4 + Math.random() * 8}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${0.2 + Math.random() * 0.5}`;
      container.appendChild(particle);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background particles */}
      <div className="hero__particles" ref={particlesRef}></div>

      {/* Background gradient orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <span>India's #1 Fashion Rental Platform</span>
          </div>

          <h1 className="hero__title">
            Wear Premium,
            <br />
            <span className="hero__title-highlight">Pay Less.</span>
            <br />
            <span className="hero__title-sub">Rent. Shine. Return.</span>
          </h1>

          <p className="hero__description">
            Discover thousands of designer outfits for every occasion — weddings, parties, 
            festivals &amp; corporate events. Fresh, dry-cleaned, and delivered to your door.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary btn-lg hero__btn-primary">
              <span>Explore Collection</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Browse All
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero__stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrapper">
          <div className="hero__image-glow"></div>
          <div className="hero__image-frame">
            <img
              src={heroBanner}
              alt="Premium fashion rental - elegant woman in evening gown"
              className="hero__image"
            />
            <div className="hero__image-overlay"></div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
