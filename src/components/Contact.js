import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';
import Contact from './Contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2 className="section-title">
            <span className="cyber-text">Get In</span>
            <span className="cyber-accent">Touch</span>
          </h2>
          <div className="contact-grid">
            <div className="contact-info">
              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h3 className="info-title">Email</h3>
                <p className="info-text">
                  <a href="mailto:lindelwesiphiwo@gmail.com" className="info-link">
                    lindelwesiphiwo@gmail.com
                  </a>
                  <h3 className="info-title">Contact</h3>
                  <a href="tel:+263784262096" className="info-link">
                    0784262096
                  </a>
                </p>
              </motion.div>

              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="info-title">Location</h3>
                <p className="info-text">Bulawayo, Zimbabwe</p>
              </motion.div>

              <div className="social-cards">
                <motion.a 
                  href="https://www.linkedin.com/in/lindelwe-s-njiba-677721342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a 
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/lindelwe122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="form-textarea"
                />
              </div>
              <button type="submit" className="cyber-button primary">
                Send Message
              </button>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-status success"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;