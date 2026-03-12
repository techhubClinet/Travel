import { Link } from 'react-router-dom';
import { Clock, CalendarCheck, HeartPulse, ArrowRight } from 'lucide-react';
import './Services.css';

const sameDayOptions = [
  'Direct Service',
  '90 minute delivery',
  '2 hour delivery',
  '3 hour delivery',
  '4 hour delivery',
  'Same-day delivery before 5 PM',
];

const scheduledItems = [
  'Daily document transfers',
  'Inter-office mail delivery',
  'Routine supply transportation',
  'Bank deposits',
  'Medical facility supply routes',
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Services</p>
          <h1>Our Services</h1>
          <p className="page-hero-sub">Delivery options to match your urgency and schedule.</p>
        </div>
      </section>

      <section id="same-day" className="section">
        <div className="container">
          <div className="services-block">
            <div className="services-block-icon">
              <Clock size={40} strokeWidth={1.75} aria-hidden />
            </div>
            <div className="services-block-content">
              <h2>Same-Day On-Demand Delivery</h2>
              <p className="services-intro">Multiple service levels to suit any urgency.</p>
              <ul className="services-option-list">
                {sameDayOptions.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="scheduled" className="section section-alt">
        <div className="container">
          <div className="services-block">
            <div className="services-block-icon">
              <CalendarCheck size={40} strokeWidth={1.75} aria-hidden />
            </div>
            <div className="services-block-content">
              <h2>Scheduled Route Delivery</h2>
              <p className="services-intro">Daily and recurring routes for predictable needs.</p>
              <ul className="services-option-list">
                {scheduledItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="medical" className="section">
        <div className="container">
          <div className="services-block">
            <div className="services-block-icon">
              <HeartPulse size={40} strokeWidth={1.75} aria-hidden />
            </div>
            <div className="services-block-content">
              <h2>Medical Deliveries</h2>
              <p className="services-intro">Safe, compliant delivery of medical supplies, lab materials, and pharmaceuticals.</p>
              <ul className="services-option-list">
                <li>Medical supplies and equipment</li>
                <li>Laboratory materials</li>
                <li>Pharmaceuticals</li>
                <li>Medical records</li>
              </ul>
              <p className="services-cta-wrap">
                <Link to="/services/medical" className="btn btn-primary btn-lg">
                  Learn more about Medical Delivery <ArrowRight size={20} strokeWidth={2} aria-hidden />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="services-carry">We deliver documents, medical supplies, office supplies, parts, mortgage documents, bank deposits, mail, and more.</p>
        </div>
      </section>

      <section className="section section-dark cta-strip">
        <div className="container cta-strip-inner">
          <p className="cta-strip-text">Get a quote or request delivery — call <a href="tel:612-205-1459">612-205-1459</a></p>
          <Link to="/contact" className="btn btn-primary btn-lg">Request Delivery</Link>
        </div>
      </section>
    </>
  );
}
