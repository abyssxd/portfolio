import React from 'react';
import { Box, Typography } from '@mui/material';

const Stats = () => {
  return (
    <Box className="stats glassy moving-rgb-border">
      <Typography variant="h4" gutterBottom>
        Stats
      </Typography>
      <Box className="stat-images">
        <img src="https://github-readme-stats.vercel.app/api?username=abyssxd&show_icons=true&theme=radical" alt="GitHub stats" />
        <img src="https://streak-stats.demolab.com/?user=abyssxd&theme=dark" alt="GitHub streak" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abyssxd&layout=compact&theme=radical" alt="Top Languages" />
      </Box>
    </Box>
  );
};

export default Stats;
