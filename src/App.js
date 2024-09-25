import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Stats from './components/Stats';
import SpokenLanguages from './components/SpokenLanguages';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12} md={6}>
          <Languages />
        </Grid>
        <Grid item xs={12} md={6}>
          <SpokenLanguages />
        </Grid>
        <Grid item xs={12}>
          <Stats />
        </Grid>
      </Grid>
    </Container>
  );
}


export default App;