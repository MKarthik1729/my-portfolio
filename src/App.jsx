// import { useState } from 'react'
import { useEffect } from 'react';
import {Navbar,Home, Projects} from './Components'
import Contact from './Components/Contact'
// import Home from './Components/Navbar'
function App() {
  useEffect(() => {
    setTimeout(()=>{

      const idToScrollTo = 'trail'; // ID of the section you want to scroll to
      const element = document.getElementById(idToScrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },2000)
  }, []); 
  return (
<div>
<Navbar />
<Home  />
<Projects  />
<Contact />
</div>
  )
}

export default App
