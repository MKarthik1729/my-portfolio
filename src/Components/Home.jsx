import React, { useEffect, useState } from 'react'
import {home as styles} from './styled'
import Img from '../assets/karthik.jpeg'
import {motion} from 'framer-motion'
function Home() {
  // return (
    const [visible,setVisible] = useState(true)
    
    useEffect(() => {
      setVisible(false)

    }, [])
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { y: 0, opacity: 0,x:-100 },
  visible: {
    y: 0,
    opacity: 1,
    x:0,
    transition:{
      duration:2
    }
  }
};
const items = {
  hidden: { opacity: 1, scale: 0,x:'100%' },
  visible: {
    x:0,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      duration:1
    }
  }
  
};

return (
    <div className={styles.home}>
      <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
      >
        <motion.h5 
        variants={item}
        className={styles.name}>This is Karthik</motion.h5>
        <motion.p
        variants={item}
        className={styles.des}
        >A full stack developer</motion.p>
      </motion.div>
      <motion.div variants={items}           
      initial="hidden"
          animate="visible">

        < motion.img 
          // initial={{ scale: 1 }}
          // animate={{ rotate: 360, scale: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 260,
          //   damping: 60
          // }}
        src={Img} />
      </motion.div>

    </div>
  )
}

export default Home