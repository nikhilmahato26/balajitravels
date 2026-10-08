import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { aboutContent, businessInfo } from '../data/content';
import './AboutSection.css';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Card */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <img
                src="/images/vidhana_soudha.jpg"
                alt="BTP Bangalore transportation partner"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-floating-card">
                <div className="about-logo-badge">
                  <img
                    src="/images/logo.png"
                    alt="BTP Logo"
                    className="about-logo-img"
                  />
                </div>
                <div className="floating-card-text">
                  <span className="floating-card-title">{businessInfo.name}</span>
                  <span className="floating-card-sub">Bangalore Tourist Transportation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Narrative */}
          <div className="about-content-column">
            <div className="section-eyebrow">
              <span>About Us</span>
            </div>
            <h2 className="about-title">{aboutContent.heading}</h2>

            <div className="about-paragraphs">
              <p className="about-p1">{aboutContent.paragraph1}</p>
              <p className="about-p2">{aboutContent.paragraph2}</p>
            </div>

            {/* Factual Highlights List */}
            <div className="about-factual-points">
              <div className="factual-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Toyota Innova, Toyota Etios &amp; Maruti Suzuki Swift Dzire fleet options</span>
              </div>
              <div className="factual-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Bangalore city sightseeing &amp; Karnataka outstation travel</span>
              </div>
              <div className="factual-point">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Direct enquiry for vehicle availability and travel requirements</span>
              </div>
            </div>

            {/* Contact Quick Info */}
            <div className="about-contact-strip">
              <div className="strip-item">
                <MapPin size={16} className="strip-icon" />
                <span>{businessInfo.location}</span>
              </div>
              <a href={businessInfo.phoneTel} className="strip-item strip-link">
                <Phone size={16} className="strip-icon" />
                <span>{businessInfo.phone}</span>
              </a>
              <a href={businessInfo.emailMailto} className="strip-item strip-link">
                <Mail size={16} className="strip-icon" />
                <span>{businessInfo.email}</span>
              </a>
            </div>

            <div className="about-actions">
              <button onClick={onOpenEnquiry} className="btn btn-primary">
                Book Your Ride
              </button>
              <a href={businessInfo.phoneTel} className="btn btn-outline-dark">
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
