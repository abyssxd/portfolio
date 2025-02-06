import React, { useState } from 'react';
import { Typography, Box, Grid, Modal, Backdrop, Fade } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
import './styles/projects.css';

const projects = {
  ownProjects: [
    {
      name: "Cansat V2",
      description: "An improved single version of my previous Cansat Dashboard. ",
      icon: <CodeIcon color="primary" />,
      url: "https://github.com/abyssxd/CanSat-v2",
    },
    {
      name: "Minecraft Java2Bedrock AIO",
      description: "All in one Minecraft Java to Bedrock texture pack converter.",
      icon: "images/5dots.png",
      url: "https://abishekbhusal.com/java2bedrock",
    },
    {
      name: "Minecraft Bedrock GUI Editor",
      description: "Effortlessly create custom GUI textures for Minecraft Bedrock Edition.",
      icon: "images/5dots.png",
      url: "https://abishekbhusal.com/j2b_gui",
    },
    {
      name: "Minecraft Bedrock Font Editor",
      description: "Effortlessly create custom font textures for Minecraft Bedrock Edition.",
      icon: "images/5dots.png",
      url: "https://abishekbhusal.com/font-editor",
    },
    {
      name: "Minecraft Java2Bedrock Font Converter",
      description: "Automatically convert Minecraft Java font textures/emojis to Bedrock.",
      icon: "images/5dots.png",
      url: "https://abishekbhusal.com/font-converter",
    },
    {
      name: "UltraMonitor Spigot Plugin",
      description: "Web-Based Server Monitor & Panel",
      icon: "images/5dots.png",
      url: "https://www.spigotmc.org/resources/ultramonitor-%E2%AD%95-console-support-%E2%AD%95.121546/",
    },
    {
      name: "History of Spain",
      description: "A questionnaire for History of Spain for 2n Baxillerat Students in Catalan.",
      icon: "images/historia.png",
      url: "https://github.com/abyssxd/historia_2nbaxillerat",
    },
    {
      name: "BlockBase",
      description: "A Minecraft server website built using ReactJS.",
      icon: "images/blockbase.png",
      url: "https://builtbybit.com/resources/blockbase-fully-customizable-website.52448/",
    },
    {
      name: "UltraCollections Spigot Plugin",
      description: "Minecraft plugin for item collections.",
      icon: "images/ultracollections.webp",
      url: "https://builtbybit.com/resources/ultracollections-fully-customizable.51098/",
    },
    {
      name: "HidePlayers Spigot Plugin",
      description: "Simple plugin to hide players",
      icon: "images/5dots.png",
      url: "https://www.spigotmc.org/resources/hideplayers-worldguard-support.121432/",
    },
    {
      name: "UltraBoomerangs Spigot Plugin",
      description: "Custom Minecraft plugin.",
      icon: "images/ultraboomerangs.webp",
      url: "https://www.spigotmc.org/resources/ultraboomerangs-create-custom-unqiue-boomerangs-mcmmo-auraskills-support.113150/",
    },
    {
      name: "Live Cansat Dashboard",
      description: "Real-time data display for CanSat competition.",
      icon: <CodeIcon color="primary" />,
      url: "https://github.com/abyssxd/cansat_vila2sat_online",
    },
    {
      name: "Local Cansat Dashboard",
      description: "Real-time data display for CanSat competition.",
      icon: <CodeIcon color="primary" />,
      url: "https://github.com/abyssxd/cansat_vila2sat",
    },
    {
      name: "Python Serial Monitor for Live Dashboard",
      description: "Python-based serial monitor for live data capture.",
      icon: <CodeIcon color="primary" />,
      url: "https://github.com/abyssxd/vila2sat_serial",
    },
  ],
  commissions: [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills. Coded in HTML, CSS & JS.",
      icon: "images/portfolio.png",
      url: "https://gaditc.in/noor/",
    },
    {
      name: "Restaurant Website",
      description: "A modern multi-language website for a restaurant, including menus, maps, images...etc. Coded with ReactJS.",
      icon: "images/restaurant.jpg",
      url: "https://abishekbhusal.com/nmh",
    },
    {
      name: "Tutorial CMS Website",
      description: "CMS website built with PHP, MySQL, HTML, CSS & JS.",
      icon: <LockIcon fontSize="large" color="primary" />,
      url: "https://circuitriver.com",
    },
  ],
};

const ProjectItem = ({ project, onClick }) => (
  <Box className="project-item" onClick={onClick}>
    <div className="project-icon-container">
      {typeof project.icon === "string" ? (
        <img src={project.icon} alt={project.name} className="project-icon" />
      ) : (
        <div className="project-icon">{project.icon}</div>
      )}
    </div>
    <Typography className="project-name">{project.name}</Typography>
  </Box>
);

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box className="projects-card">
      <Typography variant="h3" className="projects-header">Projects</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className="project-category">
          <Typography variant="h5" className="category-title">Own Projects</Typography>
          {projects.ownProjects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              onClick={() => handleOpen(project)}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={6} className="project-category">
          <Typography variant="h5" className="category-title">Commissions</Typography>
          {projects.commissions.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              onClick={() => handleOpen(project)}
            />
          ))}
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="project-modal">
            {selectedProject && (
              <>
                <Typography variant="h5" className="modal-title">{selectedProject.name}</Typography>
                <div className="modal-icon">
                  {typeof selectedProject.icon === "string" ? (
                    <img src={selectedProject.icon} alt={selectedProject.name} />
                  ) : (
                    <div>{selectedProject.icon}</div>
                  )}
                </div>
                <Typography variant="body1" className="modal-description">{selectedProject.description}</Typography>
                {selectedProject.url && selectedProject.url !== "#" && (
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="modal-link">
                    Open Project
                  </a>
                )}
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Projects;