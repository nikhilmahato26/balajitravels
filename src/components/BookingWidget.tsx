import React, { useState } from 'react';
import { Calendar, MapPin, Car, Phone, User, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/content';
import { vehicles } from '../data/vehicles';
import './BookingWidget.css';

interface BookingWidgetProps {
  onSuccess?: () => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = () => {
  const [tripType, setTripType] = useState<'Bangalore Sightseeing' | 'Outstation Travel' | 'Local Travel' | 'Customized Travel'>('Bangalore Sightseeing');
  const [pickup, setPickup] = useState('Bangalore');
  const [destination, setDestination] = useState('Bangalore Sightseeing Tour');
  const [selectedVehicle, setSelectedVehicle] = useState('Toyota Innova');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTripTypeChange = (type: typeof tripType) => {
    setTripType(type);
    if (type === 'Bangalore Sightseeing') {
      setDestination('Bangalore Sightseeing (Vidhana Soudha, Palace, Lalbagh)');
    } else if (type === 'Outstation Travel') {
      setDestination('Mysore / Coorg / Karnataka Outstation');
    } else if (type === 'Local Travel') {
      setDestination('Bangalore City Local Travel');
    } else {
      setDestination('Customized Karnataka / South India Journey');
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Travel Enquiry - BTP*
• Service: ${tripType}
• Pickup: ${pickup || 'Bangalore'}
• Destination / Plan: ${destination}
• Vehicle: ${selectedVehicle}
• Date: ${date}
• Name: ${name || 'Traveler'}
• Phone: ${phone || 'Not provided'}

Please let me know vehicle availability and travel details. Thank you!`;
    return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppMessage(), '_blank');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="booking-widget-wrapper">
      <div className="container">
        <div className="booking-widget-card">
          {/* Widget Header with Trip Type Tabs */}
          <div className="booking-widget-tabs">
            <button
              type="button"
              className={`booking-tab-btn ${tripType === 'Bangalore Sightseeing' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('Bangalore Sightseeing')}
            >
              Bangalore Sightseeing
            </button>
            <button
              type="button"
              className={`booking-tab-btn ${tripType === 'Outstation Travel' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('Outstation Travel')}
            >
              Outstation Travel
            </button>
            <button
              type="button"
              className={`booking-tab-btn ${tripType === 'Local Travel' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('Local Travel')}
            >
              Local Travel
            </button>
            <button
              type="button"
              className={`booking-tab-btn ${tripType === 'Customized Travel' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('Customized Travel')}
            >
              Customized Travel
            </button>
          </div>

          {/* Form Body */}
          {isSubmitted ? (
            <div className="booking-success-box">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>Enquiry Received for {selectedVehicle}!</h3>
              <p>
                Thank you, <strong>{name || 'Valued Traveler'}</strong>. We have noted your enquiry for{' '}
                <strong>{tripType}</strong> on <strong>{date}</strong>. Our team will contact you at{' '}
                <strong>{phone || 'your phone'}</strong> regarding vehicle availability.
              </p>
              <div className="success-actions">
                <a href={businessInfo.phoneTel} className="btn btn-primary">
                  <Phone size={18} />
                  <span>Call {businessInfo.phone} Now</span>
                </a>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline-dark btn-sm"
                >
                  Make Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDirectSubmit} className="booking-widget-form">
              <div className="booking-fields-grid">
                {/* Pickup Location */}
                <div className="booking-field-group">
                  <label htmlFor="widget-pickup" className="booking-field-label">
                    <MapPin size={15} className="field-icon" />
                    <span>Pickup Location</span>
                  </label>
                  <input
                    id="widget-pickup"
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Bangalore or Pickup Area"
                    className="booking-input"
                    required
                  />
                </div>

                {/* Destination / Route */}
                <div className="booking-field-group">
                  <label htmlFor="widget-dest" className="booking-field-label">
                    <MapPin size={15} className="field-icon" />
                    <span>Destination / Travel Plan</span>
                  </label>
                  <input
                    id="widget-dest"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination or Sightseeing Spots"
                    className="booking-input"
                    required
                  />
                </div>

                {/* Vehicle Selection */}
                <div className="booking-field-group">
                  <label htmlFor="widget-vehicle" className="booking-field-label">
                    <Car size={15} className="field-icon" />
                    <span>Vehicle Option</span>
                  </label>
                  <select
                    id="widget-vehicle"
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="booking-select"
                  >
                    <option value="Any Available Vehicle">Any Available Vehicle</option>
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Journey Date */}
                <div className="booking-field-group">
                  <label htmlFor="widget-date" className="booking-field-label">
                    <Calendar size={15} className="field-icon" />
                    <span>Journey Date</span>
                  </label>
                  <input
                    id="widget-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="booking-input"
                    required
                  />
                </div>

                {/* Passenger Name */}
                <div className="booking-field-group">
                  <label htmlFor="widget-name" className="booking-field-label">
                    <User size={15} className="field-icon" />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="widget-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="booking-input"
                    required
                  />
                </div>

                {/* Contact Phone */}
                <div className="booking-field-group">
                  <label htmlFor="widget-phone" className="booking-field-label">
                    <Phone size={15} className="field-icon" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    id="widget-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Mobile Number"
                    className="booking-input"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="booking-actions-row">
                <div className="booking-hint-text">
                  <span>* Contact us for vehicle availability &amp; travel requirements.</span>
                </div>
                <div className="booking-buttons-group">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn btn-whatsapp booking-cta-whatsapp"
                    title="Send enquiry via WhatsApp"
                  >
                    <MessageCircle size={18} />
                    <span>Enquire via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary booking-cta-submit"
                  >
                    <Send size={18} />
                    <span>Submit Travel Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
