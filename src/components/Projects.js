import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/projects.css';

const featured = {
  name: 'Kafal Converter',
  tagline: 'Java → Bedrock resource pack converter',
  description:
    'Convert Minecraft Java resource packs to Bedrock Edition with high-quality precision — animated 3D items, custom blocks, custom GUIs with a pixel-accurate offset editor, font conversion, Geyser V2 mappings, and more. Trusted by over 1,000 pack conversions.',
  url: 'https://kafal.pogmc.net',
  tags: ['React', 'Node.js'],
  stats: [
    { label: 'Packs converted', value: '1,000+' },
    { label: 'Stack', value: 'React · Node' },
    { label: 'Status', value: 'Live' },
  ],
  features: ['GUI Offset Editor', 'Font Conversion', 'Animated 3D Items', 'Custom Blocks & Armors', 'Geyser V2 Mappings'],
};

const ownProjects = [
  { name: 'UltraBoomerangs', description: 'Minecraft plugin adding fully custom boomerangs with MMO plugin support (mcMMO, AuraSkills).', url: 'https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/', tags: ['Java', 'Bukkit API'] },
  { name: 'UltraCollections', description: 'Fully customizable progression plugin for RPG Minecraft servers. Published on SpigotMC.', url: 'https://www.spigotmc.org/resources/ultracollections-fully-customizable.121650/', tags: ['Java', 'Bukkit API'] },
  { name: 'UltraMonitor', description: 'Web-based Minecraft server manager with a clean frontend and real-time console support.', url: 'https://www.spigotmc.org/resources/ultramonitor-%E2%AD%95-console-support-%E2%AD%95.121546/', tags: ['Java', 'Node', 'React'] },
  { name: 'Cansat V2', description: 'Real-time data monitoring dashboard for CanSat sensors. React frontend, Node + Express backend.', url: 'https://github.com/abyssxd/CanSat-v2', tags: ['React', 'Node'] },
  { name: 'Java2Bedrock Tools', description: 'Web-based converter that generates Bedrock Edition resource packs from Java Edition assets.', url: 'https://abishekbhusal.com/j2b_gui', tags: ['React', 'JS'] },
];

const collabProjects = [
  { name: 'Vatti Taverna', description: 'Restaurant website with menu, interactive map, and contact info. Built in ReactJS.', url: 'https://thevatti.com', tags: ['React', 'CSS'] },
  { name: 'Agendify', description: 'Team scheduling & task management app for a high-school research project. Built with Android Studio.', url: null, tags: ['Java', 'Android'], discontinued: true },
];

const cardVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

function ProjectGrid({ items, onSelect }) {
  return (
    <motion.div className="projects-grid" variants={{ show: { transition: { staggerChildren: 0.07 } } }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      {items.map((p) => (
        <motion.article className="project-card" key={p.name} variants={cardVariants} onClick={() => onSelect(p)}>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
          <div className="project-footer">
            <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
              {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              {p.discontinued && <span className="chip chip-muted">Discontinued</span>}
            </div>
            <span className="project-arrow">↗︎︎</span>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="projects-section">
      <div className="projects-inner">
        <p className="section-label">Work</p>
        <h2 className="section-heading">Projects</h2>

        <motion.div className="featured-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55 }}>
          <div className="featured-top">
            <div>
              <div className="featured-badge">Featured Project</div>
              <h3 className="featured-name">{featured.name}</h3>
              <p className="featured-tagline">{featured.tagline}</p>
            </div>
            <a className="cta cta-primary featured-cta" href={featured.url} target="_blank" rel="noopener noreferrer">Visit site ↗︎︎</a>
          </div>
          <p className="featured-desc">{featured.description}</p>
          <div className="featured-features">
            {featured.features.map((f) => <span className="chip" key={f}>{f}</span>)}
          </div>
          <div className="featured-stats">
            {featured.stats.map((s) => (
              <div className="featured-stat" key={s.label}>
                <span className="featured-stat-val">{s.value}</span>
                <span className="featured-stat-lbl">{s.label}</span>
              </div>
            ))}
            <div className="featured-stack">
              {featured.tags.map((t) => <span className="chip chip-muted" key={t}>{t}</span>)}
            </div>
          </div>
        </motion.div>

        <div className="projects-block" style={{ marginTop: '2rem' }}>
          <p className="projects-sub-label">Own Projects</p>
          <ProjectGrid items={ownProjects} onSelect={setActive} />
        </div>

        <div className="projects-block" style={{ marginTop: '2rem' }}>
          <p className="projects-sub-label">Collaborations</p>
          <ProjectGrid items={collabProjects} onSelect={setActive} />
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="modal-box" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
              <h4 className="modal-title">{active.name}</h4>
              <p className="modal-desc">{active.description}</p>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {active.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="modal-actions">
                {active.url && <a className="cta cta-primary" href={active.url} target="_blank" rel="noopener noreferrer">Open project ↗︎︎</a>}
                <button className="cta cta-ghost" onClick={() => setActive(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
