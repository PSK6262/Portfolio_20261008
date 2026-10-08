import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">GET IN TOUCH</span>
        <h2 className="section-title">함께 일할 기회를 기다립니다</h2>
        <p className="section-subtitle">
          프로젝트 협업, 개발 직무 채용 제안 등 언제든지 편하게 연락해 주세요.
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <div className="email-copy-wrapper">
              <span className="contact-value">{profileData.contact.email}</span>
              <button className="btn-copy" onClick={handleCopyEmail}>
                {copied ? '복사 완료! ✓' : '이메일 복사 📋'}
              </button>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {profileData.contact.github} ↗
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Blog / Tech Docs</span>
            <a
              href={profileData.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {profileData.contact.blog} ↗
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">{profileData.contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
