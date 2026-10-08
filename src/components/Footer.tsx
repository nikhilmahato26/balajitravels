import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { businessInfo, servicesContent } from '../data/content';
import { vehicles } from '../data/vehicles';
import './Footer.css';

interface FooterProps {
  onOpenEnquiry: (vehicleName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-row">
              <div className="footer-logo-badge">
                <img
                  src="/images/logo.png"
                  alt="BTP Logo"
                  className="footer-logo-img"
                />
              </div>
              <span className="footer-brand-name">{businessInfo.name}</span>
            </div>
            <p className="footer-brand-description">
              {businessInfo.tagline}. Comfortable tourist transportation from Bangalore for city sightseeing, family journeys and outstation travel.
            </p>
            <div className="footer-quick-badge">
              <span>Contact us for availability</span>
            </div>
          </div>

          {/* Tourist Fleet Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Vehicles</h4>
            <ul className="footer-links-list">
              {vehicles.map((v) => (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(v.name)}
                    className="footer-link-btn"
                  >
                    {v.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourist Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Tourist Services</h4>
            <ul className="footer-links-list">
              {servicesContent.services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="footer-link"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Business Information</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-c-icon" />
                <span>{businessInfo.location}</span>
              </div>
              <a href={businessInfo.phoneTel} className="footer-contact-item footer-c-link">
                <Phone size={16} className="footer-c-icon" />
                <span>{businessInfo.phone}</span>
              </a>
              <a
                href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent('Hello BTP, I would like to enquire about vehicle booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item footer-c-link footer-whatsapp-link"
              >
                <MessageCircle size={16} className="footer-c-icon" />
                <span>WhatsApp: {businessInfo.phone}</span>
              </a>
              <a href={businessInfo.emailMailto} className="footer-contact-item footer-c-link">
                <Mail size={16} className="footer-c-icon" />
                <span>{businessInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom-strip">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>{businessInfo.name}</strong>. All rights reserved. Bangalore, Karnataka, India.
          </p>

          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
