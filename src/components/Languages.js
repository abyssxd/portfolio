import React from 'react';
import { Typography, Box, Grid, Chip } from '@mui/material';

const Languages = () => {
  const languages = ['Java', 'MySQL', 'Python', 'PHP', 'Javascript', 'ReactJS', 'HTML & CSS'];

  return (
    <Box className="languages glassy">
      <Typography variant="h4" gutterBottom>
        Programming Languages
      </Typography>
      <Grid container spacing={2}>
        {languages.map((lang, index) => (
          <Grid item key={index}>
            <Chip label={lang} color="primary" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Languages;
