import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/stats.css';

const USERNAME = 'abyssxd';

const LANG_COLORS = {
  Java:       '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python:     '#3572A5',
  PHP:        '#4F5D95',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  'C++':      '#f34b7d',
  Shell:      '#89e051',
  Kotlin:     '#A97BFF',
};

function StatCard({ label, value, sub }) {
  return (
    <div className="gh-stat-item">
      <span className="gh-stat-val">{value ?? '—'}</span>
      <span className="gh-stat-label">{label}</span>
      {sub && <span className="gh-stat-sub">{sub}</span>}
    </div>
  );
}

export default function Stats() {
  const [user, setUser]   = useState(null);
  const [langs, setLangs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
        ]);
        const uData = await uRes.json();
        const repos = await rRes.json();

        setUser(uData);

        // tally bytes per language
        const totals = {};
        for (const r of repos) {
          if (r.language) totals[r.language] = (totals[r.language] || 0) + (r.size || 1);
        }
        const sorted = Object.entries(totals)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6);
        const total = sorted.reduce((s, [, v]) => s + v, 0);
        setLangs(sorted.map(([name, bytes]) => ({
          name,
          pct: Math.round((bytes / total) * 100),
          color: LANG_COLORS[name] || '#888',
        })));
      } catch {
        // fail silently — cards show — sign
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const totalStars = user
    ? null  // stars need per-repo fetch; show repos instead
    : null;

  return (
    <section className="stats-section">
      <div className="stats-inner">
        <p className="section-label">Activity</p>
        <h2 className="section-heading">GitHub Stats</h2>

        <div className="stats-grid">

          {/* Card 1 – profile numbers */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <div className="stat-card-header">
              <span className="stat-card-title">Profile</span>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank" rel="noopener noreferrer"
                className="stat-card-link"
              >
                @{USERNAME} ↗
              </a>
            </div>
            <div className="stat-card-body">
              {loading ? (
                <div className="stat-skeleton-row"><div className="stat-skel"/><div className="stat-skel"/><div className="stat-skel"/></div>
              ) : (
                <div className="gh-stats-row">
                  <StatCard label="Public Repos"  value={user?.public_repos} />
                  <StatCard label="Followers"     value={user?.followers} />
                  <StatCard label="Following"     value={user?.following} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Card 2 – streak (demolab works reliably) */}
          <motion.div
            className="stat-card stat-card-streak"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="stat-card-header">
              <span className="stat-card-title">Streak</span>
            </div>
            <div className="stat-card-body stat-card-body-img">
              <img
                src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=transparent&hide_border=true&ring=c6f135&fire=c6f135&currStreakLabel=c6f135&background=00000000&sideLabels=efefef&dates=666666&stroke=1e1e1e`}
                alt="GitHub streak"
                className="stat-img"
              />
            </div>
          </motion.div>

          {/* Card 3 – top languages */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="stat-card-header">
              <span className="stat-card-title">Top Languages</span>
            </div>
            <div className="stat-card-body">
              {loading ? (
                <div className="stat-skeleton-row"><div className="stat-skel"/><div className="stat-skel"/><div className="stat-skel"/></div>
              ) : (
                <div className="lang-bars">
                  {/* colour bar */}
                  <div className="lang-bar-track">
                    {langs.map(l => (
                      <div
                        key={l.name}
                        className="lang-bar-seg"
                        style={{ width: `${l.pct}%`, background: l.color }}
                        title={`${l.name} ${l.pct}%`}
                      />
                    ))}
                  </div>
                  {/* legend */}
                  <div className="lang-legend">
                    {langs.map(l => (
                      <div className="lang-legend-item" key={l.name}>
                        <span className="lang-dot" style={{ background: l.color }} />
                        <span className="lang-name">{l.name}</span>
                        <span className="lang-pct">{l.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
