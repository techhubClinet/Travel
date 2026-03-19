import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer reveal-footer-section">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/Rlogo.png" alt="BioCare Express" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">Moving What Matters—Safely, Quickly, and Reliably.</p>
        </div>
        <div className="footer-links">
          <h4>Quick links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/services/medical">Medical Delivery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services#same-day">Same-day</Link></li>
            <li><Link to="/services#scheduled">Scheduled routes</Link></li>
            <li><Link to="/services/medical">Medical</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p className="footer-phone">
            <Phone size={20} strokeWidth={1.75} aria-hidden />
            <a href="tel:612-205-1459">612-205-1459</a>
          </p>
          <Link to="/contact" className="btn btn-primary">Request Delivery</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© {year} BioCare Express. All rights reserved.</p>
      </div>
    </footer>
  );
}
