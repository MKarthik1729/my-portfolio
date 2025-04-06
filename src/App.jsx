// import { useState } from 'react'
import { useEffect } from 'react';
import {Navbar,Home, Projects,Skills} from './Components'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TakeArttoHeart from './Components/Project/TakeArttoHeart';
import SkillPage from './Components/Skill/SkillPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<div>
            <Navbar />
            <Home  />
            <Skills />
            <Projects  />
            <Contact />
          </div>}/>
          <Route path='/art' element={<TakeArttoHeart />}/>
          <Route path='/skills' element={<div>
            <Navbar />
            <SkillPage />
          </div>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
