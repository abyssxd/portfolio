import React from 'react';
import { motion } from 'framer-motion';
import './styles/experience.css';

const experiences = [
  { period: '2024-2025', title: 'React', details: 'Restaurant website (Vatti Taverna), BlockBase, Minecraft Unicode Tools, Kafal Converter frontend, portfolio sites.' },
  { period: '2023-2025', title: 'Java', details: 'UltraCollections and UltraMonitor (Minecraft plugins published on SpigotMC), Agendify (school Android app).' },
  { period: '2023-2024', title: 'Node.js', details: 'CanSat v2, a real-time sensor dashboard with a React frontend and an Express backend. Also the Kafal Converter backend.' },
  { period: '2020-2023', title: 'Web Development', details: 'First sites, built with plain HTML, CSS, PHP and JavaScript while learning the basics.' },
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
