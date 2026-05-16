import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Stats from './components/Stats';
import SpokenLanguages from './components/SpokenLanguages';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import './global.css';
import './components/styles/switch.css';

function App() {
  const [isLightMode, setisLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light';
  });

  useEffect(() => {
    const theme = isLightMode ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isLightMode]);

  const toggleTheme = () => {
    setisLightMode((prevMode) => !prevMode);
  };

  return (
    <div className="app-container">
      <Header toggleTheme={toggleTheme} isLightMode={isLightMode} />
      <main className="content">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="proglanguages">
          <Languages />
          </section>
        <section id="languages">
          <SpokenLanguages />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
