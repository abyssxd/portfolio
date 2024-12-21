import React from 'react';
import { Box, Typography } from '@mui/material';
import './styles/footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body2" className="footer-text">
        © 2024-2025 Abishek Bhusal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
