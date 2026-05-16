import React from 'react';
import { motion } from 'framer-motion';
import './styles/experience.css';

const experiences = [
  { period: '2024 — 2025', title: 'React', details: 'Restaurant Website, BlockBase, Minecraft Unicode Tools' },
  { period: '2023 — 2025', title: 'Java', details: 'UltraCollections(MC Plugin), UltraMonitor Dashboard (MC Plugin), Agendify (School App Project)' },
  { period: '2023 — 2024', title: 'Node.js', details: 'Cansat-v2 Dashboard for real time data monitoring (React Node & Express)' },
  { period: '2020 — 2023', title: 'Web Development', details: 'Basic HTML, CSS, PHP & JS websites' },
];

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Experience() {
  return (
    <section className="timeline-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <motion.article className="timeline-item" key={exp.title} variants={item} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            <div className="dot" />
            <div className="content">
              <div className="period">{exp.period}</div>
              <h4>{exp.title}</h4>
              <p>{exp.details}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}