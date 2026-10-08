import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { heroContent, businessInfo } from '../data/content';
import './Hero.css';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-wrapper">
        <img
          src="/images/hero_banner.jpg"
          alt="Toyota Innova tourist car on scenic road near Bangalore"
          className="hero-bg-image"
          fetchPriority="high"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow-badge">
            <Sparkles size={14} className="hero-eyebrow-icon" />
            <span>{heroContent.eyebrow}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">{heroContent.heading}</h1>

          {/* Supporting Text */}
          <p className="hero-subtitle">{heroContent.supportingText}</p>

          {/* CTAs */}
          <div className="hero-actions">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-lg hero-cta-primary"
            >
              <span>{heroContent.primaryCta}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={businessInfo.phoneTel}
              className="btn btn-secondary btn-lg hero-cta-call"
            >
              <Phone size={18} />
              <span>{heroContent.secondaryCta}</span>
              <span className="hero-phone-number">({businessInfo.phone})</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero-trust-bar">
            <div className="hero-trust-pill">
              <MapPin size={15} className="trust-icon" />
              <span>Based in Bangalore</span>
            </div>
            <div className="hero-trust-pill">
              <ShieldCheck size={15} className="trust-icon" />
              <span>Dedicated Tourist Vehicles</span>
            </div>
            <div className="hero-trust-pill">
              <span className="trust-dot"></span>
              <span>Innova • Etios • Swift Dzire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
