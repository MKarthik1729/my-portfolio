import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../../Styles/projects.module.scss';

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    githubLink: "https://github.com/username/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    image: "https://via.placeholder.com/800x450?text=E-Commerce+Platform",
    category: "Full Stack",
    route: "e-commerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Firebase", "Redux", "Material UI", "Chart.js"],
    githubLink: "https://github.com/username/taskmanager",
    liveLink: "https://taskmanager-demo.com",
    image: "https://via.placeholder.com/800x450?text=Task+Management",
    category: "Web App",
    route: "task-management-app"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that provides detailed forecasts and weather data visualization.",
    technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "Leaflet"],
    githubLink: "https://github.com/username/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.com",
    image: "https://via.placeholder.com/800x450?text=Weather+Dashboard",
    category: "Data Visualization",
    route: "weather-dashboard"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills.",
    technologies: ["React", "SCSS", "Framer Motion", "React Router"],
    githubLink: "https://github.com/username/portfolio",
    liveLink: "https://portfolio-demo.com",
    image: "https://via.placeholder.com/800x450?text=Portfolio",
    category: "Web Design",
    route: "portfolio-website"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts and analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubLink: "https://github.com/username/social-dashboard",
    liveLink: "https://social-dashboard-demo.com",
    image: "https://via.placeholder.com/800x450?text=Social+Dashboard",
    category: "Full Stack",
    route: "social-media-dashboard"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts, nutrition, and fitness goals.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubLink: "https://github.com/username/fitness-app",
    liveLink: "https://fitness-app-demo.com",
    image: "https://via.placeholder.com/800x450?text=Fitness+App",
    category: "Mobile",
    route: "fitness-tracking-app"
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

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
        duration: 0.5
      }
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div 
          className={styles.filterButtons}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <Link to={`/projects/${project.route}`} className={styles.viewDetails}>
                    View Details
                  </Link>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.githubLink}
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.liveLink}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects; 