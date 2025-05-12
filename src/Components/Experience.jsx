import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience as styles } from './styled';

function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "21n",
      period: "Mar 2025 - Present",
      location: "Hyderabad, India",
      points: [
        "Debugged and optimized Kotlin mobile application, ensuring proper functionality and performance across different devices",
        "Designed and implemented a basic common chatbot platform with essential features and integration capabilities",
        "Developed a salon management application featuring advanced search functionality, map integration, and personalized recommendations for the homepage",
        "Led homepage development initiatives, incorporating modern UI/UX practices and responsive design principles"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Srivelu Enterprises",
      period: "Jul 2024 - Sep 2024",
      location: "Remote",
      points: [
        "Created and deployed a modern, responsive corporate website using React.js, incorporating best practices in front-end development",
        "Built dynamic components and interactive features using React Hooks and Context API, boosting user engagement",
        "Delivered project that contributed to 50% increase in company revenue and was successfully implemented in 3-4 demo projects",
        "Earned exceptional client feedback and secured additional project opportunities through demonstrated technical expertise"
      ]
    },
    {
      title: "Trainee Machine Learning Engineer",
      company: "Technocolabs Software Pvt Ltd",
      period: "Feb 2024 - Jun 2024",
      location: "Remote",
      points: [
        "Created and deployed an end-to-end ML pipeline integrating binary and multiclass classification models with 93% accuracy",
        "Built and documented RESTful API endpoints using FastAPI, enabling seamless model inference and integration",
        "Constructed a responsive React-based user interface with TypeScript, implementing real-time data visualization and user feedback",
        "Established robust data security measures and ensured compliance with industry standards for handling sensitive information"
      ]
    }
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

  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="experience" className={styles.experienceV2} style={{ width: '100vw', maxWidth: '100vw', margin: 0, padding: 0 }}>
      <h2 className={styles.titleV2}>Work Experience</h2>
      <div className={styles.timelineGrid}>
        <div className={styles.timelineCenter}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.left : styles.right}`}
              onClick={() => setSelectedExp(idx)}
              style={{ cursor: 'pointer' }}
            >
              <div className={`${styles.timelineContent} ${selectedExp === idx ? styles.selectedBlock : ''}`}>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={`${styles.timelineDot} ${selectedExp === idx ? styles.selectedDot : ''}`}></div>
            </div>
          ))}
          <div className={styles.timelineLineMain}></div>
        </div>
        <div className={styles.timelineRight}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExp}
              className={styles.currentCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.currentPeriod}>{experiences[selectedExp].period}</div>
              <div className={styles.currentTitle}>{experiences[selectedExp].title} @ {experiences[selectedExp].company}</div>
              <div className={styles.currentLocation}>{experiences[selectedExp].location}</div>
              <motion.ul 
                className={styles.currentPoints}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {experiences[selectedExp].points.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    variants={pointVariants}
                    className={styles.experiencePoint}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Experience; 