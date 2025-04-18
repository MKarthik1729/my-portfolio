import React from 'react';
import { projects as styles } from './styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Data from '../Data.js';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const getProjectLink = (project) => {
    if (project.dedicatedRoute) {
      return `/projects/${project.dedicatedRoute}`;
    }
    return `/projects/${project.id}`;
  };

  return (
    <section id="projects" className={styles.projects}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className={styles.title}>
          Featured Projects
        </motion.h2>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Some of my recent work
        </motion.p>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>
          {Data.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Link to={getProjectLink(project)} className={styles.projectLink}>
                <div className={styles.imageContainer}>
                  <img src={project.img} alt={project.title} />
                  <div className={styles.overlay}>
                    <span>View Details</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.tag}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;