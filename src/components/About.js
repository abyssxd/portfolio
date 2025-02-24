import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/about.css';

const About = () => {
  return (
    <Container className='aboutContainer' maxWidth="md" sx={{ marginTop: '4rem', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Hi there 👋
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
            I'm an 18-year-old developer with an interest in Web, App, and Game development.
            Currently, I'm studying the second year of Spanish Baccalaureate at Institut Viladomat in
            Barcelona, Spain. I'm passionate about creating innovative solutions and improving
            user experiences through technology.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;
