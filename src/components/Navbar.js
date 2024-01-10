import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="link">
          <ScrollLink to="welcome" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink to="education" smooth={true} duration={500}>
            Education
          </ScrollLink>
        </li>
        <li className="link">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
