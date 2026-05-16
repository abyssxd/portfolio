import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/header.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#proglanguages', label: 'Skills' },
  { href: '#languages', label: 'Languages' },
  { href: '#stats', label: 'Stats' },
];

export default function Header({ toggleTheme, isLightMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={['header-container', scrolled ? 'header-shrink' : ''].join(' ')}>
      <div className="nav-wrap">
        <a href="#home" className="brand">Abishek<span className="dot">.</span></a>

        <nav className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="right-controls">
          <label htmlFor="toggle" className="switch">
            <input
              id="toggle"
              className="toggle-switch"
              type="checkbox"
              checked={isLightMode}
              onChange={toggleTheme}
              aria-label="Toggle theme"
            />
            <div className="sun-moon"><div className="dots" /></div>
            <div className="background"><div className="stars1" /><div className="stars2" /></div>
          </label>

          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}