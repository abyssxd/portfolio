import React from 'react';
import { motion } from 'framer-motion';
import './styles/hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <motion.div
        className="hero-left"
        initial="initial"
        animate="animate"
      >
        <motion.p className="hero-eyebrow" {...fadeUp(0.1)}>
          Full-Stack Developer
        </motion.p>

        <motion.h1 className="hero-name" {...fadeUp(0.2)}>
          Abishek
          <span className="hero-name-outline"> Bhusal</span>
        </motion.h1>

        <motion.p className="hero-tagline" {...fadeUp(0.35)}>
          19-year-old developer based in Barcelona. I build web apps, tooling, and
          polished experiences with React, Node, and Java — focused on clean UX and efficient systems.
        </motion.p>

        <motion.div className="hero-ctas" {...fadeUp(0.45)}>
          <a
            className="cta cta-primary"
            href="https://github.com/abyssxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="cta cta-ghost"
            href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a className="cta cta-ghost" href="#projects">
            See my work
          </a>
        </motion.div>

        <motion.div className="hero-meta" {...fadeUp(0.55)}>
          <span className="hero-meta-dot" aria-hidden="true" />
          Barcelona, ES · Available for internships &amp; freelance
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        <div className="portrait-wrap">
          <motion.img
            src="images/portrait.png"
            alt="Abishek Bhusal"
            className="portrait"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          />
          <div className="portrait-accent" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
}
