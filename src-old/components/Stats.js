import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/stats.css';

const Stats = () => {
  const stats = [
    {
      src: "https://github-readme-stats.vercel.app/api?username=abyssxd&show_icons=true&theme=radical",
      alt: "GitHub stats",
    },
    {
      src: "https://streak-stats.demolab.com/?user=abyssxd&theme=dark",
      alt: "GitHub streak",
    },
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=abyssxd&layout=compact&theme=radical",
      alt: "Top Languages",
    },
  ];

  return (
    <Box className="stats-container">
      <Typography variant="h3" className="stats-header" gutterBottom>
        GitHub Stats
      </Typography>
      <Box className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img src={stat.src} alt={stat.alt} className="stat-image" />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Stats;
