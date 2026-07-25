import React from 'react';
import { motion } from 'framer-motion';
import './styles/prog_lang.css';

const skills = [
  { name: 'Java',               icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg',          desc: 'Plugins and backends' },
  { name: 'Node.js',            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg',     desc: 'APIs and servers' },
  { name: 'React',              icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg',         desc: 'Most of my frontends' },
  { name: 'JavaScript',         icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg',   desc: 'ES6, async, DOM' },
  { name: 'HTML5',              icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg',        desc: 'Markup' },
  { name: 'CSS3',               icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg',         desc: 'Layouts and theming' },
  { name: 'PHP',                icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg',          desc: 'Older projects' },
  { name: 'MySQL',              icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',        desc: 'Queries and schemas' },
  { name: 'Python',             icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg',       desc: 'Small scripts' },
  { name: 'Bukkit API',         icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/minecraft.svg',   desc: 'Minecraft plugins' },
  { name: 'Android Studio',     icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/androidstudio.svg', desc: 'Agendify' },
];

const card = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function Languages() {
  return (
    <section className="skills-section">
      <div className="skills-inner">
        <h2 className="section-heading">Skills and tools</h2>

        <motion.div
          className="skills-grid"
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((s) => (
            <motion.article className="skill-card" key={s.name} variants={card}>
              <img src={s.icon} alt={s.name} className="skill-icon" />
              <div className="skill-info">
                <div className="skill-name">{s.name}</div>
                <div className="skill-desc">{s.desc}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
