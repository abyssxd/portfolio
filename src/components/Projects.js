import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
import { motion } from 'framer-motion';
import './styles/projects.css';

const projects = [
  {
    name: "History of Spain",
    description: "A questionnaire for History of Spain for 2n Baxillerat Students in Catalan.",
    icon: "images/historia.png",
    isDisabled: false,
    url: "https://github.com/abyssxd/historia_2nbaxillerat",
  },
  {
    name: "BlockBase",
    description: "A minecraft server website built using ReactJS",
    icon: "images/blockbase.png",
    isDisabled: false,
    url: "https://builtbybit.com/resources/blockbase-fully-customizable-website.52448/",
  },
  {
    name: "UltraCollections Spigot Plugin",
    description: "Minecraft plugin for item collections.",
    icon: "images/ultracollections.webp",
    isDisabled: false,
    url: "https://builtbybit.com/resources/ultracollections-fully-customizable.51098/",
  },
  {
    name: "Tutorial CMS Website",
    description: "CMS website built with PHP, MySQL, HTML, CSS & JS.",
    icon: <LockIcon fontSize="large" color="primary" />,
    isDisabled: false,
    url: "https://circuitriver.com",
    isClosedSource: true,
  },
  {
    name: "Agendify - Android App",
    description: "Agenda app built with Java, PHP API, NodeJS WebSockets. (UNRELEASED)",
    icon: <LockIcon fontSize="large" color="primary" />,
    isDisabled: false,
    url: "#", // Not yet released, no link available yet
    isClosedSource: true,
  },
  {
    name: "UltraBoomerangs Spigot Plugin",
    description: "Custom Minecraft plugin.",
    icon: "images/ultraboomerangs.webp",
    isDisabled: false,
    url: "https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/",
  },
  {
    name: "Live Cansat Dashboard",
    description: "Real-time data display for CanSat competition.",
    icon: <CodeIcon color="primary" />,
    isDisabled: false,
    url: "https://github.com/abyssxd/cansat_vila2sat_online",
  },
  {
    name: "Local Cansat Dashboard",
    description: "Real-time data display for CanSat competition.",
    icon: <CodeIcon color="primary" />,
    isDisabled: false,
    url: "https://github.com/abyssxd/cansat_vila2sat",
  },
  {
    name: "Python Serial Monitor for Live DashBoard",
    description: "Python-based serial monitor for live data capture.",
    icon: <CodeIcon color="primary" />,
    isDisabled: false,
    url: "https://github.com/abyssxd/vila2sat_serial",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project-image-container">
        {typeof project.icon === "string" ? (
          <img src={project.icon} alt={project.name} className="project-image" />
        ) : (
          <div className="project-icon">{project.icon}</div>
        )}
      </div>
      <Typography variant="h5" className="project-title">{project.name}</Typography>
      <Typography variant="body2" className="project-description">{project.description}</Typography>
    </a>
  </motion.div>
);

const Projects = () => (
  <Box className="projects-container">
    <Typography variant="h4" className="projects-header">Projects</Typography>
    <br/>
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard project={project} index={index} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
