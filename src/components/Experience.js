import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AndroidIcon from '@mui/icons-material/Android';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      icon: <CodeIcon color="primary" />,
      text: 'Created several personal web applications using HTML, CSS, JS, PHP & MySQL.',
    },
    {
      icon: <BuildIcon color="secondary" />,
      text: 'Developed Minecraft plugins using the Spigot API.',
    },
    {
      icon: <CloudIcon color="info" />,
      text: 'Setup & configured Minecraft Server networks using Spigot & GeyserMC.',
    },
    {
      icon: <RocketLaunchIcon color="warning" />,
      text: 'Worked on Arduino, ESP32 Projects, and participated in the CanSat 2024 competition with the Vila2Sat team.',
    },
    {
      icon: <AndroidIcon color="success" />,
      text: 'Working on a native Android app for my bachillerato research project.',
    },
  ];

  return (
    <Box className="experience glassy moving-rgb-border">
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ListItem>
              <ListItemIcon>{experience.icon}</ListItemIcon>
              <ListItemText primary={experience.text} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
};

export default Experience;
