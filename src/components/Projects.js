import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/project1.jpg',
    link: 'https://food-lovat-iota.vercel.app/',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    image: '/project2.jpg',
    link: 'https://mining-chi.vercel.app/',
  },
  {
    id: 3,
    title: 'Car selling Website',
    description: 'A weather application with real-time data and interactive maps.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    image: '/project3.jpg',
    link: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-content"
        >
          <h2 className="section-title">
            <span className="cyber-text">My</span>
            <span className="cyber-accent">Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 