import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from '../Styles/resume.module.scss';

const Resume = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Update PDF viewer background based on theme
    const pdfViewer = document.querySelector(`.${styles.pdfViewer}`);
    if (pdfViewer) {
      pdfViewer.style.backgroundColor = isDarkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)';
    }
  }, [isDarkMode]);

  return (
    <motion.div 
      className={styles.resume}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.pdfContainer}>
        <iframe
          src="/Karthik_resume_2.6.pdf"
          width="100%"
          height="100%"
          title="Resume PDF"
          className={styles.pdfViewer}
          style={{
            backgroundColor: isDarkMode ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
            border: 'none'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Resume; 