import React from 'react';
import { projects as styles } from './styled';
import { motion } from 'framer-motion';
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
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.imageContainer}>
                <img src={project.img} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.tag}</p>
                <div className={styles.techStack}>
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;