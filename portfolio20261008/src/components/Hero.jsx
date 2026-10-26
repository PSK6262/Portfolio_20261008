import React from 'react';
import { profileData } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left: Text Introduction */}
        <div className="hero-content">
          <h1 className="hero-title">
            안녕하세요, <span className="text-gradient">{profileData.name}</span> 입니다.
          </h1>
          <p className="hero-role-tag">{profileData.engName} | {profileData.role}</p>
          <p className="hero-headline">{profileData.headline}</p>

          <div className="hero-bio-list">
            {profileData.bio.map((line, idx) => (
              <div key={idx} className="hero-bio-item">
                <span className="bio-bullet">-</span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기
            </a>
            <a href="#skills" className="btn btn-secondary">
              기술 스택
            </a>
            <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Profile Photo Area */}
        <div className="hero-photo-wrapper">
          <div className="photo-card">
            <div className={`photo-frame ${profileData.profileImage ? 'has-photo' : ''}`}>
              {profileData.profileImage ? (
                <img
                  src={getAssetUrl(profileData.profileImage)}
                  alt={`${profileData.name} 프로필 사진`}
                  className="photo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
              ) : null}

              <div
                className="photo-placeholder"
                style={{ display: profileData.profileImage ? 'none' : 'flex' }}
              >
                <div className="photo-placeholder-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="placeholder-title">{profileData.photoPlaceholder.title}</p>
                <p className="placeholder-sub">{profileData.photoPlaceholder.subtitle}</p>
                <span className="placeholder-tag">사진 등록 대기</span>
              </div>
            </div>

            {/* Profile Info Bar */}
            <div className="photo-profile-info">
              <span className="photo-name">{profileData.name}</span>
              <span className="photo-role">{profileData.role}</span>
            </div>

            {/* Quick Status Bar */}
            <div className="photo-status-box">
              <div className="status-item">
                <span className="status-label">주요 포커스</span>
                <span className="status-value text-accent">풀스택 웹 & AI 파이프라인</span>
              </div>
            </div>

            {/* Photo Notice */}
            {profileData.photoNotice && (
              <p className="photo-notice-text">
                {profileData.photoNotice}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
