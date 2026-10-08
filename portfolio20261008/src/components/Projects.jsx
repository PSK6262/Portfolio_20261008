import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">PROJECT SHOWCASE</span>
        <h2 className="section-title">어떤 프로젝트를 해봤는가 (Projects)</h2>
        <p className="section-subtitle">
          실제 Git 커밋 기록 및 아키텍처 분석에 근거한 3대 주요 프로젝트 상세 레퍼런스입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={project.id} className="project-card">
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
              {/* 어떤 걸 만들어봤다 요약 */}
              <div className="content-block">
                <h4 className="content-block-title">
                  <span className="bullet">📌</span> 어떤 걸 만들어봤다
                </h4>
                <p className="content-block-desc">{project.summary}</p>
              </div>

              {/* 어떤 걸 했다 요약 */}
              <div className="content-block">
                <h4 className="content-block-title">
                  <span className="bullet">🛠️</span> 내가 담당하고 기여한 파트
                </h4>
                <div className="role-highlight-box">
                  <strong>{project.role}</strong>
                </div>
                <ul className="project-key-did-list">
                  {project.whatDid.slice(0, 3).map((w, idx) => (
                    <li key={idx}>▹ {w.area}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Action */}
            <div className="project-card-footer">
              <button
                className="btn btn-primary btn-block"
                onClick={() => setSelectedProject(project)}
              >
                상세 구현 및 트러블슈팅 보기 →
              </button>
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
