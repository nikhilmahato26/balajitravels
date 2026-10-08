import React from 'react';
import { Landmark, Compass, Users, Car, MapPin, Sliders, ArrowRight } from 'lucide-react';
import { servicesContent } from '../data/content';
import './ServicesSection.css';

interface ServicesSectionProps {
  onOpenEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquiry }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'bangalore-sightseeing':
        return <Landmark size={28} className="service-icon" />;
      case 'outstation-travel':
        return <Compass size={28} className="service-icon" />;
      case 'family-travel':
        return <Users size={28} className="service-icon" />;
      case 'tourist-transportation':
        return <Car size={28} className="service-icon" />;
      case 'local-travel':
        return <MapPin size={28} className="service-icon" />;
      case 'customized-travel':
        return <Sliders size={28} className="service-icon" />;
      default:
        return <Car size={28} className="service-icon" />;
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Tourist Transportation</span>
          </div>
          <h2 className="section-title">{servicesContent.heading}</h2>
          <p className="section-subtitle">{servicesContent.subheading}</p>
        </div>

        <div className="services-grid">
          {servicesContent.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <button
                type="button"
                onClick={() => onOpenEnquiry(service.title)}
                className="service-enquire-btn"
                aria-label={`Enquire about ${service.title}`}
              >
                <span>Enquire Now</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
