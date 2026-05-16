import React from 'react';
import { motion } from 'framer-motion';
import './styles/about.css';

const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: .6, staggerChildren: .08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: .5 } } };

export default function About() {
  return (
    <section className="about-section">
      <motion.div className="about-card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        <motion.h2 className="section-title" variants={item}>About me</motion.h2>
        <motion.p className="about-text" variants={item}>
          I’m a 19 year old developer who cares about <strong>clarity</strong>, <strong>performance</strong>, and <strong>design</strong>.
          I enjoy turning complex ideas into simple, delightful products. Recently, I’ve been working on
          dashboards, various tools, and website projects, pushing into app & game development.
        </motion.p>

        <motion.div className="about-grid" variants={item}>
          <div><span className="k">Role</span><span className="v">Full‑stack Developer</span></div>
          <div><span className="k">Location</span><span className="v">Barcelona, ES</span></div>
          <div><span className="k">Looking for</span><span className="v">Internship / Freelance</span></div>
          <div><span className="k">Stack</span><span className="v">React · Node · Java</span></div>
        </motion.div>
      </motion.div>
    </section>
  );
}