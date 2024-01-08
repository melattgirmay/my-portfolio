import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='container'>
      <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
      <h2>Projects</h2>
      <ul>
        <li>Project 1: An android notes app</li>
        {/* Add more projects */}
      </ul>
    </div>
  );
};

export default Projects;
