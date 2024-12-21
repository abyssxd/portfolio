import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AndroidIcon from '@mui/icons-material/Android';
import { motion } from 'framer-motion';
import './styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: <CodeIcon style={{ color: '#0078d7' }} />,
      text: 'Created several personal web applications using HTML, CSS, JS, ReactJS, PHP & MySQL.',
    },
    {
      icon: <BuildIcon style={{ color: '#ff6f61' }} />,
      text: 'Developed Minecraft plugins using the Spigot API.',
    },
    {
      icon: <CloudIcon style={{ color: '#00bcd4' }} />,
      text: 'Setup & configured Minecraft Server networks using Spigot & GeyserMC.',
    },
    {
      icon: <RocketLaunchIcon style={{ color: '#ff9800' }} />,
      text: 'Worked on Arduino, ESP32 Projects, and participated in the CanSat 2024 competition with the Vila2Sat team.',
    },
    {
      icon: <AndroidIcon style={{ color: '#4caf50' }} />,
      text: 'Working on a native Android app for my bachillerato research project.',
    },
  ];

  return (
    <Box className="experience-container">
      <Typography variant="h4" className="experience-header" gutterBottom>
        Experience
      </Typography>
      <List className="experience-list">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ListItem className="experience-card">
              <ListItemIcon className="experience-icon">{experience.icon}</ListItemIcon>
              <ListItemText
                primary={experience.text}
                classes={{ primary: 'experience-text' }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
};

export default Experience;
