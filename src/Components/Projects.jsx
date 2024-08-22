import React, { useRef } from 'react'
import { projects as styles } from './styled'
import {motion} from 'framer-motion'
// import Art from '../assets/Art.png'
import  Data  from '../Data.js'
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
    {Data.map((ele) => (
      <motion.li key={ele.id} className={styles.item} variants={item}>
        
        <img src={ele.img} />
        <h5>{ele.title}</h5>
        <p>{ele.tag}</p>
      </motion.li>
    ))}
  </motion.ul>
      </div>
    </div>
  )
}

export default Projects