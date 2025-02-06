// SpokenLanguages.js
import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./styles/lang.css";

const SpokenLanguages = () => {
  const languages = [
    {
      label: "Nepali - Native",
      flag: "https://flagpedia.net/data/flags/h80/np.png",
      isSpecial: true,
      description: "Official language of Nepal, spoken by over 32 million people."
    },
    {
      label: "English - C1",
      flag: "https://flagpedia.net/data/flags/h80/gb.png",
      description: "Global lingua franca, widely used for business and travel."
    },
    {
      label: "Spanish - B2",
      flag: "https://flagpedia.net/data/flags/h80/es.png",
      description: "Second most spoken native language in the world."
    },
    {
      label: "Catalan - B2",
      flag: "https://flagpedia.net/data/flags/h80/es.png",
      description: "Co-official language in Catalonia, Spain."
    },
    {
      label: "Hindi - Fluent",
      flag: "https://flagpedia.net/data/flags/h80/in.png",
      description: "One of the official languages of India."
    },
  ];

  return (
    <Box className="languages-container">
      <Typography variant="h3" className="languages-header" gutterBottom>
        Spoken Languages
      </Typography>
      <Box className="spoken-languages-list">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className={`spoken-language-item ${lang.isSpecial ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="spoken-flag-container">
              <img src={lang.flag} alt={lang.label} className="spoken-flag" />
            </div>
            <div className="spoken-text-content">
              <Typography variant="h6" className="spoken-language-label">
                {lang.label}
              </Typography>
              <Typography variant="body2" className="spoken-language-desc">
                {lang.description}
              </Typography>
            </div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default SpokenLanguages;
