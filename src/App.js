import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';  // Create this custom hook
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
  const { isDarkMode, setIsDarkMode } = useTheme();

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
