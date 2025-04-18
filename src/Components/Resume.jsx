import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from '../Styles/resume.module.scss';

const Resume = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div 
      className={styles.resume}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      <div 
        className={styles.pdfContainer}
        style={{ backgroundColor: '#ffffff' }}
      >
        <iframe
          src={`/Karthik_resume_2.6.pdf#toolbar=0&view=FitH`}
          width="100%"
          height="100%"
          title="Resume PDF"
          className={styles.pdfViewer}
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            display: 'block'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Resume; 