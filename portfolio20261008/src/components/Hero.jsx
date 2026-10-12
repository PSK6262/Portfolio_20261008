import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left: Text Introduction */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            풀스택 & 백엔드/프론트엔드 개발자
          </div>
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

        {/* Right: Photo Placeholder Area */}
        <div className="hero-photo-wrapper">
          <div className="photo-card">
            <div className="photo-frame">
              {/* 사용자가 나중에 본인 사진을 넣을 수 있는 자리 */}
              <div className="photo-placeholder">
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
            
            {/* Quick Status Bar */}
            <div className="photo-status-box">
              <div className="status-item">
                <span className="status-label">주요 포커스</span>
                <span className="status-value text-accent">실시간 데이터 & AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
