import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-category">{project.category} · {project.period}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Metadata Bar */}
          <div className="modal-meta-bar">
            <div className="meta-box">
              <span className="meta-label">담당 역할</span>
              <span className="meta-value">{project.role}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">팀 구성</span>
              <span className="meta-value">{project.teamSize}</span>
            </div>
            {project.github && (
              <div className="meta-box">
                <span className="meta-label">GitHub Repository</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  저장소 열기 ↗
                </a>
              </div>
            )}
            {project.demo && (
              <div className="meta-box">
                <span className="meta-label">배포 링크 (Live Demo)</span>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  서비스 바로가기 ↗
                </a>
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="modal-badges">
            {project.badges.map((b) => (
              <span key={b} className="tech-badge">{b}</span>
            ))}
          </div>

          {/* Section 1: 프로젝트 화면 미리보기 (스크린샷) */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">01</span> 프로젝트 화면 미리보기
            </h3>

            {project.images && project.images.length > 0 ? (
              <div className="project-screenshot-wrapper">
                {project.images.length > 1 && (
                  <div className="screenshot-tabs">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        className={`screenshot-tab-btn ${activeImageIdx === idx ? 'active' : ''}`}
                        onClick={() => setActiveImageIdx(idx)}
                      >
                        {img.label || `화면 ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                )}
                <div className="screenshot-frame">
                  <img
                    src={getAssetUrl(project.images[activeImageIdx].url)}
                    alt={project.images[activeImageIdx].caption || `${project.title} 스크린샷`}
                    className="screenshot-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="screenshot-fallback" style={{ display: 'none', padding: '30px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '13px' }}>
                    <p>이미지를 불러올 수 없습니다. 경로를 확인해 주세요: {project.images[activeImageIdx].url}</p>
                  </div>
                </div>
                {project.images[activeImageIdx].caption && (
                  <p className="screenshot-caption">
                    📷 {project.images[activeImageIdx].caption}
                  </p>
                )}
              </div>
            ) : (
              <div className="screenshot-placeholder-card">
                <div className="placeholder-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h4 className="placeholder-card-title">프로젝트 스크린샷 등록 영역</h4>
                <p className="placeholder-card-desc">
                  <code>public/images/projects/{project.id}.png</code> 에 이미지를 추가하면<br />
                  여기에 자동으로 프로젝트 화면이 표시됩니다.
                </p>
                <span className="placeholder-card-tag">스크린샷 등록 대기</span>
              </div>
            )}
          </div>

          {/* Section 2: 개요 및 기능 설명 */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">02</span> 개요 및 주요 구현 기능
            </h3>
            <p className="modal-summary-text">{project.summary}</p>
            <ul className="modal-check-list">
              {project.whatMade.map((item, idx) => (
                <li key={idx} className="modal-check-item">
                  <span className="check-bullet">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: 본인 담당 및 기여 내역 */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">03</span> 본인 담당 및 기여 내역
            </h3>
            <div className="modal-did-grid">
              {project.whatDid.map((area, idx) => (
                <div key={idx} className="did-area-card">
                  <h4 className="did-area-title">{area.area}</h4>
                  <ul className="did-area-list">
                    {area.details.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: 기술적 문제 해결 및 성과 */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">04</span> 기술적 문제 해결 및 성과
            </h3>
            <div className="trouble-list">
              {project.troubleshooting.map((t, idx) => (
                <div key={idx} className="trouble-card">
                  <div className="trouble-issue">
                    <span className="trouble-tag issue-tag">Problem</span>
                    <p>{t.issue}</p>
                  </div>
                  <div className="trouble-solution">
                    <span className="trouble-tag solution-tag">Solution</span>
                    <p>{t.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: 성장 회고 */}
          {project.reflection && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <span className="section-number">05</span> 성장 회고
              </h3>
              <div
                style={{
                  background: 'rgba(2, 132, 199, 0.05)',
                  border: '1px solid rgba(2, 132, 199, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 24px',
                  color: 'var(--text-main)',
                  lineHeight: '1.8',
                  fontSize: '15px'
                }}
              >
                {project.reflection}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  fontSize: '13.5px',
                  padding: '9px 18px',
                  textDecoration: 'none'
                }}
              >
                🚀 배포 서비스 바로가기 ↗
              </a>
            )}
          </div>
          <button className="btn btn-secondary" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
