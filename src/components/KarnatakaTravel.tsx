import React from 'react';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { karnatakaContent } from '../data/content';
import './KarnatakaTravel.css';

interface KarnatakaTravelProps {
  onOpenEnquiry: (serviceName: string) => void;
}

export const KarnatakaTravel: React.FC<KarnatakaTravelProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="karnataka" className="section karnataka-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} />
            <span>Travel Beyond Bangalore</span>
          </div>
          <h2 className="section-title">{karnatakaContent.heading}</h2>
          <p className="section-subtitle">{karnatakaContent.supportingText}</p>
        </div>

        <div className="karnataka-destinations-grid">
          {karnatakaContent.destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <div className="destination-img-box">
                <img
                  src={dest.image}
                  alt={`${dest.title} Karnataka outstation tourist travel`}
                  className="destination-img"
                  loading="lazy"
                />
                <div className="destination-overlay-gradient"></div>
                <div className="destination-title-overlay">
                  <div className="dest-tag-row">
                    <MapPin size={14} />
                    <span>Karnataka Outstation</span>
                  </div>
                  <h3 className="dest-heading">{dest.title}</h3>
                  <span className="dest-subheading">{dest.subtitle}</span>
                </div>
              </div>
              <div className="destination-body">
                <p className="dest-desc">{dest.description}</p>
                <div className="dest-availability-note">
                  <span>Flexible itineraries • Dedicated vehicle options</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="karnataka-cta-wrapper">
          <button
            onClick={() => onOpenEnquiry('Outstation Travel')}
            className="btn btn-primary btn-lg karnataka-plan-btn"
            aria-label="Plan My Journey"
          >
            <span>{karnatakaContent.ctaText}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
