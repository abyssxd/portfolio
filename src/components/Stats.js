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

export default function Stats() {
  const [langs, setLangs] = useState([]);
  const [repoCount, setRepoCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`);
        const repos = await res.json();

        // the endpoint returns an object instead of an array when rate limited
        if (cancelled || !Array.isArray(repos)) return;

        const counted = repos.filter((r) => r.language);
        const totals = {};
        for (const r of counted) {
          totals[r.language] = (totals[r.language] || 0) + 1;
        }

        const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, 6);
        const total = sorted.reduce((sum, [, n]) => sum + n, 0);

        setRepoCount(counted.length);
        setLangs(sorted.map(([name, n]) => ({
          name,
          pct: Math.round((n / total) * 100),
          color: LANG_COLORS[name] || '#888888',
        })));
      } catch {
        if (!cancelled) setLangs([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-inner">
        <h2 className="section-heading">GitHub</h2>

        <div className="stats-grid">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="stat-card-header">
              <span className="stat-card-title">
                {repoCount ? `Main language across ${repoCount} public repos` : 'Main language across public repos'}
              </span>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="stat-card-link"
              >
                @{USERNAME} ↗
              </a>
            </div>

            <div className="stat-card-body">
              {loading && (
                <div className="stat-skeleton-row"><div className="stat-skel" /><div className="stat-skel" /><div className="stat-skel" /></div>
              )}

              {!loading && langs.length === 0 && (
                <p className="stat-empty">
                  Couldn't load this right now. The repositories are on <a className="stat-card-link" href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
              )}

              {!loading && langs.length > 0 && (
                <div className="lang-bars">
                  <div className="lang-bar-track">
                    {langs.map((l) => (
                      <div
                        key={l.name}
                        className="lang-bar-seg"
                        style={{ width: `${l.pct}%`, background: l.color }}
                        title={`${l.name} ${l.pct}%`}
                      />
                    ))}
                  </div>
                  <div className="lang-legend">
                    {langs.map((l) => (
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
