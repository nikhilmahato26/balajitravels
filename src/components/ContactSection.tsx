import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { businessInfo } from '../data/content';
import { vehicles } from '../data/vehicles';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Bangalore Sightseeing');
  const [vehicle, setVehicle] = useState('Toyota Innova');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getWhatsAppMessage = () => {
    const text = `*Travel Enquiry - Balaji Tourist*
• Name: ${name || 'Traveler'}
• Phone: ${phone || 'Not provided'}
• Service: ${service}
• Vehicle: ${vehicle}
• Travel Date: ${travelDate || 'Flexible'}
• Notes: ${message || 'Please share availability and details.'}

Location: Bangalore, Karnataka, India`;
    return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppMessage(), '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Enquire Today</span>
          </div>
          <h2 className="section-title">CONTACT BALAJI TOURIST</h2>
          <p className="section-subtitle">
            Get in touch to check vehicle availability and discuss your travel requirements in Bangalore and beyond.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">{businessInfo.name}</h3>
            <p className="contact-info-desc">
              Bangalore Tourist Transportation &amp; Car Rental Service. Available for city sightseeing, family journeys and outstation travel.
            </p>

            <div className="contact-details-list">
              <a href={businessInfo.phoneTel} className="contact-detail-row">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Phone Enquiry</span>
                  <span className="detail-value">{businessInfo.phone}</span>
                </div>
              </a>

              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-row contact-whatsapp-row"
              >
                <div className="contact-icon-box whatsapp-box">
                  <MessageCircle size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">WhatsApp Assistance</span>
                  <span className="detail-value">{businessInfo.phone}</span>
                </div>
              </a>

              <a href={businessInfo.emailMailto} className="contact-detail-row">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Email Us</span>
                  <span className="detail-value">{businessInfo.email}</span>
                </div>
              </a>

              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Base Location</span>
                  <span className="detail-value">{businessInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-availability-banner">
              <Clock size={18} className="avail-icon" />
              <span>Contact us for vehicle availability and travel enquiries.</span>
            </div>
          </div>

          {/* Enquiry Form Card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={52} className="success-check-icon" />
                <h3>Thank You for Contacting Balaji Tourist!</h3>
                <p>
                  We have received your enquiry for <strong>{vehicle}</strong> ({service}). Our team will reach out to you shortly at <strong>{phone || 'your phone number'}</strong>.
                </p>
                <div className="success-buttons">
                  <a href={businessInfo.phoneTel} className="btn btn-primary">
                    <Phone size={16} />
                    <span>Call {businessInfo.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>Open on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form">
                <h3 className="form-heading">Send a Travel Enquiry</h3>
                <p className="form-subheading">Fill in your travel plan or click WhatsApp for instant messaging.</p>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Mobile / Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 Mobile Number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service">Travel Requirement</label>
                    <select
                      id="contact-service"
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

                  <div className="form-group">
                    <label htmlFor="contact-vehicle">Preferred Vehicle</label>
                    <select
                      id="contact-vehicle"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                    >
                      <option value="Any Available Vehicle">Any Available Vehicle</option>
                      {vehicles.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-span">
                    <label htmlFor="contact-date">Tentative Travel Date</label>
                    <input
                      id="contact-date"
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group full-span">
                    <label htmlFor="contact-message">Travel Details or Destination</label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention your destinations, pickup location or specific travel requirements..."
                    ></textarea>
                  </div>
                </div>

                <div className="form-actions-bar">
                  <button type="submit" className="btn btn-primary contact-submit-btn">
                    <Send size={16} />
                    <span>Submit Travel Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="btn btn-whatsapp contact-whatsapp-btn"
                  >
                    <MessageCircle size={16} />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
