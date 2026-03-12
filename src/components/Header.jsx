import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/services/medical', label: 'Medical Delivery' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/Rlogo.png" alt="BioCare Express" className="logo-img" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={isActive(to) ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Request Delivery
          </Link>
        </nav>
      </div>
    </header>
  );
}
