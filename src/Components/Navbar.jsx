import React, { useState } from 'react'
import {navbar as styles} from './styled'
import { motion } from 'framer-motion'
function Navbar() {
    // const fa = window.innerWidth>700?true:false;
    const [dis,setDisplay] = useState( window.innerWidth>700?true:false)
    
    const HandleSideBar = ()=>{
        setDisplay(!dis)
    }
    const container = {
      hidden:{

      }, 
      visible:{

      }
    }
  
  return (
    <div id='home' style={{width:"100vw",overflow:'hidden'}}>

    <div className={styles.navbar}>
        <a href='#home'>Home</a>
    <motion.ul 
        variants={container}
        initial="hidden"
        animate="visible"
    className={(dis)?styles.notHovered:styles.hovered}>
            <li><a href='#trail'>Projects</a></li>
            <li ><a href='#contact'>Contact</a></li>
            <li>Resume</li>
        </motion.ul>

         <i 
        onClick={HandleSideBar}
        className={`fa ${!dis? 'fa-bars':'fa-times'} ${styles.icon}`} aria-hidden="true"></i>
    </div>
    </div>
  )
}

export default Navbar