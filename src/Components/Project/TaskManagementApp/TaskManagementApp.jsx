import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMoveToTop from '../../Hooks/MoveToTop';
import './TaskManagementApp.scss';

const TaskManagementApp = () => {
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
          <h1 className="project-title">Task Management App</h1>
          <p className="project-subtitle">Collaborative Task Management Solution</p>
          <div className="project-tags">
            <span>React</span>
            <span>Firebase</span>
            <span>Redux</span>
            <span>Material UI</span>
            <span>Chart.js</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A collaborative task management application with real-time updates, team features,
            and comprehensive analytics powered by Firebase and Chart.js.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Real-time Updates</h3>
              <p>Instant synchronization across all team members</p>
            </div>
            <div className="feature-card">
              <h3>Team Collaboration</h3>
              <p>Share tasks and projects with team members</p>
            </div>
            <div className="feature-card">
              <h3>Task Analytics</h3>
              <p>Visualize progress with Chart.js integration</p>
            </div>
            <div className="feature-card">
              <h3>Modern UI</h3>
              <p>Clean and intuitive interface with Material UI</p>
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
              <img src="/path-to-screenshot1.jpg" alt="Task Management App Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Task Management App Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Task Management App Screenshot 3" />
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
            <a href="https://github.com/username/taskmanager" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://taskmanager-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TaskManagementApp; 