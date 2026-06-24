import React from 'react';
import { navLinks } from '../../data';
import { smoothScrollTo } from '../../utils/helpers';
import './Footer.css';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  'Rentals': [
    { label: 'Ethnic Wear', href: '#categories' },
    { label: 'Western Wear', href: '#categories' },
    { label: "Kids' Wear", href: '#categories' },
    { label: 'Bridal Collection', href: '#categories' },
    { label: 'Men\'s Formals', href: '#categories' },
  ],
  'Support': [
    { label: 'FAQs', href: '#newsletter' },
    { label: 'Size Guide', href: '#newsletter' },
    { label: 'Return Policy', href: '#newsletter' },
    { label: 'Damage Protection', href: '#newsletter' },
    { label: 'Contact Us', href: '#newsletter' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    smoothScrollTo(id);
  };

  return (
    <footer className="footer" id="footer">
      {/* Top Section */}
      <div className="container footer__top">
        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">R</div>
            <span className="footer__logo-name">RentLook</span>
          </div>
          <p className="footer__brand-desc">
            India's most trusted premium fashion rental platform. 
            Wear your dream outfit without the lifetime price tag.
          </p>
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="/"
                className="footer__social-btn"
                aria-label={social.name}
                onClick={(e) => e.preventDefault()}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="footer__app-badges">
            <div className="footer__app-badge">
              <span className="footer__app-icon">📱</span>
              <div>
                <div className="footer__app-sub">Download on the</div>
                <div className="footer__app-name">App Store</div>
              </div>
            </div>
            <div className="footer__app-badge">
              <span className="footer__app-icon">🤖</span>
              <div>
                <div className="footer__app-sub">Get it on</div>
                <div className="footer__app-name">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer__column">
            <h4 className="footer__column-title">{title}</h4>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} RentLook. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="footer__legal">
            <a href="/" className="footer__legal-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="footer__legal-dot">•</span>
            <a href="/" className="footer__legal-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span className="footer__legal-dot">•</span>
            <a href="/" className="footer__legal-link" onClick={(e) => e.preventDefault()}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
