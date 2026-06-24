import React from 'react';
import { steps } from '../../data';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="hiw section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Renting your dream outfit is as easy as 1-2-3-4. From browsing to returning,
            we've made every step seamless.
          </p>
        </div>

        <div className="hiw__grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="hiw__step"
              style={{
                '--step-color':        step.color,
                '--step-color-subtle': step.colorSubtle,
                '--step-color-border': step.colorBorder,
                '--step-color-shadow': step.colorShadow,
              }}
            >
              {/* Connector arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hiw__connector">
                  <div className="hiw__connector-line"></div>
                  <span className="hiw__connector-arrow">›</span>
                </div>
              )}

              {/* Step number */}
              <div className="hiw__step-number">
                {String(step.id).padStart(2, '0')}
              </div>

              {/* Icon circle */}
              <div className="hiw__step-icon">
                <span>{step.icon}</span>
                <div className="hiw__step-icon-ring"></div>
              </div>

              {/* Text */}
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.description}</p>

              {/* Background glow */}
              <div className="hiw__step-glow"></div>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="hiw__banner">
          <div className="hiw__banner-content">
            <div className="hiw__banner-icon">🎉</div>
            <div>
              <h3 className="hiw__banner-title">First Rental 20% Off!</h3>
              <p className="hiw__banner-subtitle">
                Use code <strong>FIRSTLOOK</strong> at checkout. Valid for all categories.
              </p>
            </div>
          </div>
          <button className="btn btn-primary">Claim Offer Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
