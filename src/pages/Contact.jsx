import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: 'general',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will respond within one business day.');
    setFormData({ name: '', email: '', company: '', serviceType: 'general', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Contact</p>
          <h1>Contact Us</h1>
          <p className="page-hero-sub">Get in touch for a quote or to schedule a delivery.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <div className="contact-phone-wrap">
              <Phone size={28} strokeWidth={1.75} className="contact-phone-icon" aria-hidden />
              <a href="tel:612-205-1459" className="contact-phone-link">612-205-1459</a>
            </div>
            <p className="contact-note">We'll respond within one business day.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Request Delivery</Link>
          </div>
          <div className="contact-form-wrap">
            <h2>Send a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company (optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="serviceType">Service type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="general">General inquiry</option>
                  <option value="same-day">Same-day delivery</option>
                  <option value="scheduled">Scheduled routes</option>
                  <option value="medical">Medical delivery</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                <Send size={20} strokeWidth={2} aria-hidden />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container contact-area-wrap">
          <MapPin size={24} strokeWidth={1.75} className="contact-area-icon" aria-hidden />
          <p className="contact-area">Serving Minnesota and the Twin Cities.</p>
        </div>
      </section>
    </>
  );
}
