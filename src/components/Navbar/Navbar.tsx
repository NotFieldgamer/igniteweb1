import { useState } from 'react';
import { Home, User, Code, Briefcase, Settings, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Ignite</span>
          <span className="logo-text-accent">Web</span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection('home')}>
              <Home size={18} />
              <span>Home</span>
            </li>
            <li onClick={() => scrollToSection('about')}>
              <User size={18} />
              <span>About</span>
            </li>
            <li onClick={() => scrollToSection('skills')}>
              <Code size={18} />
              <span>Skills</span>
            </li>
            <li onClick={() => scrollToSection('portfolio')}>
              <Briefcase size={18} />
              <span>Portfolio</span>
            </li>
            <li onClick={() => scrollToSection('services')}>
              <Settings size={18} />
              <span>Services</span>
            </li>
            <li onClick={() => scrollToSection('contact')}>
              <Mail size={18} />
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;