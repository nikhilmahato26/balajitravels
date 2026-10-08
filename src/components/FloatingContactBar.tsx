import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { businessInfo } from '../data/content';
import './FloatingContactBar.css';

interface FloatingContactBarProps {
  onOpenEnquiry: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenEnquiry }) => {
  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="floating-actions-desktop">
        <a
          href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent('Hello BTP, I would like to enquire about vehicle booking.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Chat with BTP on WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="floating-tooltip">WhatsApp Us</span>
        </a>

        <a
          href={businessInfo.phoneTel}
          className="floating-btn floating-call"
          aria-label="Call BTP"
        >
          <Phone size={24} />
          <span className="floating-tooltip">Call {businessInfo.phone}</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="mobile-bottom-bar">
        <a
          href={businessInfo.phoneTel}
          className="mobile-bar-btn mobile-call-btn"
          aria-label="Call Now"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        <a
          href={`${businessInfo.whatsappUrl}?text=${encodeURIComponent('Hello BTP, I would like to enquire about booking a vehicle in Bangalore.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn mobile-whatsapp-btn"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="mobile-bar-btn mobile-book-btn"
          aria-label="Book Ride"
        >
          <Calendar size={18} />
          <span>Book Ride</span>
        </button>
      </div>
    </>
  );
};
