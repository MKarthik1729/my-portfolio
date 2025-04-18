import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMoveToTop from '../../Hooks/MoveToTop';
import './FitnessTrackingApp.scss';

const FitnessTrackingApp = () => {
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
          <h1 className="project-title">Fitness Tracking App</h1>
          <p className="project-subtitle">Mobile Fitness Companion</p>
          <div className="project-tags">
            <span>React Native</span>
            <span>Firebase</span>
            <span>Redux</span>
            <span>Expo</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A mobile application for tracking workouts, nutrition, and fitness goals,
            built with React Native and featuring real-time data synchronization.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Workout Tracking</h3>
              <p>Log and monitor your exercise routines</p>
            </div>
            <div className="feature-card">
              <h3>Nutrition Log</h3>
              <p>Track your daily food intake and calories</p>
            </div>
            <div className="feature-card">
              <h3>Progress Analytics</h3>
              <p>Visualize your fitness journey with charts</p>
            </div>
            <div className="feature-card">
              <h3>Goal Setting</h3>
              <p>Set and track your fitness objectives</p>
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
              <img src="/path-to-screenshot1.jpg" alt="Fitness Tracking App Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Fitness Tracking App Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Fitness Tracking App Screenshot 3" />
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
            <a href="https://github.com/username/fitness-app" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://fitness-app-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FitnessTrackingApp; 