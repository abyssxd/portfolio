import React from 'react';
import { motion } from 'framer-motion';
import './styles/lang.css';

const langs = [
  { label: 'Nepali — Native', flag: 'https://flagpedia.net/data/flags/h80/np.png', note: 'Official language of Nepal.' },
  { label: 'English — C1', flag: 'https://flagpedia.net/data/flags/h80/gb.png', note: 'Professional working proficiency.' },
  { label: 'Hindi — Fluent', flag: 'https://flagpedia.net/data/flags/h80/in.png', note: 'Daily conversational use.' },
  { label: 'Spanish — B2', flag: 'https://flagpedia.net/data/flags/h80/es.png', note: 'CEFR B2 (upper‑intermediate). Completed Bachillerato and Selectividad.' },
  { label: 'Catalan — B2', flag: 'https://flagpedia.net/data/flags/h80/es.png', note: 'CEFR B2 (upper‑intermediate). Completed Batxillerat and Selectivitat.' },
];

const variants = { grid: { show: { transition: { staggerChildren: .05 } } }, card: { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } } };

export default function SpokenLanguages() {
  return (
    <section className="languages-container" id="languages">
      <h2 className="section-title">Spoken Languages</h2>
      <motion.div className="spoken-language-grid" variants={variants.grid} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {langs.map((l) => (
          <motion.article className="spoken-language-card" key={l.label} variants={variants.card}>
            <div className="flag-container"><img src={l.flag} alt="" /></div>
            <div className="spoken-language-meta">
              <h4 className="spoken-language-label">{l.label}</h4>
              <p className="spoken-language-desc">{l.note}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}