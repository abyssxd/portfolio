import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/experience.css';

const experiences = [
  {
    year: "1 Year+",
    title: "React",
    projects: ["Restaurant Website", "BlockBase"],
  },
  {
    year: "1 Year+",
    title: "Node.js",
    projects: ["Cansat Dashboard (Node.js)", "Agendify"],
  },
  {
    year: "2 Years+",
    title: "Java",
    projects: ["Agendify", "UltraBoomerangs"],
  },
  {
    year: "4 Years+",
    title: "MySQL",
    projects: ["Used across multiple projects"],
  },
  {
    year: "4 Years+",
    title: "HTML, CSS, PHP",
    projects: ["Tutorial CMS Website", "Portfolio Website"],
  },
];

const Experience = () => {
  return (
    <Box className="timeline-container">
      <Typography variant="h3" className="timeline-header" gutterBottom>
        Experience Timeline
      </Typography>

      <Box className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Box className="timeline-content">
              <Typography variant="h5" className="timeline-title">
                {exp.title}
              </Typography>
              <Typography variant="body2" className="timeline-year">
                {exp.year}
              </Typography>
              <Typography variant="body2" className="timeline-projects">
                Projects: {exp.projects.join(", ")}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
