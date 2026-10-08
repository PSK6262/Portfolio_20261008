import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">BACKGROUND & TIMELINE</span>
        <h2 className="section-title">학력 및 교육 이력 (틀)</h2>
        <p className="section-subtitle">
          학력, 교육 수료 및 자격증 정보가 들어가는 템플릿 영역입니다. (src/data/portfolioData.js 에서 수정 가능)
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="timeline-grid">
        {/* 1. 학력 (Education) */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <span className="timeline-icon">🎓</span>
            <h3 className="timeline-col-title">학력 (Education)</h3>
          </div>
          <div className="timeline-cards">
            {educationData.education.map((item, idx) => (
              <div key={idx} className="timeline-card">
                <div className="card-top">
                  <h4 className="card-title">{item.institution}</h4>
                  <span className="card-period">{item.period}</span>
                </div>
                <p className="card-subtitle">{item.major}</p>
                <p className="card-desc">{item.description}</p>
                <div className="card-placeholder-badge">
                  <span>[수정 팁] portfolioData.js의 education 배열을 수정하세요</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 교육 및 부트캠프 (Trainings) */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <span className="timeline-icon">💻</span>
            <h3 className="timeline-col-title">교육 및 수료 (Trainings)</h3>
          </div>
          <div className="timeline-cards">
            {educationData.trainings.map((item, idx) => (
              <div key={idx} className="timeline-card">
                <div className="card-top">
                  <h4 className="card-title">{item.program}</h4>
                  <span className="card-period">{item.period}</span>
                </div>
                <p className="card-subtitle">{item.institution}</p>
                <p className="card-desc">{item.description}</p>
                <div className="card-placeholder-badge">
                  <span>[수정 팁] portfolioData.js의 trainings 배열을 수정하세요</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 자격증 (Certifications) */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <span className="timeline-icon">📜</span>
            <h3 className="timeline-col-title">자격증 및 어학 (Certifications)</h3>
          </div>
          <div className="timeline-cards">
            {educationData.certifications.map((item, idx) => (
              <div key={idx} className="timeline-card cert-card">
                <div className="card-top">
                  <h4 className="card-title">{item.name}</h4>
                  <span className="card-period">{item.date}</span>
                </div>
                <p className="card-subtitle">{item.issuer}</p>
                <span className="cert-status">{item.status}</span>
              </div>
            ))}
            <div className="timeline-card empty-guide-card">
              <p>+ 정보처리기사, SQLD, 어학 성적 등 보유 자격증을 추가하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
