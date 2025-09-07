import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/projects.css';

const data = {
  ownProjects: [
    { name: 'Cansat V2', description: 'An improved single version of my previous Cansat Dashboard.', url: 'https://github.com/abyssxd/CanSat-v2' },
    { name: 'Minecraft Java2Bedrock Tools', description: 'A converter to support generating Bedrock packs from Java assets.', url: 'https://abishekbhusal.com/j2b_gui' },
    { name: 'UltraBoomerangs', description: 'Adds Boomerangs to Minecraft (Plugin).', url: 'https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/' },
    { name: 'UltraCollections', description: 'A progression plugin for RPG Minecraft Servers.', url: 'https://www.spigotmc.org/resources/ultracollections-fully-customizable.121650/' },
    { name: 'UltraMonitor', description: 'Web-based server manager with clean frontend.', url: 'https://www.spigotmc.org/resources/ultramonitor-%E2%AD%95-console-support-%E2%AD%95.121546/' },
  ],
  collabProjects: [
    { name: 'Vatti Taverna', description: 'A resturant website featuring menu, map & some contact information coded in ReactJS', url: 'https://thevatti.com' },
    { name: 'Agendify', description: 'Team project for scheduling and tasks with modern UI. Made for High School research project using Android Studio (DISCONTINUED)', url: '#' },
  ]
};

const variants = {
  grid: { show: { transition: { staggerChildren: .06 } } },
  card: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }
};

export default function Projects() {
  const [active, setActive] = useState(null);

  const Section = ({ title, items }) => (
    <section className="projects-block">
      <h3 className="section-title">{title}</h3>
      <motion.div className="projects-grid" variants={variants.grid} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
        {items.map((p, i) => (
          <motion.article className="project-card" key={p.name} variants={variants.card} onClick={() => setActive(p)}>
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.private ? <span className="chip chip--muted">Private</span> : <span className="chip">Public</span>}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );

  return (
    <div className="projects-section" id="projects">
      <Section title="Own Projects" items={data.ownProjects} />
      <Section title="Collaborations" items={data.collabProjects} />
      <AnimatePresence>
        {active && (
          <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="modal-body" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <h4 className="modal-title">{active.name}</h4>
              <p className="modal-desc">{active.description}</p>
              <div className="modal-actions">
                {!active.private && active.url && active.url !== '#' ? (
                  <a className="cta" href={active.url} target="_blank" rel="noopener noreferrer">Open project</a>
                ) : (
                  <span className="chip chip--muted">Not public</span>
                )}
                <button className="cta outline" onClick={() => setActive(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}