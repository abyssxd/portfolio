import React from 'react';
import { motion } from 'framer-motion';
import './styles/projects.css';

const featured = {
  name: 'Kafal Converter',
  tagline: 'Java to Bedrock resource pack converter',
  description:
    'Converts Minecraft Java resource packs to Bedrock Edition: animated 3D items, custom blocks, custom GUIs with a pixel-accurate offset editor, font conversion and Geyser V2 mappings. Over 1,000 packs converted so far.',
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
  { name: 'UltraBoomerangs', description: 'Minecraft plugin that adds custom boomerangs, with support for mcMMO and AuraSkills.', url: 'https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/', tags: ['Java', 'Bukkit API'] },
  { name: 'UltraCollections', description: 'Configurable collections and progression plugin for RPG Minecraft servers. Published on SpigotMC.', url: 'https://www.spigotmc.org/resources/ultracollections-fully-customizable.121650/', tags: ['Java', 'Bukkit API'] },
  { name: 'UltraMonitor', description: 'Web-based Minecraft server manager with live console access.', url: 'https://www.spigotmc.org/resources/ultramonitor-%E2%AD%95-console-support-%E2%AD%95.121546/', tags: ['Java', 'Node', 'React'] },
  { name: 'Cansat V2', description: 'Real-time dashboard for CanSat sensor data. React frontend, Node and Express backend.', url: 'https://github.com/abyssxd/CanSat-v2', tags: ['React', 'Node'] },
  { name: 'Java2Bedrock Tools', description: 'Browser tool that generates Bedrock Edition resource packs from Java Edition assets.', url: 'https://abishekbhusal.com/j2b_gui', tags: ['React', 'JS'] },
];

const collabProjects = [
  { name: 'Vatti Taverna', description: 'Restaurant website with a menu, an interactive map and contact details. Built in React.', url: 'https://thevatti.com', tags: ['React', 'CSS'] },
  { name: 'Agendify', description: 'Scheduling and task app made for a high-school research project. Built in Android Studio.', url: null, tags: ['Java', 'Android'], discontinued: true },
];

const cardVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

function CardBody({ project }) {
  return (
    <>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
          {project.discontinued && <span className="chip chip-muted">Discontinued</span>}
        </div>
        {project.url && <span className="project-arrow" aria-hidden="true">↗</span>}
      </div>
    </>
  );
}

function ProjectGrid({ items }) {
  return (
    <motion.div
      className="projects-grid"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {items.map((p) => (
        p.url ? (
          <motion.a
            className="project-card"
            key={p.name}
            variants={cardVariants}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardBody project={p} />
          </motion.a>
        ) : (
          <motion.div className="project-card project-card-static" key={p.name} variants={cardVariants}>
            <CardBody project={p} />
          </motion.div>
        )
      ))}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-inner">
        <p className="section-label">Work</p>
        <h2 className="section-heading">Projects</h2>

        <motion.div
          className="featured-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="featured-top">
            <div>
              <div className="featured-badge">Featured</div>
              <h3 className="featured-name">{featured.name}</h3>
              <p className="featured-tagline">{featured.tagline}</p>
            </div>
            <a className="cta cta-primary featured-cta" href={featured.url} target="_blank" rel="noopener noreferrer">
              Visit site ↗
            </a>
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

        <div className="projects-block">
          <p className="projects-sub-label">Own projects</p>
          <ProjectGrid items={ownProjects} />
        </div>

        <div className="projects-block">
          <p className="projects-sub-label">Collaborations</p>
          <ProjectGrid items={collabProjects} />
        </div>
      </div>
    </section>
  );
}
