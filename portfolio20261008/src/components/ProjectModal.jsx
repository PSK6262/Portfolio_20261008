import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
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
          </div>

          {/* Badges */}
          <div className="modal-badges">
            {project.badges.map((b) => (
              <span key={b} className="tech-badge">{b}</span>
            ))}
          </div>

          {/* Section 1: 어떤 걸 만들어봤다 */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">01</span> 어떤 걸 만들어봤다 (서비스 개요 & 핵심 기능)
            </h3>
            <p className="modal-summary-text">{project.summary}</p>
            <ul className="modal-check-list">
              {project.whatMade.map((item, idx) => (
                <li key={idx} className="modal-check-item">
                  <span className="check-icon">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: 어떤 걸 했다 (Git 커밋 기반 상세) */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">02</span> 어떤 걸 했다 (Git 커밋 로그 기반 본인 기여 내역)
            </h3>
            <div className="modal-did-grid">
              {project.whatDid.map((area, idx) => (
                <div key={idx} className="did-area-card">
                  <h4 className="did-area-title">▹ {area.area}</h4>
                  <ul className="did-area-list">
                    {area.details.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: 기술적 문제 해결 (Troubleshooting) */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="section-number">03</span> 기술적 문제 해결 및 성과 (Troubleshooting)
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
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
