import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/prog_lang.css';

const Languages = () => {
  const languages = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg' },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
    { name: 'HTML & CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
  ];

  return (
    <Box className="languages-container">
      <Typography variant="h4" className="languages-header" gutterBottom>
        Programming Languages
      </Typography>
      <Grid container spacing={3} className="languages-grid">
        {languages.map((lang, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              className="language-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={lang.icon} alt={`${lang.name} icon`} className="language-icon" />
              <Typography variant="h6" className="language-name">
                {lang.name}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Languages;
