import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { getAssetUrl } from '../utils/assetUrl';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">PROJECT SHOWCASE</span>
        <h2 className="section-title">어떤 프로젝트를 해봤는가</h2>
        <p className="section-subtitle">
          실제 Git 커밋 기록 및 아키텍처 분석에 근거한 주요 프로젝트 상세 레퍼런스입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            tabIndex={0}
            role="button"
            aria-label={`${project.title} 상세 구현 및 트러블슈팅 보기`}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            {/* 1. 기본 상태: 상단 이미지 꽉 채움 + 하단 메타 정보 (프로젝트 글자 바로 위까지 이미지가 꽉 차고 한눈에 보임) */}
            <div className="card-thumbnail-view">
              <div className="card-thumb-image-box">
                {project.thumbnail ? (
                  <img
                    src={getAssetUrl(project.thumbnail)}
                    alt={project.title}
                    className="card-thumb-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}

                {/* 썸네일 대체 플레이스홀더 (이미지가 없을 때) */}
                <div
                  className="card-thumb-placeholder"
                  style={{ display: project.thumbnail ? 'none' : 'flex' }}
                >
                  <div className="placeholder-brand-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <span className="placeholder-cat-tag">{project.category}</span>
                  <h3 className="placeholder-proj-title">{project.title}</h3>
                  <span className="placeholder-status-tag">🖼️ 스크린샷 준비 중</span>
                </div>
              </div>

              {/* 하단 메타 정보 영역 (글자 바로 위까지 이미지가 꽉 차고, 하단에 프로젝트 정보 선명하게 노출) */}
              <div className="card-thumb-meta">
                <div className="thumb-top-row">
                  <span className="project-index">0{index + 1}</span>
                  <span className="thumb-period">{project.period}</span>
                </div>
                <h3 className="thumb-title">{project.title}</h3>
                <p className="thumb-subtitle">{project.subtitle}</p>
                <div className="thumb-badges">
                  {project.badges.slice(0, 3).map((badge) => (
                    <span key={badge} className="thumb-tech-badge">{badge}</span>
                  ))}
                  {project.badges.length > 3 && (
                    <span className="thumb-tech-badge more">+{project.badges.length - 3}</span>
                  )}
                </div>
                <div className="thumb-hover-hint">
                  <span>카드 클릭 또는 호버 시 상세 확인</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. 호버 상태: 상세 내용 오버레이 패널 */}
            <div className="card-hover-overlay">
              {/* Card Header */}
              <div className="project-card-header">
                <div className="project-top-row">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              {/* Badges */}
              <div className="project-badges">
                {project.badges.map((badge) => (
                  <span key={badge} className="tech-badge">{badge}</span>
                ))}
              </div>

              {/* Card Content */}
              <div className="project-card-content">
                {/* 설명 */}
                <div className="content-block">
                  <h4 className="content-block-title">설명</h4>
                  <p className="content-block-desc">{project.summary}</p>
                </div>

                {/* 담당 및 기여 내역 */}
                <div className="content-block">
                  <h4 className="content-block-title">담당 및 기여 내역</h4>
                  <div className="role-highlight-box">
                    <strong>{project.role}</strong>
                  </div>
                  <ul className="project-key-did-list">
                    {project.whatDid.slice(0, 3).map((w, idx) => (
                      <li key={idx}>
                        <span className="key-did-bullet">✓</span>
                        <span>{w.area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="project-card-footer">
                <button
                  className="btn btn-primary btn-block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  상세 구현 및 트러블슈팅 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
