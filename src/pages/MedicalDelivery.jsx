import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Heart, Clock } from 'lucide-react';
import './MedicalDelivery.css';

const medicalItems = [
  'Medical supplies and equipment',
  'Laboratory materials',
  'Pharmaceuticals',
  'Medical records',
];

const trustItems = [
  { title: 'Reliability', description: 'On-time pickups and deliveries you can count on.', Icon: ShieldCheck },
  { title: 'Care', description: 'Proper handling of sensitive materials and records.', Icon: Heart },
  { title: 'Timeliness', description: 'Same-day and scheduled options for urgent needs.', Icon: Clock },
];

export default function MedicalDelivery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / Medical Delivery</p>
          <h1>Medical Deliveries</h1>
          <p className="page-hero-sub">Safe, compliant delivery of medical supplies, lab materials, and pharmaceuticals across Minnesota.</p>
        </div>
      </section>

      <section className="section">
        <div className="container medical-content">
          <div className="medical-visual">
            <img src="/Medicle%20corior.webp" alt="Medical courier delivery" className="medical-intro-img" />
          </div>
          <div className="medical-copy">
            <h2>What We Deliver</h2>
            <p>
              BioCare Express handles sensitive medical and laboratory materials with care and reliability. We understand the importance of timeliness and compliance for healthcare providers across Minnesota.
            </p>
            <ul className="medical-list">
              {medicalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Us for Medical Delivery</h2>
          <div className="medical-trust">
            {trustItems.map(({ title, description, Icon }) => (
              <div key={title} className="medical-trust-item">
                <div className="medical-trust-icon">
                  <Icon size={28} strokeWidth={1.75} aria-hidden />
                </div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cta-strip">
        <div className="container cta-strip-inner">
          <p className="cta-strip-text">Request a medical delivery — call <a href="tel:612-205-1459">612-205-1459</a> or send a message.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Request a Medical Delivery</Link>
        </div>
      </section>
    </>
  );
}
