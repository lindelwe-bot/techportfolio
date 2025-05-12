import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skills = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'React', bgColor: '#dbeafe', color: '#2563eb' },
      { name: 'JavaScript', bgColor: '#fef3c7', color: '#d97706' },
      { name: 'HTML/CSS', bgColor: '#fee2e2', color: '#dc2626' },
      { name: 'TypeScript', bgColor: '#dbeafe', color: '#2563eb' },
      { name: 'Node.js', bgColor: '#e9d5ff', color: '#7c3aed' },
      { name: 'Express', bgColor: '#e9d5ff', color: '#7c3aed' },
      { name: 'MongoDB', bgColor: '#bbf7d0', color: '#059669' },
      { name: 'SQL', bgColor: '#e0f2fe', color: '#0284c7' },
      { name: 'Git', bgColor: '#f3e8ff', color: '#7e22ce' },
      { name: 'Docker', bgColor: '#e0f2fe', color: '#0284c7' },
      { name: 'AWS', bgColor: '#fef3c7', color: '#d97706' },
      { name: 'CI/CD', bgColor: '#f0fdf4', color: '#16a34a' }
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Communication', bgColor: '#f0fdf4', color: '#16a34a' },
      { name: 'Teamwork', bgColor: '#eff6ff', color: '#2563eb' },
      { name: 'Problem Solving', bgColor: '#fef3c7', color: '#d97706' },
      { name: 'Time Management', bgColor: '#f3e8ff', color: '#7e22ce' },
      { name: 'Adaptability', bgColor: '#f0fdfa', color: '#0d9488' },
      { name: 'Leadership', bgColor: '#fef2f2', color: '#dc2626' }
    ],
  },
  {
    category: 'Hobbies',
    items: [
      { name: 'Coding', bgColor: '#f0f9ff', color: '#0369a1' },
      { name: 'Reading', bgColor: '#faf5ff', color: '#9333ea' },
      { name: 'Gaming', bgColor: '#f0fdf4', color: '#16a34a' },
      { name: 'Photography', bgColor: '#fef2f2', color: '#dc2626' },
      { name: 'Music', bgColor: '#fef3c7', color: '#d97706' },
      { name: 'Travel', bgColor: '#e0f2fe', color: '#0284c7' }
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-content"
        >
          <h2 className="section-title">
            <span className="cyber-text">Technical</span>
            <span className="cyber-accent">Skills</span>
          </h2>
          <div className="skills-grid">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className="skill-tag"
                        style={{
                          backgroundColor: skill.bgColor,
                          color: skill.color
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 