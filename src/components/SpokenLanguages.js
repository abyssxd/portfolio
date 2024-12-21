import React from 'react';
import { Typography, Box, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/lang.css';

const SpokenLanguages = () => {
  const languages = [
    { label: 'Nepali - Native', flag: 'https://flagpedia.net/data/flags/h80/np.png', isSpecial: true },
    { label: 'English - C1', flag: 'https://flagpedia.net/data/flags/h80/gb.png' },
    { label: 'Spanish - B1', flag: 'https://flagpedia.net/data/flags/h80/es.png' },
    { label: 'Catalan - B1', flag: 'https://flagpedia.net/data/flags/h80/es.png' },
    { label: 'Hindi - Fluent', flag: 'https://flagpedia.net/data/flags/h80/in.png' },
  ];

  return (
    <Box className="languages-container">
      <Typography variant="h4" className="languages-header" gutterBottom>
        Spoken Languages
      </Typography>
      <Grid container spacing={3} className="languages-grid">
        {languages.map((lang, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              className="language-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className={`language-flag ${lang.isSpecial ? 'no-shadow' : ''}`}
              >
                <img src={lang.flag} alt={`${lang.label} flag`} className="flag-icon" />
              </div>
              <Chip label={lang.label} className="language-chip" />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpokenLanguages;
