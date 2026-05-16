import React from 'react';
import { motion } from 'framer-motion';
import './styles/lang.css';

const langs = [
  { label: 'Nepali',  level: 'Native', flag: 'np', note: 'Mother tongue.' },
  { label: 'English', level: 'C1',     flag: 'gb', note: 'Professional working proficiency.' },
  { label: 'Hindi',   level: 'Fluent', flag: 'in', note: 'Daily conversational use.' },
  { label: 'Spanish', level: 'B2',     flag: 'es', note: 'CEFR B2. Bachillerato & Selectividad.' },
  { label: 'Catalan', level: 'B2',     flag: 'cat', note: 'CEFR B2. Batxillerat & Selectivitat.' },
];

const card = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

function Flag({ code, label }) {
  if (code === 'cat') {
    return (
      <svg className="spoken-flag" viewBox="0 0 32 22" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 3, flexShrink: 0 }}>
        <rect width="32" height="22" fill="#FCDD09"/>
        {[0,1,2,3].map(i => (
          <rect key={i} x="0" y={2.44 + i * 4.78} width="32" height="2.44" fill="#DA121A"/>
        ))}
      </svg>
    );
  }
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      alt={`${label} flag`}
      className="spoken-flag"
    />
  );
}

export default function SpokenLanguages() {
  return (
    <section className="spoken-section">
      <div className="spoken-inner">
        <p className="section-label">Multilingual</p>
        <h2 className="section-heading">Spoken Languages</h2>

        <motion.div
          className="spoken-grid"
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {langs.map((l) => (
            <motion.article className="spoken-card" key={l.label} variants={card}>
              <div className="spoken-card-top">
                <Flag code={l.flag} label={l.label} />
                <div>
                  <div className="spoken-label">{l.label}</div>
                  <span className="chip">{l.level}</span>
                </div>
              </div>
              <p className="spoken-note">{l.note}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
