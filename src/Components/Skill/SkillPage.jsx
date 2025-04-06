import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaPython, FaJava, FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiMui, SiPostgresql, SiReact } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useTheme } from '../../context/ThemeContext';
import styles from './SkillPage.module.scss';

function SkillPage() {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const skills = [
    { icon: <FaPython />, name: "Python", category: "Language", proficiency: 85, description: "Used for data analysis, automation, and backend development" },
    { icon: <FaHtml5 />, name: "HTML", category: "Frontend", proficiency: 95, description: "Semantic HTML5 for modern web applications" },
    { icon: <FaCss3Alt />, name: "CSS", category: "Frontend", proficiency: 90, description: "Advanced styling with SCSS, animations, and responsive design" },
    { icon: <FaJsSquare />, name: "JavaScript", category: "Language", proficiency: 90, description: "ES6+ features, async programming, and DOM manipulation" },
    { icon: <FaJava />, name: "Java", category: "Language", proficiency: 80, description: "Object-oriented programming and enterprise applications" },
    { icon: <FaReact />, name: "React", category: "Frontend", proficiency: 85, description: "Component-based UI development with hooks and context" },
    { icon: <SiReact />, name: "React Native", category: "Mobile", proficiency: 75, description: "Cross-platform mobile app development with React" },
    { icon: <FaNode />, name: "Node.js", category: "Backend", proficiency: 80, description: "Server-side JavaScript and RESTful API development" },
    { icon: <GrMysql />, name: "MySQL", category: "Database", proficiency: 75, description: "Relational database design and SQL optimization" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database", proficiency: 70, description: "Advanced relational database with JSON support" },
    { icon: <SiMongodb />, name: "MongoDB", category: "Database", proficiency: 70, description: "NoSQL database for flexible data storage" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion", category: "Animation", proficiency: 85, description: "Advanced animations and transitions for React" },
    { icon: <FaBootstrap />, name: "Bootstrap", category: "Frontend", proficiency: 90, description: "Responsive design and UI components" },
    { icon: <SiMui />, name: "Material-UI", category: "Frontend", proficiency: 85, description: "React component library for consistent design" }
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

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
    <section className={styles.skillPage}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className={styles.title}>
          Technical Skills
        </motion.h1>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Technologies I work with
        </motion.p>
        
        <motion.div 
          className={styles.categoryFilter}
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.skillsGrid} 
          variants={containerVariants}
        >
          {filteredSkills.map((skill, index) => (
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
              <div className={styles.proficiencyBar}>
                <div 
                  className={styles.proficiencyFill} 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className={styles.description}>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SkillPage; 