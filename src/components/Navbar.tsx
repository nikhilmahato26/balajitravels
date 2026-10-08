import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Menu, X } from 'lucide-react';
import { businessInfo } from '../data/content';
import './Navbar.css';

interface NavbarProps {
  onOpenEnquiry: (initialData?: { service?: string; vehicle?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={14} className="top-bar-icon" />
              <span>{businessInfo.location}</span>
            </span>
            <a href={businessInfo.emailMailto} className="top-bar-item top-bar-link">
              <Mail size={14} className="top-bar-icon" />
              <span>{businessInfo.email}</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href={businessInfo.phoneTel} className="top-bar-item top-bar-link top-bar-phone">
              <Phone size={14} className="top-bar-icon" />
              <span>{businessInfo.phone}</span>
            </a>
            <a
              href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent('Hello Balaji Tourist, I would like to enquire about vehicle availability for travel in Bangalore / Karnataka.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-item top-bar-whatsapp"
            >
              <MessageCircle size={14} className="top-bar-icon" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="brand-logo"
            aria-label="Balaji Tourist Home"
          >
            <div className="brand-logo-badge">
              <img
                src="/images/logo.png"
                alt="Balaji Tourist Logo"
                className="brand-logo-img"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-link">
              Home
            </a>
            <a href="#vehicles" onClick={(e) => handleNavClick(e, 'vehicles')} className="nav-link">
              Vehicles
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link">
              Services
            </a>
            <a href="#sightseeing" onClick={(e) => handleNavClick(e, 'sightseeing')} className="nav-link">
              Sightseeing
            </a>
            <a href="#karnataka" onClick={(e) => handleNavClick(e, 'karnataka')} className="nav-link">
              Karnataka Travel
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">
              About
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <a href={businessInfo.phoneTel} className="btn-header-call" aria-label="Call Balaji Tourist">
              <Phone size={16} />
              <span>{businessInfo.phone}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn btn-primary btn-sm header-book-btn"
            >
              Book Your Ride
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-drawer-brand">
              <div className="brand-logo-badge">
                <img
                  src="/images/logo.png"
                  alt="Balaji Tourist Logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
            <div className="mobile-nav-links">
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="mobile-nav-link">
                Home
              </a>
              <a href="#vehicles" onClick={(e) => handleNavClick(e, 'vehicles')} className="mobile-nav-link">
                Our Vehicles
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="mobile-nav-link">
                Tourist Services
              </a>
              <a href="#sightseeing" onClick={(e) => handleNavClick(e, 'sightseeing')} className="mobile-nav-link">
                Bangalore Sightseeing
              </a>
              <a href="#karnataka" onClick={(e) => handleNavClick(e, 'karnataka')} className="mobile-nav-link">
                Discover Karnataka
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-nav-link">
                About Balaji Tourist
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mobile-nav-link">
                Contact &amp; Location
              </a>
            </div>

            <div className="mobile-nav-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn btn-primary btn-lg full-width"
              >
                Book Your Ride
              </button>
              <a href={businessInfo.phoneTel} className="btn btn-call full-width">
                <Phone size={18} />
                <span>Call {businessInfo.phone}</span>
              </a>
              <a
                href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent('Hello Balaji Tourist, I would like to enquire about vehicle booking.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp full-width"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
