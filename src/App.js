import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Stats from './components/Stats';
import SpokenLanguages from './components/SpokenLanguages';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

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
        <About />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Experience />
        <br />
        <br />
        <Languages />
        <br />
        <br />
        <SpokenLanguages />
        <br />
        <br />
        <Stats />
      </main>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
