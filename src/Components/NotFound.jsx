import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../Styles/notFound.module.scss';

function NotFound() {
  return (
    <motion.div 
      className={styles.notFound}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div 
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Link to="/" className={styles.homeButton}>
            Return to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NotFound; 