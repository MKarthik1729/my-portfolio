import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMoveToTop from '../../Hooks/MoveToTop';
import './SocialMediaDashboard.scss';

const SocialMediaDashboard = () => {
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
          <h1 className="project-title">Social Media Dashboard</h1>
          <p className="project-subtitle">Comprehensive Social Media Analytics</p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Chart.js</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A comprehensive dashboard for managing social media accounts and analytics,
            featuring real-time data visualization and performance tracking.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Analytics Dashboard</h3>
              <p>Real-time performance metrics and insights</p>
            </div>
            <div className="feature-card">
              <h3>Data Visualization</h3>
              <p>Interactive charts and graphs with Chart.js</p>
            </div>
            <div className="feature-card">
              <h3>Account Management</h3>
              <p>Centralized control of multiple social accounts</p>
            </div>
            <div className="feature-card">
              <h3>Performance Tracking</h3>
              <p>Monitor engagement and growth metrics</p>
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
              <img src="/path-to-screenshot1.jpg" alt="Social Media Dashboard Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Social Media Dashboard Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Social Media Dashboard Screenshot 3" />
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
            <a href="https://github.com/username/social-dashboard" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://social-dashboard-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SocialMediaDashboard; 