import React, { useState } from 'react';
import {
  Phone,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';
import { tirupatiPackage, businessInfo } from '../data/content';
import './TirupatiPackage.css';

interface TirupatiPackageProps {
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const TirupatiPackage: React.FC<TirupatiPackageProps> = ({ onOpenEnquiry }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % tirupatiPackage.gallery.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + tirupatiPackage.gallery.length) % tirupatiPackage.gallery.length);
  };

  const whatsAppPackageUrl = `${businessInfo.whatsappUrl}?text=${encodeURIComponent(
    'Hello Balaji Trip, I would like to book / enquire about the Tirupati Darshan Package From Bangalore (Volvo & AC Sleeper). Please provide available dates, seat availability and fare details.'
  )}`;

  return (
    <section id="tirupati-package" className="tirupati-section">
      <div className="container">
        {/* Top Header */}
        <div className="tirupati-header">
          <div className="tirupati-eyebrow">
            <Sparkles size={16} className="sparkle-icon" />
            <span>{tirupatiPackage.eyebrow}</span>
          </div>
          <h2 className="tirupati-main-title">{tirupatiPackage.title}</h2>
          <p className="tirupati-brand-sub">
            {tirupatiPackage.subtitle}
          </p>
        </div>

        {/* Main Side-by-Side Showcase */}
        <div className="tirupati-grid">
          {/* Left Column: Package Details & Inclusions */}
          <div className="tirupati-card-left">
            <div className="package-card-header">
              <div className="package-badge-row">
                <span className="priority-pill">
                  <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  Most Popular Darshan
                </span>
                <span className="departure-pill">
                  <Clock size={13} />
                  Daily 8:00 PM Departure
                </span>
              </div>
              <h3 className="inclusions-heading">{tirupatiPackage.includesHeading}</h3>
            </div>

            {/* Inclusions List (styled rounded pills) */}
            <div className="inclusions-list">
              {tirupatiPackage.inclusions.map((item, idx) => (
                <div key={idx} className="inclusion-pill">
                  <div className="inclusion-emoji-box">
                    <span className="inclusion-emoji">{item.icon}</span>
                  </div>
                  <div className="inclusion-text">
                    <span className="inclusion-title">{item.title}</span>
                    <span className="inclusion-desc">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Boarding Points Information Box */}
            <div className="boarding-info-card">
              <div className="boarding-title-row">
                <MapPin size={16} className="pin-icon" />
                <span className="boarding-main-title">{tirupatiPackage.boardingTitle}</span>
              </div>
              <p className="boarding-stops-text">{tirupatiPackage.boardingRoute}</p>
              
              <div className="boarding-pills-wrap">
                {tirupatiPackage.boardingPointsList.map((stop, i) => (
                  <span key={i} className="boarding-pill-tag">
                    <strong>{stop.point}</strong> {stop.time}
                  </span>
                ))}
              </div>
            </div>

            {/* Green Trust Guarantee Line */}
            <div className="trust-guarantee-bar">
              <ShieldCheck size={18} className="trust-check-icon" />
              <span className="trust-text">{tirupatiPackage.trustLine}</span>
            </div>

            {/* Action Buttons: Call Now (Red), Book Now (Dark), WhatsApp (Green) */}
            <div className="tirupati-cta-row">
              <a
                href={businessInfo.phoneTel}
                className="btn-tirupati btn-call-now"
                aria-label="Call Now for Tirupati Package"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry('Tirupati Darshan Package (Daily Volvo / Sleeper)')}
                className="btn-tirupati btn-book-now"
                aria-label="Book Tirupati Darshan Package Now"
              >
                <Calendar size={18} />
                <span>Book Now</span>
              </button>

              <a
                href={whatsAppPackageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tirupati btn-whatsapp-now"
                aria-label="WhatsApp Booking for Tirupati Package"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Balaji Volvo Bus Showcase & Slider */}
          <div className="tirupati-card-right">
            <div className="bus-gallery-container">
              <div className="bus-slide-frame">
                <img
                  src={tirupatiPackage.gallery[activeSlide].image}
                  alt={tirupatiPackage.gallery[activeSlide].title}
                  className="bus-slide-image"
                />
                
                <span className="bus-badge-floating">
                  {tirupatiPackage.gallery[activeSlide].tag}
                </span>

                {/* Slider Navigation Arrows */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="slider-arrow arrow-left"
                  aria-label="Previous bus image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="slider-arrow arrow-right"
                  aria-label="Next bus image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Slide Caption & Thumbnail Selector */}
              <div className="bus-slide-caption-bar">
                <div className="slide-meta">
                  <h4 className="slide-title">{tirupatiPackage.gallery[activeSlide].title}</h4>
                  <p className="slide-desc">{tirupatiPackage.gallery[activeSlide].subtitle}</p>
                </div>
                <div className="slider-dots">
                  {tirupatiPackage.gallery.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveSlide(dotIdx)}
                      className={`slider-dot ${activeSlide === dotIdx ? 'active' : ''}`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Trip Highlights Table */}
              <div className="trip-quick-specs">
                <div className="spec-item">
                  <div className="spec-icon-circle">
                    <Clock size={16} />
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Bangalore Departure</span>
                    <span className="spec-val">Daily 8:00 PM</span>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Darshan Duration</span>
                    <span className="spec-val">4 to 5 Hours</span>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon-circle">
                    <Users size={16} />
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Special Support</span>
                    <span className="spec-val">Guide &amp; Escort</span>
                  </div>
                </div>
              </div>

              {/* Itinerary Quick Flow */}
              <div className="itinerary-quick-box">
                <div className="itinerary-step-badge">Quick Itinerary</div>
                <p className="itinerary-summary-text">{tirupatiPackage.itinerarySummary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
