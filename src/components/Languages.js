// Languages.js
import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./styles/prog_lang.css";

const Languages = () => {
  const languages = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg",
      description: "Versatile OOP language, popular for enterprise software."
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg",
      description: "Relational database management system for structured data."
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg",
      description: "High-level language known for simplicity and powerful libraries."
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg",
      description: "Popular server-side scripting for dynamic web applications."
    },
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg",
      description: "Main language of the web, used for interactive frontends."
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg",
      description: "A JS library for building modern, reusable UIs."
    },
    {
      name: "HTML & CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg",
      description: "Foundational technologies for structuring and styling webpages."
    },
  ];

  return (
    <Box className="prog-languages-container">
      <Typography variant="h3" className="prog-languages-header" gutterBottom>
        Programming Languages
      </Typography>

      <Box className="prog-languages-list">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="prog-language-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="prog-icon-container">
              <img
                src={lang.icon}
                alt={`${lang.name} icon`}
                className="prog-language-icon"
              />
            </div>
            <div className="prog-text-content">
              <Typography variant="h6" className="prog-language-name">
                {lang.name}
              </Typography>
              <Typography variant="body2" className="prog-language-desc">
                {lang.description}
              </Typography>
            </div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Languages;
