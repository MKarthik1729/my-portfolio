import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { navbar as styles } from './styled';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 700);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsOpen(false);
    }
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/resume', label: 'Resume' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={styles.navbar}
    >
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
          Portfolio
        </Link>

        <div className={styles.navControls}>
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className={`${styles.navLinks} ${isOpen ? styles.visible : ''}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? styles.active : ''}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </motion.button>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;