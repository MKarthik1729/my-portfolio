import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMoveToTop from '../../Hooks/MoveToTop';
import './PortfolioWebsite.scss';

const PortfolioWebsite = () => {
  const moveToTop = useMoveToTop();

  useEffect(() => {
    moveToTop();
  }, [moveToTop]);

  return (
    <motion.div 
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="project-title">Portfolio Website</h1>
          <p className="project-subtitle">Modern Web Development Showcase</p>
          <div className="project-tags">
            <span>React</span>
            <span>SCSS</span>
            <span>Framer Motion</span>
            <span>React Router</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A modern, responsive portfolio website showcasing my projects and skills,
            built with React and enhanced with smooth animations using Framer Motion.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>Optimized for all device sizes and screen resolutions</p>
            </div>
            <div className="feature-card">
              <h3>Modern UI</h3>
              <p>Clean and professional design with SCSS styling</p>
            </div>
            <div className="feature-card">
              <h3>Animations</h3>
              <p>Smooth transitions and interactions with Framer Motion</p>
            </div>
            <div className="feature-card">
              <h3>Project Showcase</h3>
              <p>Detailed project pages with interactive elements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>Project Screenshots</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/path-to-screenshot1.jpg" alt="Portfolio Website Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Portfolio Website Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Portfolio Website Screenshot 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Want to see more?</h2>
          <p>Check out the live demo or view the source code on GitHub.</p>
          <div className="cta-buttons">
            <a href="https://github.com/username/portfolio" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://portfolio-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioWebsite; 