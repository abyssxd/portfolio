import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

const Header = () => {
  return (
    <Box className="header-container glassy moving-rgb-border">
      <Box className="header-profile">
        <Avatar
          alt="Abishek"
          src="images/pfp.jpg"
          className="profile-avatar"
        />
        <Typography variant="h4" className="name-glow">
          Abishek Bhusal
        </Typography>
      </Box>

      <Box className="social-icons">
        <IconButton aria-label="GitHub" href="https://github.com/abyssxd" target="_blank">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank">
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton aria-label="Instagram" href="https://instagram.com/abisgamer_" target="_blank">
          <Instagram fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
