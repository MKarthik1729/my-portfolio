import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Styles/resume.module.scss';

const Resume = () => {
  return (
    <motion.div 
      className={styles.resume}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <h1>Resume</h1>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2>Education</h2>
            <div className={styles.item}>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className={styles.institution}>University Name</p>
              <p className={styles.date}>2018 - 2022</p>
              <p>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.item}>
              <h3>Software Developer</h3>
              <p className={styles.institution}>Company Name</p>
              <p className={styles.date}>2022 - Present</p>
              <ul>
                <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.section}>
            <h2>Skills</h2>
            <div className={styles.skills}>
              <div className={styles.skillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React, Redux, Next.js</li>
                  <li>Responsive Design, CSS Frameworks</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js, Express</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>RESTful APIs, GraphQL</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Tools & Others</h3>
                <ul>
                  <li>Git, GitHub, GitLab</li>
                  <li>Docker, AWS</li>
                  <li>Agile, Scrum, JIRA</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.downloadSection}>
            <a href="/resume.pdf" className={styles.downloadButton} download>
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume; 