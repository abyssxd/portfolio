import React from 'react';
import { motion } from 'framer-motion';
import './styles/hero.css';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 } }
};
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const photo = { hidden: { opacity: 0, scale: 0.96, y: 24 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } } };

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <motion.div className="hero-left" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1, margin: '-60px' }}>
        <motion.h1 className="hero-name" variants={item}>
          Abishek Bhusal
        </motion.h1>

        <motion.p className="hero-about" variants={item}>
          19 year old full‑stack developer focused on clean UX and efficient systems. I build web apps, tooling, and game‑adjacent projects with React, Node, and Java — shipping polished, fast experiences.
        </motion.p>

        <motion.div className="hero-contacts" variants={item}>
          <a className="cta" href="mailto:abish3kbhusal@gmail.com" aria-label="Email Abishek">Email</a>
          <a className="cta" href="https://github.com/abyssxd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="cta" href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </motion.div>

        <motion.p className="hero-subtle" variants={item}>Barcelona · Available for internships & freelance</motion.p>
      </motion.div>

      <div className="hero-right">
        <motion.div className="portrait-wrap" variants={photo} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1, margin: '-60px' }}>
          <motion.img src="images/portrait.png" alt="Abishek crossing arms" className="portrait" whileHover={{ scale: 1.015 }} transition={{ type: 'spring', stiffness: 150, damping: 18 }} />
          <div className="portrait-ring" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}