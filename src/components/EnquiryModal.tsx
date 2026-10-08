import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Phone, CheckCircle2, Car, Calendar, User, MapPin } from 'lucide-react';
import { businessInfo } from '../data/content';
import { vehicles } from '../data/vehicles';
import './EnquiryModal.css';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialVehicle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialVehicle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Bangalore Sightseeing');
  const [vehicle, setVehicle] = useState(initialVehicle || 'Toyota Innova');
  const [pickup, setPickup] = useState('Bangalore');
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialVehicle) setVehicle(initialVehicle);
    setSubmitted(false);
  }, [initialService, initialVehicle, isOpen]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getWhatsAppMessage = () => {
    const text = `*New Travel Enquiry - Balaji Tourist*
• Name: ${name || 'Traveler'}
• Phone: ${phone || 'Not provided'}
• Service: ${service}
• Vehicle: ${vehicle}
• Pickup: ${pickup || 'Bangalore'}
• Date: ${travelDate}
• Requirements: ${notes || 'Please provide availability and details.'}

Location: Bangalore, Karnataka, India`;
    return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppMessage(), '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {submitted ? (
          <div className="modal-success-box">
            <CheckCircle2 size={54} className="modal-success-icon" />
            <h3 className="modal-success-title">Enquiry Received!</h3>
            <p className="modal-success-desc">
              Thank you, <strong>{name || 'Traveler'}</strong>. Your enquiry for <strong>{vehicle}</strong> ({service}) on <strong>{travelDate}</strong> has been logged. We will contact you promptly at <strong>{phone || 'your phone number'}</strong>.
            </p>
            <div className="modal-success-actions">
              <a href={businessInfo.phoneTel} className="btn btn-primary full-width">
                <Phone size={16} />
                <span>Call {businessInfo.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="btn btn-whatsapp full-width"
              >
                <MessageCircle size={16} />
                <span>Open on WhatsApp</span>
              </button>
              <button type="button" onClick={onClose} className="btn btn-outline-dark full-width">
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content-wrapper">
            <div className="modal-header-block">
              <div className="modal-logo-row">
                <div className="modal-logo-badge">
                  <img
                    src="/images/logo.png"
                    alt="Balaji Tourist Logo"
                    className="modal-logo-img"
                  />
                </div>
                <span className="modal-badge">Direct Booking Enquiry</span>
              </div>
              <h3 className="modal-title">Enquire With {businessInfo.name}</h3>
              <p className="modal-subtitle">
                Bangalore Tourist Transportation • Contact us for vehicle availability &amp; travel details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-grid">
                <div className="modal-field">
                  <label htmlFor="modal-name">
                    <User size={14} />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label htmlFor="modal-phone">
                    <Phone size={14} />
                    <span>Mobile Number</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 Mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label htmlFor="modal-vehicle">
                    <Car size={14} />
                    <span>Vehicle Option</span>
                  </label>
                  <select
                    id="modal-vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  >
                    <option value="Any Available Vehicle">Any Available Vehicle</option>
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="modal-field">
                  <label htmlFor="modal-service">
                    <MapPin size={14} />
                    <span>Travel Service</span>
                  </label>
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Bangalore Sightseeing">Bangalore Sightseeing</option>
                    <option value="Outstation Travel">Outstation Travel</option>
                    <option value="Family Travel">Family Travel</option>
                    <option value="Tourist Transportation">Tourist Transportation</option>
                    <option value="Local Travel">Local Travel</option>
                    <option value="Customized Travel">Customized Travel</option>
                  </select>
                </div>

                <div className="modal-field">
                  <label htmlFor="modal-pickup">
                    <MapPin size={14} />
                    <span>Pickup Point</span>
                  </label>
                  <input
                    id="modal-pickup"
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Bangalore or Pickup Area"
                  />
                </div>

                <div className="modal-field">
                  <label htmlFor="modal-date">
                    <Calendar size={14} />
                    <span>Journey Date</span>
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    required
                  />
                </div>

                <div className="modal-field full-width-field">
                  <label htmlFor="modal-notes">Travel Notes / Destinations</label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide destinations or any travel details..."
                  ></textarea>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="btn btn-whatsapp modal-btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button type="submit" className="btn btn-primary modal-btn-submit">
                  <Send size={16} />
                  <span>Submit Travel Enquiry</span>
                </button>
              </div>

              <div className="modal-footer-hint">
                <span>Or call directly: </span>
                <a href={businessInfo.phoneTel} className="modal-phone-link">
                  {businessInfo.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
