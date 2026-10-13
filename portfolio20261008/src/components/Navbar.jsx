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
    { name: '소개', id: 'about', href: '#about' },
    { name: '프로젝트', id: 'projects', href: '#projects' },
    { name: '기술 스택', id: 'skills', href: '#skills' },
    { name: '학력 및 이력', id: 'experience', href: '#experience' },
    { name: '연락처', id: 'contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          박성국 <span className="logo-accent">포트폴리오</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
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
            GitHub
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
              key={link.id}
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
            GitHub 프로필 ↗
          </a>
        </div>
      )}
    </header>
  );
}
