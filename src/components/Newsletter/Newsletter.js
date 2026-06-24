import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="newsletter section" id="newsletter">
      <div className="container">
        {/* Main Newsletter Box */}
        <div className="newsletter__box">
          {/* Decoration */}
          <div className="newsletter__orb newsletter__orb--1"></div>
          <div className="newsletter__orb newsletter__orb--2"></div>

          <div className="newsletter__content">
            <div className="newsletter__icon">💌</div>
            <span className="section-tag">Stay Updated</span>
            <h2 className="newsletter__title">
              Get Exclusive Deals &amp; <br />
              <span className="gradient-text">New Arrivals First</span>
            </h2>
            <p className="newsletter__subtitle">
              Join 50,000+ fashion lovers who get exclusive rental deals, styling tips, 
              and new collection alerts delivered weekly.
            </p>

            {!submitted ? (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <div className="newsletter__input-wrapper">
                  <svg className="newsletter__input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input
                    type="email"
                    className="newsletter__input"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-teal newsletter__submit ${loading ? 'newsletter__submit--loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="newsletter__spinner"></span>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="newsletter__success">
                <div className="newsletter__success-icon">🎉</div>
                <h3>You're In!</h3>
                <p>Welcome to the RentLook family! Check your inbox for a surprise welcome discount.</p>
              </div>
            )}

            <p className="newsletter__privacy">
              🔒 No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>

            {/* Benefits */}
            <div className="newsletter__benefits">
              <div className="newsletter__benefit">
                <span>✅</span>
                <span>Exclusive member discounts</span>
              </div>
              <div className="newsletter__benefit">
                <span>✅</span>
                <span>Early access to new collections</span>
              </div>
              <div className="newsletter__benefit">
                <span>✅</span>
                <span>Weekly styling tips & lookbooks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="newsletter__contacts">
          <div className="newsletter__contact-card">
            <div className="newsletter__contact-icon">📞</div>
            <div>
              <div className="newsletter__contact-label">Call Us</div>
              <div className="newsletter__contact-value">+91 98765 43210</div>
            </div>
          </div>
          <div className="newsletter__contact-card">
            <div className="newsletter__contact-icon">💬</div>
            <div>
              <div className="newsletter__contact-label">WhatsApp</div>
              <div className="newsletter__contact-value">Chat with Us</div>
            </div>
          </div>
          <div className="newsletter__contact-card">
            <div className="newsletter__contact-icon">✉️</div>
            <div>
              <div className="newsletter__contact-label">Email</div>
              <div className="newsletter__contact-value">hello@rentlook.in</div>
            </div>
          </div>
          <div className="newsletter__contact-card">
            <div className="newsletter__contact-icon">🕐</div>
            <div>
              <div className="newsletter__contact-label">Support Hours</div>
              <div className="newsletter__contact-value">24/7 Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
