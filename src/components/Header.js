import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Menu, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './styles/header.css';

const Header = ({ toggleTheme, isLightMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      className={`header-container ${isScrolled ? 'header-shrink' : 'header-large'}`}
    >
      {/* Left: Profile and Name */}
      <Box className="header-left">
        <Avatar
          alt="Abishek Bhusal"
          src="images/pfp.webp"
          className="profile-avatar"
        />
        <Typography className="header-name">
          Abishek Bhusal
        </Typography>
      </Box>

      {/* Right: Desktop Social Icons & Toggle */}
      <Box
        className={`header-right desktop-only ${
          isScrolled ? 'hide-desktop-icons' : ''
        }`}
      >
        <Box className="social-icons">
          <IconButton aria-label="GitHub" href="https://github.com/abyssxd" target="_blank">
            <GitHub fontSize="medium" />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank">
            <LinkedIn fontSize="medium" />
          </IconButton>
          <IconButton aria-label="Instagram" href="https://instagram.com/abisgamer_" target="_blank">
            <Instagram fontSize="medium" />
          </IconButton>
        </Box>
        <Box className="switch">
          <label htmlFor="toggle">
            <input
              id="toggle"
              className="toggle-switch"
              type="checkbox"
              checked={isLightMode}
              onChange={toggleTheme}
            />
            <div className="sun-moon">
              <div className="dots"></div>
            </div>
            <div className="background">
              <div className="stars1"></div>
              <div className="stars2"></div>
            </div>
          </label>
        </Box>
      </Box>

      {/* Right: Mobile Menu Icon */}
      {isScrolled && (
        <Box className="header-right mobile-only">
          <IconButton className="tog-mob" onClick={toggleMenu}>
            {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </IconButton>
        </Box>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box className="social-icons-mobile">
            <IconButton aria-label="GitHub" href="https://github.com/abyssxd" target="_blank">
              <GitHub fontSize="medium" />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank">
              <LinkedIn fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Instagram" href="https://instagram.com/abisgamer_" target="_blank">
              <Instagram fontSize="medium" />
            </IconButton>
          </Box>
          <Box className="switch">
            <label htmlFor="toggle">
              <input
                id="toggle"
                className="toggle-switch"
                type="checkbox"
                checked={isLightMode}
                onChange={toggleTheme}
              />
              <div className="sun-moon">
                <div className="dots"></div>
              </div>
              <div className="background">
                <div className="stars1"></div>
                <div className="stars2"></div>
              </div>
            </label>
          </Box>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
