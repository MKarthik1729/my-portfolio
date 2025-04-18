import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMoveToTop from '../../Hooks/MoveToTop';
import './TakeArtToHeart.scss';

const TakeArtToHeart = () => {
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
          <h1 className="project-title">Take Art to Heart</h1>
          <p className="project-subtitle">Art Management System</p>
          <div className="project-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            Take Art to Heart is a comprehensive art management system developed as a college project.
            The platform features four distinct forms and image upload functionality, connecting a React.js
            frontend with a Node.js backend.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Form Management</h3>
              <p>Four specialized forms for different art management needs</p>
            </div>
            <div className="feature-card">
              <h3>Image Upload</h3>
              <p>Advanced image upload and management system</p>
            </div>
            <div className="feature-card">
              <h3>Modern Frontend</h3>
              <p>Built with React.js for optimal performance</p>
            </div>
            <div className="feature-card">
              <h3>Robust Backend</h3>
              <p>Node.js and Express for reliable data handling</p>
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
              <img src="/path-to-screenshot1.jpg" alt="Project Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Project Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Project Screenshot 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Interested in this project?</h2>
          <p>Feel free to reach out for more information or collaboration opportunities.</p>
          <button className="cta-button">Contact Me</button>
        </div>
      </section>
    </motion.div>
  );
};

export default TakeArtToHeart;