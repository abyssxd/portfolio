import React from 'react';
import { motion } from 'framer-motion';
import './styles/about.css';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const info = [
  { k: 'Location',   v: 'Barcelona, ES' },
  { k: 'Studying',   v: 'Ingeniería Informática, UB' },
  { k: 'Works with', v: 'React · Node · Java' },
  { k: 'Focus',      v: 'Web apps and small tools' },
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
          <motion.h2 className="section-heading" variants={fadeUp}>Learning by building.</motion.h2>
          <motion.p className="about-body" variants={fadeUp}>
            I'm Abishek Bhusal, a 19-year-old student based in Barcelona, currently studying
            Ingeniería Informática at the Universitat de Barcelona. Alongside my studies, I've been
            building web apps and small tools using React, Node.js, and Java through personal projects.
          </motion.p>
          <motion.p className="about-body" variants={fadeUp}>
            I enjoy learning by building, figuring out how things work by actually putting them
            together, from the interface down to the logic behind it.
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
