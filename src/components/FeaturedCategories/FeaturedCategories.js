import React, { useState } from 'react';
import { categories } from '../../data';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="categories section" id="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Collections</span>
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            From royal ethnic ensembles to chic western wear — find the perfect outfit for every occasion
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card ${hoveredId === category.id ? 'category-card--hovered' : ''}`}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                '--cat-color':        category.color,
                '--cat-color-dark':   category.colorDark,
                '--cat-color-light':  category.colorLight,
                '--cat-color-subtle': category.colorSubtle,
                '--cat-color-border': category.colorBorder,
                '--cat-color-shadow': category.colorShadow,
              }}
            >
              {/* Tag */}
              <div className="category-card__tag">
                {category.tag}
              </div>

              {/* Image */}
              <div className="category-card__image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-card__image"
                />
                <div className="category-card__image-overlay"></div>
              </div>

              {/* Content */}
              <div className="category-card__content">
                <div>
                  <div className="category-card__subtitle">{category.subtitle}</div>
                  <h3 className="category-card__name">{category.name}</h3>
                  <p className="category-card__description">{category.description}</p>
                </div>

                <div className="category-card__footer">
                  <div className="category-card__meta">
                    <span className="category-card__count">{category.count}</span>
                    <span className="category-card__price">From {category.startingPrice}</span>
                  </div>
                  <button className="category-card__btn">
                    <span>View Collection</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Color Bar */}
              <div className="category-card__bar"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="categories__cta">
          <p className="categories__cta-text">Don't see what you're looking for?</p>
          <button className="btn btn-primary">
            View All 5000+ Outfits
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
