import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box className="about glassy moving-rgb-border">
      <Typography variant="h2" gutterBottom>
        Hi there 👋
      </Typography>
      <Typography variant="body1" gutterBottom>
        I'm an 18-year-old with an interest in Web, App & Game development. Currently studying the first year of baccalaureate at Institut Viladomat in Barcelona, Spain.
      </Typography>
    </Box>
  );
};

export default About;
