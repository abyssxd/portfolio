import React from 'react';
import { Typography, Box, Grid, Chip } from '@mui/material';

const SpokenLanguages = () => {
  const languages = [
    { label: 'Nepali - Native', color: 'primary' },
    { label: 'English - B2', color: 'primary' },
    { label: 'Spanish - A2', color: 'primary' },
    { label: 'Catalan - A2', color: 'primary' },
    { label: 'Hindi - Fluent', color: 'primary' },
  ];

  return (
    <Box className="spoken-languages glassy moving-rgb-border">
      <Typography variant="h4" gutterBottom>
        Spoken Languages
      </Typography>
      <Grid container spacing={2}>
        {languages.map((lang, index) => (
          <Grid item key={index}>
            <Chip label={lang.label} color={lang.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpokenLanguages;
