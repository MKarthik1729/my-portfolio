import React from 'react';
import { motion } from 'framer-motion';
import './ECommercePlatform.scss';

const ECommercePlatform = () => {
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
          <h1 className="project-title">E-Commerce Platform</h1>
          <p className="project-subtitle">Full-Stack E-Commerce Solution</p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Stripe</span>
            <span>JWT</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <h2>Project Overview</h2>
          <p className="overview-text">
            A full-stack e-commerce platform with user authentication, product management, 
            shopping cart functionality, and secure payment integration using Stripe.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>User Authentication</h3>
              <p>Secure user registration and login with JWT</p>
            </div>
            <div className="feature-card">
              <h3>Product Management</h3>
              <p>Comprehensive product catalog and inventory system</p>
            </div>
            <div className="feature-card">
              <h3>Shopping Cart</h3>
              <p>Real-time cart management and checkout process</p>
            </div>
            <div className="feature-card">
              <h3>Payment Integration</h3>
              <p>Secure payment processing with Stripe</p>
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
              <img src="/path-to-screenshot1.jpg" alt="E-Commerce Platform Screenshot 1" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot2.jpg" alt="E-Commerce Platform Screenshot 2" />
            </div>
            <div className="gallery-item">
              <img src="/path-to-screenshot3.jpg" alt="E-Commerce Platform Screenshot 3" />
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
            <a href="https://github.com/username/ecommerce" target="_blank" rel="noopener noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://ecommerce-demo.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ECommercePlatform; 