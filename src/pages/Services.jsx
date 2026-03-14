import { Link } from 'react-router-dom';
import { Clock, CalendarCheck, HeartPulse, ArrowRight, Truck, Timer, Package, FileText, Building2, Mail } from 'lucide-react';
import './Services.css';

const priorityTimeOptions = [
  '90-Minute Delivery',
  '2-Hour Delivery',
  '3-Hour Delivery',
  '4-Hour Delivery',
];

const scheduledItems = [
  'Daily document transfers',
  'Inter-office mail delivery',
  'Routine supply transportation',
  'Bank deposits',
  'Medical facility supply routes',
];

const deliverTypes = [
  { label: 'Legal and business documents', Icon: FileText },
  { label: 'Medical supplies and equipment', Icon: HeartPulse },
  { label: 'Parts and operational materials', Icon: Package },
  { label: 'Office supplies', Icon: Package },
  { label: 'Bank deposits', Icon: Building2 },
  { label: 'Mortgage and financial documents', Icon: FileText },
  { label: 'Mail and confidential packages', Icon: Mail },
  { label: 'Freight and distribution deliveries', Icon: Truck },
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
          <div className="services-block services-block-with-img">
            <div className="services-block-main">
              <div className="services-block-icon">
                <Clock size={40} strokeWidth={1.75} aria-hidden />
              </div>
              <div className="services-block-content">
              <h2>Same-Day On-Demand Delivery</h2>
              <p className="services-lead">
                When time is critical, BioCare Express provides fast and dependable same-day courier services. Our on-demand delivery solutions ensure that your package is picked up and delivered quickly, safely, and with the highest level of professionalism.
              </p>
              <p className="services-intro">Your delivery is made exactly when you need it with the following service options:</p>

              <div className="service-option-card">
                <h3><Truck size={22} strokeWidth={1.75} aria-hidden /> Direct Service</h3>
                <p>
                  From the moment you place your order online or by phone, we immediately dispatch the driver best suited to meet your urgent delivery needs. Your package goes directly from pickup to its destination without unnecessary stops.
                </p>
              </div>

              <div className="service-option-card">
                <h3><Timer size={22} strokeWidth={1.75} aria-hidden /> Priority Time Options</h3>
                <p>Choose the delivery timeframe that best fits your schedule:</p>
                <ul className="services-option-list">
                  {priorityTimeOptions.map((opt) => (
                    <li key={opt}>{opt}</li>
                  ))}
                </ul>
                <p className="service-option-note">These flexible service levels allow you to select the speed that matches the urgency of your shipment.</p>
              </div>

              <div className="service-option-card">
                <h3><Package size={22} strokeWidth={1.75} aria-hidden /> Same-Day Delivery</h3>
                <p>
                  Need delivery before the end of the day? Call us before 11:00 AM, and we will ensure your package is delivered by 5:00 PM the same day.
                </p>
              </div>
              </div>
            </div>
            <div className="services-block-img-wrap">
              <img src="/CourierMAn.jpg" alt="BioCare Express courier" className="services-block-img" />
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
          <h2 className="section-title">Types of Deliveries We Handle</h2>
          <p className="services-carry">
            BioCare Express transports a wide range of important items for businesses and organizations. Our trained and experienced team understands the importance of each shipment and ensures every item is handled with professionalism, care, and attention to detail.
          </p>
          <ul className="deliver-types-list">
            {deliverTypes.map(({ label, Icon }) => (
              <li key={label}>
                <Icon size={22} strokeWidth={1.75} className="deliver-types-icon" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </ul>
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
