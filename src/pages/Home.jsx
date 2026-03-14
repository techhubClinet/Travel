import { Link } from 'react-router-dom';
import { Clock, CalendarCheck, HeartPulse, ShieldCheck, Briefcase, Handshake, Heart, Zap, Users, ArrowRight, FileText, Package, Mail, Truck } from 'lucide-react';
import './Home.css';

const services = [
  {
    title: 'Same-Day On-Demand',
    description: 'From 90-minute to same-day before 5 PM. For urgent documents, supplies, and parts.',
    to: '/services#same-day',
    Icon: Clock,
  },
  {
    title: 'Scheduled Route Delivery',
    description: 'Daily routes, inter-office mail, bank deposits, and supply runs.',
    to: '/services#scheduled',
    Icon: CalendarCheck,
  },
  {
    title: 'Medical Deliveries',
    description: 'Supplies, equipment, lab materials, pharmaceuticals, and medical records.',
    to: '/services/medical',
    Icon: HeartPulse,
  },
];

const values = [
  { label: 'Reliability', Icon: ShieldCheck },
  { label: 'Professionalism', Icon: Briefcase },
  { label: 'Customer Commitment', Icon: Handshake },
  { label: 'Care and Responsibility', Icon: Heart },
  { label: 'Efficiency and Timeliness', Icon: Zap },
  { label: 'Dedication and Teamwork', Icon: Users },
];

const deliverItems = [
  { label: 'Legal and business documents', Icon: FileText },
  { label: 'Medical supplies and equipment', Icon: HeartPulse },
  { label: 'Parts and operational materials', Icon: Package },
  { label: 'Office supplies', Icon: Package },
  { label: 'Bank deposits', Icon: FileText },
  { label: 'Mortgage and financial documents', Icon: FileText },
  { label: 'Mail and confidential packages', Icon: Mail },
  { label: 'Freight and distribution deliveries', Icon: Truck },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1 className="hero-title">Moving What Matters—Safely, Quickly, and Reliably.</h1>
          <p className="hero-subtitle">
            When businesses need critical deliveries handled with precision and care, they turn to BioCare Express. We specialize in dependable courier solutions designed to keep operations running smoothly, whether it's urgent documents, medical supplies, business materials, or scheduled distribution deliveries.
          </p>
          <p className="hero-subtitle hero-subtitle-2">
            Our experienced team works around the clock to ensure every delivery is handled with professionalism, efficiency, and attention to detail. From on-demand courier services to organized delivery routes, BioCare Express provides the reliability organizations need in today's fast-moving world.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-lg">Request Delivery</Link>
            <a href="tel:612-205-1459" className="btn btn-light btn-lg">Call 612-205-1459</a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-intro">Professional delivery options for every need—urgent same-day runs or recurring scheduled routes.</p>
          <div className="service-cards">
            {services.map(({ to, title, description, Icon }) => (
              <div key={to} className="service-card">
                <div className="service-card-icon">
                  <Icon size={40} strokeWidth={1.75} aria-hidden />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={to} className="service-card-link">
                  Learn more <ArrowRight size={18} strokeWidth={2} aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose BioCare Express</h2>
          <p className="section-intro">Trusted by businesses and healthcare providers across Minnesota.</p>
          <div className="values-grid">
            {values.map(({ label, Icon }) => (
              <div key={label} className="value-item">
                <span className="value-icon">
                  <Icon size={24} strokeWidth={1.75} aria-hidden />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">What We Deliver</h2>
          <p className="deliver-intro">
            BioCare Express transports a wide range of important items for businesses and organizations. Our trained and experienced team understands the importance of each shipment and ensures every item is handled with professionalism, care, and attention to detail.
          </p>
          <ul className="deliver-list">
            {deliverItems.map(({ label, Icon }) => (
              <li key={label}>
                <Icon size={20} strokeWidth={1.75} className="deliver-list-icon" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark cta-strip">
        <div className="container cta-strip-inner">
          <p className="cta-strip-text">Need a delivery? Get a quote or call us: <a href="tel:612-205-1459">612-205-1459</a></p>
          <Link to="/contact" className="btn btn-primary btn-lg">Request Delivery</Link>
        </div>
      </section>
    </>
  );
}
