// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { Navbar, Home, Projects, Skills, SkillPage, Contact, Resume, NotFound } from './Components';
import ProjectDetail from './Components/Project/ProjectDetail';
import './App.css';
import TakeArttoHeart from './Components/Project/TakeArttoHeart';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Projects />
              <Skills />
            </>
          } />
          <Route path="/skills" element={
            <>
              <Navbar />
              <SkillPage />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navbar />
              <Projects />
            </>
          } />
          <Route path="/projects/:id" element={
            <>
              <Navbar />
              <ProjectDetail />
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
          <Route path="/art" element={<TakeArttoHeart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
