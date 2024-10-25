// import { useState } from 'react'
import { useEffect } from 'react';
import {Navbar,Home, Projects,Skills} from './Components'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TakeArttoHeart from './Components/Project/TakeArttoHeart';
function App() {

  return (
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
</Routes>

    </BrowserRouter>
  )
}

export default App
