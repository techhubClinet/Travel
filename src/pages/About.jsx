import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Briefcase, Handshake, Heart, Zap, Users } from 'lucide-react';
import './About.css';

const values = [
  {
    label: 'Reliability',
    description: 'We understand that our clients depend on us to deliver important and time-sensitive items. BioCare Express is committed to providing dependable services that ensure every delivery is handled promptly, accurately, and safely.',
    Icon: ShieldCheck,
  },
  {
    label: 'Professionalism',
    description: 'Our team operates with integrity, respect, and accountability in every interaction. From pickup to delivery, we maintain the highest professional standards to represent our clients and our company with excellence.',
    Icon: Briefcase,
  },
  {
    label: 'Customer Commitment',
    description: 'We prioritize the needs of our customers and strive to exceed expectations through responsive communication, personalized service, and consistent support. Our success is built on strong and trusted relationships.',
    Icon: Handshake,
  },
  {
    label: 'Care and Responsibility',
    description: 'Every package we deliver matters. Whether it is medical supplies, critical documents, or business materials, we treat each delivery with care and responsibility, recognizing the importance it holds for the individuals and organizations we serve.',
    Icon: Heart,
  },
  {
    label: 'Efficiency and Timeliness',
    description: 'Time is critical in courier services. We focus on efficient operations, organized routing, and prompt service to ensure deliveries arrive when they are needed most.',
    Icon: Zap,
  },
  {
    label: 'Dedication and Teamwork',
    description: 'Our experienced team works together with a shared commitment to quality service. Through dedication, collaboration, and continuous improvement, we ensure BioCare Express remains a trusted delivery partner throughout Minnesota.',
    Icon: Users,
  },
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
            <p>
              At the heart of BioCare Express is a dedicated and experienced team that understands the importance of every delivery. We take pride in providing quality service and handling each shipment with care, professionalism, and attention to details; especially when time-sensitive or essential supplies are involved.
            </p>
            <p>
              With around-the-clock availability and a strong commitment to customer service, BioCare Express has earned a reputation as a trusted courier provider in Minnesota. Our mission is simple: to deliver what matters most, when it matters most, with reliability you can count on.
            </p>
          </div>
          <div className="about-intro-visual">
            <img src="/Team.webp" alt="BioCare Express team" className="about-intro-img" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container mission-vision">
          <div className="mission-vision-card">
            <div className="mission-vision-icon">
              <Target size={32} strokeWidth={1.5} aria-hidden />
            </div>
            <h3>Mission Statement</h3>
            <p>
              At BioCare Express, our mission is to provide dependable, secure, and timely courier solutions that keep businesses, healthcare providers, and communities connected. Through on-demand, medical, and freight delivery services, our experienced and dedicated team works around the clock to ensure that essential items—from critical documents to medical supplies—are delivered with accuracy, professionalism, and care. We are committed to exceeding expectations through reliability, efficiency, and exceptional customer service.
            </p>
          </div>
          <div className="mission-vision-card">
            <div className="mission-vision-icon">
              <Eye size={32} strokeWidth={1.5} aria-hidden />
            </div>
            <h3>Vision Statement</h3>
            <p>
              Our vision is to become one of Minnesota's most trusted and recognized courier service providers by setting the standard for reliability, innovation, and service excellence. BioCare Express strives to build lasting partnerships with businesses and organizations by delivering solutions that are fast, responsive, and dependable—ensuring that when something important needs to move, it moves with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-intro">The principles that guide every delivery and every client relationship.</p>
          <div className="values-grid about-values">
            {values.map(({ label, description, Icon }) => (
              <div key={label} className="value-card">
                <span className="value-card-icon">
                  <Icon size={28} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="value-card-title">{label}</h3>
                <p className="value-card-desc">{description}</p>
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
