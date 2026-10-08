import React from 'react';
import { MapPin, Car, Users, Compass } from 'lucide-react';
import { heroHighlights } from '../data/content';
import './HeroHighlights.css';

export const HeroHighlights: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Bangalore Based':
        return <MapPin size={26} className="highlight-icon" />;
      case 'Comfortable Vehicles':
        return <Car size={26} className="highlight-icon" />;
      case 'Family Travel':
        return <Users size={26} className="highlight-icon" />;
      case 'Outstation Travel':
        return <Compass size={26} className="highlight-icon" />;
      default:
        return <Car size={26} className="highlight-icon" />;
    }
  };

  return (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-grid">
          {heroHighlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <div className="highlight-icon-box">{getIcon(item.title)}</div>
              <div className="highlight-body">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
