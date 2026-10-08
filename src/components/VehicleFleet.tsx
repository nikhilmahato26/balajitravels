import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { vehicles, type Vehicle } from '../data/vehicles';
import { businessInfo } from '../data/content';
import './VehicleFleet.css';

interface VehicleFleetProps {
  onOpenEnquiry: (vehicleName: string) => void;
}

export const VehicleFleet: React.FC<VehicleFleetProps> = ({ onOpenEnquiry }) => {
  const getWhatsAppVehicleLink = (v: Vehicle) => {
    const text = `Hello Balaji Tourist, I would like to enquire about the availability of ${v.name} for travel in Bangalore / outstation. Please let me know details.`;
    return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="vehicles" className="section vehicle-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <ShieldCheck size={14} />
            <span>Bangalore Tourist Fleet</span>
          </div>
          <h2 className="section-title">OUR VEHICLES</h2>
          <p className="section-subtitle">
            Choose from our available tourist vehicles for your journey.
          </p>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              {/* Vehicle Image Container */}
              <div className="vehicle-image-wrapper">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} tourist car Bangalore`}
                  className="vehicle-image"
                  loading="lazy"
                />
                <span className="vehicle-category-badge">{vehicle.category}</span>
              </div>

              {/* Vehicle Card Body */}
              <div className="vehicle-body">
                <div className="vehicle-title-row">
                  <h3 className="vehicle-name">{vehicle.name}</h3>
                </div>

                <p className="vehicle-description">{vehicle.description}</p>

                {/* Status Indicator */}
                <div className="vehicle-availability-box">
                  <CheckCircle size={15} className="availability-icon" />
                  <span className="availability-text">{vehicle.availability}</span>
                </div>

                {/* Card CTAs: Enquire, Call, WhatsApp */}
                <div className="vehicle-cta-stack">
                  <button
                    onClick={() => onOpenEnquiry(vehicle.name)}
                    className="btn btn-primary vehicle-btn-enquire"
                    aria-label={`Enquire for ${vehicle.name}`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="vehicle-direct-actions">
                    <a
                      href={businessInfo.phoneTel}
                      className="btn btn-call btn-sm vehicle-btn-call"
                      aria-label={`Call Balaji Tourist for ${vehicle.name}`}
                    >
                      <Phone size={15} />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={getWhatsAppVehicleLink(vehicle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm vehicle-btn-whatsapp"
                      aria-label={`Chat on WhatsApp for ${vehicle.name}`}
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
