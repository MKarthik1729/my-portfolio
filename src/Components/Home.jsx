import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../Styles/home.module.scss';

function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const textVariants = {
    hidden: { 
      x: -100,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8
      }
    }
  };

  const nameVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.5
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 1
      }
    }
  };

  const socialVariants = {
    hidden: { 
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialItemVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={styles.home}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={styles.content}>
        <motion.div className={styles.textContent} variants={containerVariants}>
          <motion.h1 variants={textVariants} className={styles.greeting}>
            Hello, I'm
          </motion.h1>
          <motion.h2 variants={nameVariants} className={styles.name}>
            Karthik
          </motion.h2>
          <motion.h3 variants={textVariants} className={styles.title}>
            Full Stack Developer
          </motion.h3>
          <motion.p variants={textVariants} className={styles.description}>
            I build exceptional digital experiences that combine creativity with technical expertise.
          </motion.p>
          
          <motion.div 
            className={styles.socialLinks}
            variants={socialVariants}
          >
            <motion.a 
              href="https://github.com/MKarthik1729" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItemVariants}
              whileHover={{ 
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/m-karthik1729/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialItemVariants}
              whileHover={{ 
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;