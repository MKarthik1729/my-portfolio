import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import useMoveToTop from './Hooks/MoveToTop';
import styles from '../Styles/home.module.scss';

function Home() {
  const [hasVisited, setHasVisited] = useState(false);
  const { isDarkMode } = useTheme();
  const moveToTop = useMoveToTop();

  useEffect(() => {
    moveToTop();
    const visited = localStorage.getItem('hasVisitedHome');
    if (!visited) {
      setHasVisited(true);
      localStorage.setItem('hasVisitedHome', 'true');
    }
  }, []);

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

  const greetingVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
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
      className={styles.home}
      initial={hasVisited ? "visible" : "hidden"}
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundColor: isDarkMode ? 'var(--bg-primary)' : 'var(--bg-primary)',
        color: isDarkMode ? 'var(--text-primary)' : 'var(--text-primary)'
      }}
    >
      <div className={styles.honeycombPattern} />
      <div className={styles.content}>
        <motion.div className={styles.textContent} variants={containerVariants}>
          <motion.h1 variants={greetingVariants} className={styles.greeting}>
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
              style={{
                color: isDarkMode ? 'var(--text-primary)' : 'var(--text-primary)'
              }}
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
              style={{
                color: isDarkMode ? 'var(--text-primary)' : 'var(--text-primary)'
              }}
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