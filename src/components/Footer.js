import React from 'react';
import './styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">AB<span>.</span></div>
          <div className="footer-copy">© 2024–2026 Abishek Bhusal · Barcelona</div>
        </div>

        <div className="footer-links">
          <a className="footer-link" href="mailto:abishekbhusal@proton.me">Email</a>
          <a className="footer-link" href="https://github.com/abyssxd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="footer-link" href="https://www.linkedin.com/in/abishek-bhusal-b5690732a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
