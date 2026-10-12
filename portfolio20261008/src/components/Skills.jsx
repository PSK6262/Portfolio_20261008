import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  // Set of category names currently expanded to show all items
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const toggleCategory = (catName) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(catName)) {
        next.delete(catName);
      } else {
        next.add(catName);
      }
      return next;
    });
  };

  // Check if all visible categories that have >3 items are currently expanded
  const expandableCategories = filteredCategories.filter((g) => g.items.length > 3);
  const isAllExpanded =
    expandableCategories.length > 0 &&
    expandableCategories.every((g) => expandedCategories.has(g.category));

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedCategories(new Set());
    } else {
      setExpandedCategories(new Set(skillsData.map((s) => s.category)));
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">TECH STACK</span>
        <h2 className="section-title">어떤 기술을 다룰 수 있는가</h2>
        <p className="section-subtitle">
          프로젝트 현업에서 직접 사용하고 검증한 핵심 기술 스택 및 라이브러리 목록입니다.
        </p>
        <div className="section-bar"></div>
      </div>

      {/* Category Tabs & Global Expand Action */}
      <div className="skills-tabs-row">
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

        {expandableCategories.length > 0 && (
          <button
            className={`skills-toggle-all-btn ${isAllExpanded ? 'expanded' : ''}`}
            onClick={toggleAll}
            title={isAllExpanded ? "모든 기술 항목 3개로 접기" : "모든 기술 항목 전체 펼치기"}
          >
            <span>{isAllExpanded ? "모두 접기" : "전체 펼치기"}</span>
            <svg
              className={`chevron-icon ${isAllExpanded ? 'rotate' : ''}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        )}
      </div>

      {/* Skills Group Grid */}
      <div className="skills-grid">
        {filteredCategories.map((group) => {
          const isExpanded = expandedCategories.has(group.category);
          const hasMore = group.items.length > 3;
          const displayItems = isExpanded ? group.items : group.items.slice(0, 3);

          return (
            <div key={group.category} className="skill-group-card">
              <div className="skill-group-header">
                <h3 className="skill-group-title">{group.category}</h3>
                <span className="skill-count-badge">
                  총 {group.items.length}개 기술
                </span>
              </div>

              <div className="skill-items-list">
                {displayItems.map((skill) => (
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

              {hasMore && (
                <div className="skill-card-footer">
                  <button
                    className={`btn-skill-more ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => toggleCategory(group.category)}
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded
                        ? '간략히 접기 (3개만 보기)'
                        : `+ ${group.items.length - 3}개 더보기`}
                    </span>
                    <svg
                      className={`chevron-icon ${isExpanded ? 'rotate' : ''}`}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
