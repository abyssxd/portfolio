import React from 'react';
import { Typography, Box, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
import { motion } from 'framer-motion';

const projects = [
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
    icon: <LockIcon fontSize="large" color="action" />,
    isDisabled: false,
    url: "https://circuitriver.com",
    isClosedSource: true,
  },
  {
    name: "Agendify - Android App",
    description: "Agenda app built with Java, PHP API, NodeJS WebSockets. (UNRELEASED)",
    icon: "images/agendify.png",
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

const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="project-item"
      >
        <ListItem
          className={`project-item ${project.isDisabled ? 'disabled' : ''}`}
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon className="project-icon">
            {typeof project.icon === 'string' ? (
              <img src={project.icon} alt={`${project.name} Icon`} className="project-img" />
            ) : (
              project.icon
            )}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className="project-title">
                {project.name}
              </Typography>
            }
            secondary={
              <>
                <Typography className="project-description">
                  {project.description}
                </Typography>
                {project.isClosedSource && (
                  <Typography className="closed-source">(Closed Source)</Typography>
                )}
              </>
            }
          />
        </ListItem>
      </motion.div>
    );
  };
  

const Projects = () => {
  return (
    
    <Box className="glassy">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2} className="projects">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
