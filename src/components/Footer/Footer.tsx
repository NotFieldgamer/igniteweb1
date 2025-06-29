import type { FC } from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * Displays the website footer with copyright information and legal links.
 * Provides a professional closing to the website with essential legal information.
 */
const Footer: FC = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Copyright notice */}
          <p className="copyright">
            &copy; {currentYear} IgniteWeb3. All rights reserved.
          </p>
          
          {/* Legal links */}
          <div className="legal-links">
            <a href="#" className="legal-link" aria-label="View Privacy Policy">
              Privacy Policy
            </a>
            <span className="separator">|</span>
            <a href="#" className="legal-link" aria-label="View Terms of Service">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;