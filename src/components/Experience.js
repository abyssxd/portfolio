import React from 'react';
import { motion } from 'framer-motion';
import './styles/experience.css';

const experiences = [
  { period: '2024 — 2025', title: 'React', details: 'Restaurant website (Vatti Taverna), BlockBase, Minecraft Unicode Tools, Kafal Converter frontend, portfolio sites.' },
  { period: '2023 — 2025', title: 'Java', details: 'UltraCollections & UltraMonitor (MC plugins on SpigotMC), Agendify (school Android app).' },
  { period: '2023 — 2024', title: 'Node.js', details: 'CanSat v2 — real-time data monitoring dashboard with React frontend and Express backend. Kafal Converter backend.' },
  { period: '2020 — 2023', title: 'Web Development', details: 'Foundational HTML, CSS, PHP & JavaScript sites. Started building presence online.' },
];

const item = { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.45 } } };

export default function Experience() {
  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        <div className="timeline-header">
          <p className="section-label">Background</p>
          <h2 className="section-heading">Experience</h2>
        </div>

        <motion.div
          className="timeline"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {experiences.map((exp) => (
            <motion.article className="timeline-item" key={exp.title} variants={item}>
              <div className="timeline-line" />
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-details">{exp.details}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
