import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} <strong>{profileData.engName}</strong>. All Rights Reserved.
        </p>
        <p className="footer-sub">
          Built with React & Vite · Designed for Full-Stack Portfolio Showcase
        </p>
      </div>
    </footer>
  );
}
