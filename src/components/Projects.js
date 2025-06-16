import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../styles/Projects.css';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: var(--bg-color);
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
  }
`;

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
    title: 'Pharmarcy system',
    description: 'A pharmacy system with real-time data for everyday sells',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    image: '/project3.jpg',
    link: 'https://phamarcy-indol.vercel.app/',
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
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </ProjectLink>
                </ProjectLinks>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;