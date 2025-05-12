import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update theme in localStorage and document
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider value={{ isDarkMode, setIsDarkMode }}>
    <div className="App">
        <ThemeToggle />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Reviews />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
