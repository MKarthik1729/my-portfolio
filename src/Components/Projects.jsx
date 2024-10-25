import React, { useRef, useState,useEffect } from 'react'
import { projects as styles } from './styled'
import {motion} from 'framer-motion'
// import Art from '../assets/Art.png'
import  Data  from '../Data.js'
// import { Link } from 'react-router-dom';
function Projects() {


  const divRef = useRef(null);


  useEffect(() => {
    const checkPosition = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();

        if (rect.bottom < window.innerHeight*0.3) {
          setMouse(false)
        } else if (rect.top > window.innerHeight*0.7) {

          setMouse(false)
        } else {

          setMouse(true)

        }
      }
    };
    console.log(window.innerHeight)
    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);



  const [Mouse,setMouse] = useState(false)
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        // delayChildren: 1,
        staggerChildren: 0.4,

      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration:1
      }
    }
  };



console.log(Mouse)
  return (
    <div  id='trail' ref={divRef}
    // onMouseEnter={()=>setMouse(true)}/
    // onMouseLeave={()=>setMouse(false)}
    className={styles.projects} >
      <h5>Projects</h5>
      <div >

      <motion.ul
    className={styles.container}
    variants={container}
    initial={Mouse?"hidden":"visible"}
    animate={Mouse?"visible":"hidden"}
  >
    {Data.map((ele) => (
      <motion.a key={ele.id} 
       href={ele.link}
      className={styles.item} variants={item}>
        
        <img src={ele.img} />
        <h5>{ele.title}</h5>
        <p>{ele.tag}</p>
      </motion.a>
    ))}
  </motion.ul>
      </div>
    </div>
  )
}

export default Projects