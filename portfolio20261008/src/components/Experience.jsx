import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">BACKGROUND & TIMELINE</span>
        <h2 className="section-title">학력 및 교육 이력</h2>
        <p className="section-subtitle">
          학력, 전문 교육 수료 및 자격증/병역 정보입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      <div className="timeline-grid">
        {/* 1. 학력 */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <h3 className="timeline-col-title">학력</h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* 2. 교육 및 수료 */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <h3 className="timeline-col-title">교육 및 수료</h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* 3. 자격증 및 병역 */}
        <div className="timeline-column">
          <div className="timeline-col-header">
            <h3 className="timeline-col-title">자격증 및 어학 / 병역</h3>
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

            {educationData.military && (
              <div className="timeline-card cert-card">
                <div className="card-top">
                  <h4 className="card-title">{educationData.military.title}</h4>
                  <span className="card-period">{educationData.military.period}</span>
                </div>
                <p className="card-subtitle">{educationData.military.status}</p>
                <span className="cert-status">이행 완료</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
