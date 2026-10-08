import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">TECH STACK</span>
        <h2 className="section-title">어떤 기술을 다룰 수 있는가 (Skills)</h2>
        <p className="section-subtitle">
          프로젝트 현업에서 직접 사용하고 검증한 핵심 기술 스택 및 라이브러리 목록입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      {/* Category Tabs */}
      <div className="skills-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Group Grid */}
      <div className="skills-grid">
        {filteredCategories.map((group) => (
          <div key={group.category} className="skill-group-card">
            <h3 className="skill-group-title">
              <span className="skill-group-bullet">#</span> {group.category}
            </h3>
            <div className="skill-items-list">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level-tag ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
