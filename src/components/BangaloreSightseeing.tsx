import React from 'react';
import { Landmark, ArrowRight, Info, Compass } from 'lucide-react';
import { sightseeingContent } from '../data/content';
import './BangaloreSightseeing.css';

interface BangaloreSightseeingProps {
  onOpenEnquiry: (serviceName: string) => void;
}

export const BangaloreSightseeing: React.FC<BangaloreSightseeingProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="sightseeing" className="section sightseeing-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} />
            <span>Bangalore Tourism Inspiration</span>
          </div>
          <h2 className="section-title">{sightseeingContent.heading}</h2>
          <p className="section-subtitle">{sightseeingContent.supportingText}</p>
        </div>

        {/* Landmarks Showcase Grid */}
        <div className="sightseeing-grid">
          {sightseeingContent.spots.map((spot) => (
            <div key={spot.id} className="sightseeing-card">
              <div className="sightseeing-image-box">
                <img
                  src={spot.image}
                  alt={`${spot.name} landmark Bangalore tourist travel`}
                  className="sightseeing-img"
                  loading="lazy"
                />
                <span className="sightseeing-tag">{spot.category}</span>
              </div>
              <div className="sightseeing-card-body">
                <div className="spot-title-row">
                  <Landmark size={18} className="spot-icon" />
                  <h3 className="spot-name">{spot.name}</h3>
                </div>
                <p className="spot-desc">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sightseeing Inspiration Disclaimer & CTA Bar */}
        <div className="sightseeing-cta-banner">
          <div className="sightseeing-notice">
            <Info size={20} className="notice-icon" />
            <p>
              <strong>Sightseeing Inspiration:</strong> Discover Bengaluru landmarks comfortably with our available tourist vehicles. Customized routes, city trips and availability are arranged according to your travel requirements.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Bangalore Sightseeing')}
            className="btn btn-primary btn-lg sightseeing-main-cta"
            aria-label="Enquire for Bangalore Sightseeing"
          >
            <span>{sightseeingContent.ctaText}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
