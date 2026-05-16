import React from 'react';
import { motion } from 'framer-motion';
import './styles/about.css';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const info = [
  { k: 'Role',        v: 'Full-Stack Developer' },
  { k: 'Location',   v: 'Barcelona, ES' },
  { k: 'Looking for',v: 'Internship / Freelance' },
  { k: 'Stack',      v: 'React · Node · Java' },
];

export default function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-inner section-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="about-text-block">
          <motion.p className="section-label" variants={fadeUp}>About me</motion.p>
        <motion.h2 className="section-heading" variants={fadeUp}>Developer &amp; designer at heart.</motion.h2>
          <motion.p className="about-body" variants={fadeUp}>
            I'm a 19-year-old developer who cares deeply about <strong>clarity</strong>,{' '}
            <strong>performance</strong>, and <strong>design</strong>. I turn complex ideas into simple,
            delightful products — from interactive dashboards to game plugins.
          </motion.p>
          <motion.p className="about-body" variants={fadeUp}>
            Recently I've been building dashboards, tooling, and website projects while pushing into
            app &amp; game development. Multilingual, Barcelona-based, Nepali roots.
          </motion.p>
        </div>

        <motion.div variants={fadeUp}>
          <div className="about-grid">
            {info.map(({ k, v }) => (
              <div className="about-grid-item" key={k}>
                <span className="about-key">{k}</span>
                <span className="about-val">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
