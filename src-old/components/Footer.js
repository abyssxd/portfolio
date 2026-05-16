import React from 'react';
import './styles/footer.css';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <p className="footer-text">© 2024–2025 Abishek Bhusal · Barcelona</p>
        <div className="footer-links">
          <a href="https://github.com/abyssxd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}