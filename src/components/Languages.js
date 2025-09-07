import React from 'react';
import { motion } from 'framer-motion';
import './styles/prog_lang.css';

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg', desc: 'Versatile OOP for robust backends.' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg', desc: 'APIs and servers in JavaScript.' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg', desc: 'Fast, composable UIs.' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg', desc: 'Server-side scripting.' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg', desc: 'Schema design and SQL queries.' },
  { name: 'Bukkit API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/minecraft.svg', desc: 'Minecraft plugin development.' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg', desc: 'Semantic, accessible markup.' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg', desc: 'Responsive layouts and styling.' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg', desc: 'ES6+, DOM, async.' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg', desc: 'Scripting and automation.' },
  { name: 'Android Studio & API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/androidstudio.svg', desc: 'Built a research-project app.' },
];


const variants = { grid: { show: { transition: { staggerChildren: .05 } } }, card: { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } } };

export default function Languages() {
  return (
    <section className="prog-languages-container" id="proglanguages">
      <h2 className="section-title">Skills & Tools</h2>
      <motion.div className="prog-language-grid" variants={variants.grid} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {skills.map((s) => (
          <motion.article className="prog-language-card" key={s.name} variants={variants.card}>
            <img src={s.icon} alt={s.name} className="prog-language-icon" />
            <div className="prog-language-meta">
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}