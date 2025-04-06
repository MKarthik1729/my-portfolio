import React from 'react';
import { skills as styles } from './styled';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaPython, FaJava, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python", category: "Language" },
    { icon: <FaHtml5 />, name: "HTML", category: "Frontend" },
    { icon: <FaCss3Alt />, name: "CSS", category: "Frontend" },
    { icon: <FaJsSquare />, name: "JavaScript", category: "Language" },
    { icon: <FaJava />, name: "Java", category: "Language" },
    { icon: <FaReact />, name: "React", category: "Frontend" },
    { icon: <FaNode />, name: "Node.js", category: "Backend" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className={styles.title}>
          Technical Skills
        </motion.h2>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Technologies I work with
        </motion.p>
        
        <motion.div className={styles.skillsGrid} variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.iconWrapper}>
                {skill.icon}
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <span className={styles.category}>{skill.category}</span>
            </motion.div>
          ))}
          
          <motion.div
            className={styles.skillCard}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <Link to="/skills" className={styles.viewMoreLink}>
              <div className={styles.iconWrapper}>
                <FaArrowRight />
              </div>
              <h3 className={styles.skillName}>View All Skills</h3>
              <span className={styles.category}>See More</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;