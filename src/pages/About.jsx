import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Briefcase, Handshake, Heart, Zap, Users } from 'lucide-react';
import './About.css';

const values = [
  { label: 'Reliability', Icon: ShieldCheck },
  { label: 'Professionalism', Icon: Briefcase },
  { label: 'Customer Commitment', Icon: Handshake },
  { label: 'Care and Responsibility', Icon: Heart },
  { label: 'Efficiency and Timeliness', Icon: Zap },
  { label: 'Dedication and Teamwork', Icon: Users },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / About</p>
          <h1>About BioCare Express</h1>
          <p className="page-hero-sub">Minnesota courier you can count on.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro-content">
            <h2>Who We Are</h2>
            <p>
              BioCare Express is a Minnesota-based courier company committed to providing reliable, timely, and professional delivery solutions. We specialize in on-demand, scheduled, and distribution services designed to ensure that essential items reach their destination safely and efficiently.
            </p>
            <p>
              Our team delivers a wide range of materials, including important documents, medical supplies and equipment, office supplies, parts, mortgage documents, bank deposits, mail, and many other critical items for businesses and individuals. From urgent same-day deliveries to organized distribution routes, BioCare Express is equipped to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="about-intro-visual">
            <div className="about-placeholder" aria-hidden>
              <Target size={64} strokeWidth={1.25} className="about-placeholder-icon" aria-hidden />
              <span>BioCare Express</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container mission-vision">
          <div className="mission-vision-card">
            <div className="mission-vision-icon">
              <Target size={32} strokeWidth={1.5} aria-hidden />
            </div>
            <h3>Our Mission</h3>
            <p>
              At BioCare Express, our mission is to provide dependable, secure, and timely courier solutions that keep businesses, healthcare providers, and communities connected.
            </p>
          </div>
          <div className="mission-vision-card">
            <div className="mission-vision-icon">
              <Eye size={32} strokeWidth={1.5} aria-hidden />
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become one of Minnesota's most trusted and recognized courier service providers by setting the standard for reliability, innovation, and service excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-intro">The principles that guide every delivery and every client relationship.</p>
          <div className="values-grid about-values">
            {values.map(({ label, Icon }) => (
              <div key={label} className="value-item">
                <span className="value-icon">
                  <Icon size={26} strokeWidth={1.75} aria-hidden />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cta-section">
          <p className="cta-section-text">Ready to work with us?</p>
          <div className="cta-section-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">Request Delivery</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
