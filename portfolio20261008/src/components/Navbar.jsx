import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-accent">&lt;</span>
          PSK
          <span className="logo-accent">.Portfolio /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/PSK6262"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-github"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/PSK6262"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link mobile-link-github"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub Profile ↗
          </a>
        </div>
      )}
    </header>
  );
}
