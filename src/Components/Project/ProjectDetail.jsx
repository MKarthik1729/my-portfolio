import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import styles from '../../Styles/projectDetail.module.scss';
import Data from '../../Data.js';

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    longDescription: "This e-commerce platform was built using React for the frontend and Node.js with Express for the backend. It features user authentication with JWT, product management with image uploads, a shopping cart with real-time updates, and payment processing with Stripe. The project also includes an admin dashboard for managing products, orders, and users.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    githubLink: "https://github.com/username/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    images: [
      "https://via.placeholder.com/800x450?text=E-Commerce+Home",
      "https://via.placeholder.com/800x450?text=Product+Page",
      "https://via.placeholder.com/800x450?text=Cart+Page",
      "https://via.placeholder.com/800x450?text=Checkout+Process"
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart with real-time updates",
      "Secure checkout process with Stripe integration",
      "Order history and tracking",
      "Admin dashboard for product and order management",
      "Responsive design for all devices"
    ],
    challenges: [
      "Implementing real-time cart updates across multiple browser tabs",
      "Optimizing image uploads and storage",
      "Creating a seamless checkout experience",
      "Handling payment processing errors gracefully"
    ],
    solutions: [
      "Used WebSockets for real-time cart synchronization",
      "Implemented image compression and CDN integration",
      "Created a step-by-step checkout process with progress indicators",
      "Built comprehensive error handling and user feedback mechanisms"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "This task management application allows teams to collaborate on projects, assign tasks, set deadlines, and track progress in real-time. It includes features like task categorization, priority levels, file attachments, and team communication tools. The app was built with React for the frontend and Firebase for the backend, providing real-time data synchronization.",
    technologies: ["React", "Firebase", "Redux", "Material UI", "Chart.js"],
    githubLink: "https://github.com/username/taskmanager",
    liveLink: "https://taskmanager-demo.com",
    images: [
      "https://via.placeholder.com/800x450?text=Task+Manager+Dashboard",
      "https://via.placeholder.com/800x450?text=Project+View",
      "https://via.placeholder.com/800x450?text=Task+Details",
      "https://via.placeholder.com/800x450?text=Team+Collaboration"
    ],
    features: [
      "User authentication and team management",
      "Project and task organization",
      "Real-time updates and notifications",
      "File attachments and comments",
      "Task filtering and search",
      "Progress tracking and reporting",
      "Mobile-responsive design"
    ],
    challenges: [
      "Managing complex state with Redux",
      "Implementing real-time updates with Firebase",
      "Creating an intuitive user interface for task management",
      "Optimizing performance with large datasets"
    ],
    solutions: [
      "Used Redux Toolkit for simplified state management",
      "Leveraged Firebase Realtime Database for instant updates",
      "Designed a clean and intuitive UI with Material UI",
      "Implemented pagination and lazy loading for better performance"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with detailed forecasts and interactive visualizations.",
    longDescription: "This weather dashboard provides users with detailed weather information, including current conditions, hourly forecasts, and 7-day predictions. It features interactive charts and maps for visualizing weather data, location-based forecasts, and severe weather alerts. The app was built using React for the frontend and integrates with multiple weather APIs for comprehensive data.",
    technologies: ["React", "D3.js", "Chart.js", "Weather API", "Geolocation API"],
    githubLink: "https://github.com/username/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.com",
    images: [
      "https://via.placeholder.com/800x450?text=Weather+Dashboard",
      "https://via.placeholder.com/800x450?text=Forecast+View",
      "https://via.placeholder.com/800x450?text=Weather+Map",
      "https://via.placeholder.com/800x450?text=Weather+Alerts"
    ],
    features: [
      "Current weather conditions",
      "Hourly and 7-day forecasts",
      "Interactive weather maps",
      "Severe weather alerts",
      "Location-based forecasts",
      "Responsive design for all devices"
    ],
    challenges: [
      "Integrating multiple weather data sources",
      "Creating accurate and visually appealing data visualizations",
      "Handling API rate limits and errors",
      "Optimizing performance with complex data"
    ],
    solutions: [
      "Implemented a caching layer to reduce API calls",
      "Used D3.js and Chart.js for custom visualizations",
      "Created robust error handling and fallback mechanisms",
      "Optimized data processing with Web Workers"
    ]
  }
];

// Enhance the Data from Data.js with additional details for the project detail page
const enhancedProjectsData = Data.map(project => {
  // Find matching project in projectsData if it exists
  const matchingProject = projectsData.find(p => p.id === project.id);
  
  // If a matching project exists, merge the data
  if (matchingProject) {
    return {
      ...project,
      longDescription: matchingProject.longDescription,
      githubLink: matchingProject.githubLink,
      liveLink: project.link,
      images: matchingProject.images,
      features: matchingProject.features,
      challenges: matchingProject.challenges,
      solutions: matchingProject.solutions
    };
  }
  
  // If no matching project exists, add default values
  return {
    ...project,
    longDescription: project.tag,
    githubLink: project.link,
    liveLink: project.link,
    images: [project.img],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    challenges: ["Challenge 1", "Challenge 2", "Challenge 3"],
    solutions: ["Solution 1", "Solution 2", "Solution 3"]
  };
});

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = enhancedProjectsData.find(p => p.id === parseInt(id));
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" className={styles.backButton}>
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className={styles.projectDetail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <Link to="/projects" className={styles.backButton}>
          <FaArrowLeft /> Back to Projects
        </Link>
        
        <h1>{project.title}</h1>
        
        <div className={styles.imageGallery}>
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} - Image ${index + 1}`} />
          ))}
        </div>
        
        <div className={styles.projectInfo}>
          <div className={styles.description}>
            <h2>About the Project</h2>
            <p>{project.longDescription}</p>
          </div>
          
          <div className={styles.technologies}>
            <h2>Technologies Used</h2>
            <div className={styles.techTags}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.features}>
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.challenges}>
            <h2>Challenges & Solutions</h2>
            <div className={styles.challengeItem}>
              <h3>Challenges</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className={styles.challengeItem}>
              <h3>Solutions</h3>
              <ul>
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.links}>
            <h2>Project Links</h2>
            <div className={styles.linkButtons}>
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.githubLink}
                >
                  <FaGithub /> GitHub Repository
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.liveLink}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetail; 