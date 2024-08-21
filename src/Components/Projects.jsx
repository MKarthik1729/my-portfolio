import React, { useRef } from 'react'
import { projects as styles } from './styled'
import {motion} from 'framer-motion'
function Projects() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3,
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
        duration:2
      }
    }
  };

  return (
    <div  id='trail' className={styles.projects} >
      <h5>Projects</h5>
      <div >

      <motion.ul
    className={styles.container}
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3,4,5].map((index) => (
      <motion.li key={index} className={styles.item} variants={item}>
        
        <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' />
        <h5>Take Art to Heart</h5>
        <p>MERN Stack</p>
      </motion.li>
    ))}
  </motion.ul>
      </div>
    </div>
  )
}

export default Projects