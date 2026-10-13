import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (key, text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">PERSONAL INFO & CONTACT</span>
        <h2 className="section-title">인적사항 및 연락처</h2>
        <p className="section-subtitle">
          채용 및 프로젝트 협업을 위한 기본 인적사항, 연락처 및 주요 온라인 채널입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="contact-container">
        {/* 1. 연락처 & 주소 카드 */}
        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h3 className="contact-card-title">연락처 & 근무 가능 지역</h3>
              <p className="contact-card-subtitle">직접 연락처 및 근무 가능 지역 안내입니다.</p>
            </div>
          </div>

          <div className="contact-items-group">
            {/* 전화번호 */}
            {profileData.contact.phone && (
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <div className="contact-value-row">
                  <span className="contact-value">{profileData.contact.phone}</span>
                  <button
                    className="btn-copy"
                    onClick={() => handleCopy('phone', profileData.contact.phone)}
                  >
                    {copiedKey === 'phone' ? '복사 완료' : '번호 복사'}
                  </button>
                </div>
              </div>
            )}

            {/* 이메일 */}
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <div className="contact-value-row">
                <span className="contact-value">{profileData.contact.email}</span>
                <button
                  className="btn-copy"
                  onClick={() => handleCopy('email', profileData.contact.email)}
                >
                  {copiedKey === 'email' ? '복사 완료' : '이메일 복사'}
                </button>
              </div>
            </div>

            <div className="contact-divider"></div>

            {/* 근무 가능 지역 */}
            <div className="contact-item">
              <span className="contact-label">Work Location</span>
              <div className="contact-location-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-pin-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="location-text-wrap">
                  <span className="contact-value">{profileData.contact.location}</span>
                  <span className="location-sub">{profileData.contact.locationDetail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 링크 & 채널 카드 */}
        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <div>
              <h3 className="contact-card-title">온라인 채널 & 링크</h3>
              <p className="contact-card-subtitle">코드 저장소 및 기술 문서 모음입니다.</p>
            </div>
          </div>

          <div className="contact-links-list">
            {/* GitHub */}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-info">
                <div className="contact-link-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-title">GitHub</span>
                  <span className="contact-link-desc">github.com/PSK6262</span>
                </div>
              </div>
              <span className="contact-link-arrow">바로가기 ↗</span>
            </a>

            {/* Blog / Tech Docs */}
            <a
              href={profileData.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-info">
                <div className="contact-link-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-title">Tech Docs / Blog</span>
                  <span className="contact-link-desc">psk6262.github.io</span>
                </div>
              </div>
              <span className="contact-link-arrow">바로가기 ↗</span>
            </a>

            {/* Direct Mail */}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="contact-link-card"
            >
              <div className="contact-link-info">
                <div className="contact-link-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-link-texts">
                  <span className="contact-link-title">Direct Mail</span>
                  <span className="contact-link-desc">채용 및 프로젝트 협업 문의</span>
                </div>
              </div>
              <span className="contact-link-arrow">메일 쓰기 ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
