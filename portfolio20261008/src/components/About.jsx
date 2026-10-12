import React from 'react';
import { profileData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      index: "01",
      title: "실시간 데이터 및 오픈 API 파이프라인",
      desc: "EPL 축구 경기 일정 및 결과, 네이버 치지직 실시간 방송 메타데이터, 네이버 지도 LBS 등 다양한 외부 API를 실시간 연동하고 시차(UTC/KST) 및 정합성을 보정하는 데이터 파이프라인을 구축했습니다."
    },
    {
      index: "02",
      title: "견고한 백엔드 아키텍처 및 트랜잭션 무결성",
      desc: "Spring MVC 5.3 + MyBatis 기반 엔터프라이즈 백엔드와 React 19 + Redux Toolkit 기반 모던 프론트엔드를 구축했습니다. 동시성 제어, 중복 정산 방어, 단일 책임 원칙(SRP) 리팩토링을 통해 신뢰할 수 있는 시스템을 지향합니다."
    },
    {
      index: "03",
      title: "생성형 AI 접목 및 모바일 최적화 (PWA)",
      desc: "Google Gemini AI API를 활용하여 선수 세부 포지션 매핑, 영문 데이터 한글화, 커뮤니티 악성 게시글 자동 모더레이션을 자동화하고, PWA 및 반응형 모바일 풀화면 뷰를 최적화했습니다."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">ABOUT ME</span>
        <h2 className="section-title">집요한 문제 해결과 탄탄한 아키텍처를 지향합니다</h2>
        <div className="section-bar"></div>
      </div>

      <div className="about-grid">
        {highlights.map((item, idx) => (
          <div key={idx} className="about-card">
            <span className="about-card-number">{item.index}</span>
            <h3 className="about-card-title">{item.title}</h3>
            <p className="about-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 핵심 직무 역량 (이력서 기반) */}
      {profileData.coreCompetencies && (
        <div style={{ marginTop: '56px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
            🎯 핵심 직무 역량
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {profileData.coreCompetencies.map((comp, idx) => (
              <div key={idx} className="about-card" style={{ padding: '22px 24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                  ✓ {comp.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
