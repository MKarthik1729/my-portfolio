// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Home, Projects, Skills, SkillPage, Contact, Resume, NotFound, TakeArtToHeart, TaskManagementApp, ECommercePlatform, WeatherDashboard, PortfolioWebsite, SocialMediaDashboard, FitnessTrackingApp } from './Components';
import SkillStyleChange from './SkillStyleChange';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <SkillStyleChange />
              <Projects />
              {/* <Skills /> */}
            </>
          } />
          {/* <Route path="/skills" element={
            <>
              <Navbar />
              <SkillPage />
            </>
          } /> */}
          <Route path="/projects" element={
            <>
              <Navbar />
              <Projects />
            </>
          } />
          <Route path="/projects/e-commerce-platform" element={
            <>
              <Navbar />
              <ECommercePlatform />
            </>
          } />
          <Route path="/projects/task-management-app" element={
            <>
              <Navbar />
              <TaskManagementApp />
            </>
          } />
          <Route path="/projects/weather-dashboard" element={
            <>
              <Navbar />
              <WeatherDashboard />
            </>
          } />
          <Route path="/projects/portfolio-website" element={
            <>
              <Navbar />
              <PortfolioWebsite />
            </>
          } />
          <Route path="/projects/social-media-dashboard" element={
            <>
              <Navbar />
              <SocialMediaDashboard />
            </>
          } />
          <Route path="/projects/fitness-tracking-app" element={
            <>
              <Navbar />
              <FitnessTrackingApp />
            </>
          } />
          <Route path="/projects/take-art-to-heart" element={
            <>
              <Navbar />
              <TakeArtToHeart />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
            </>
          } />
          <Route path="/resume" element={
            <>
              <Navbar />
              <Resume />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
