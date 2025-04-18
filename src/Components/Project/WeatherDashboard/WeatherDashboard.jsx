import React from 'react';
import { motion } from 'framer-motion';
import './WeatherDashboard.scss';

const WeatherDashboard = () => {
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
          <h1 className="project-title">Weather Dashboard</h1>
          <p className="project-subtitle">Interactive Weather Visualization Platform</p>
          <div className="project-tags">
            <span>React</span>
            <span>D3.js</span>
            <span>OpenWeather API</span>
            <span>Chart.js</span>
            <span>Leaflet</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A comprehensive weather dashboard that provides detailed forecasts, 
            interactive data visualization, and real-time weather updates using 
            multiple APIs and visualization libraries.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Interactive Maps</h3>
              <p>Real-time weather visualization with Leaflet</p>
            </div>
            <div className="feature-card">
              <h3>Data Visualization</h3>
              <p>Advanced charts and graphs using D3.js and Chart.js</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Updates</h3>
              <p>Live weather data from OpenWeather API</p>
            </div>
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>Optimized for all device sizes</p>
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
              <img src="/path-to-screenshot1.jpg" alt="Weather Dashboard Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="Weather Dashboard Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="Weather Dashboard Screenshot 3" />
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
            <a href="https://github.com/username/weather-dashboard" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://weather-dashboard-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WeatherDashboard; 