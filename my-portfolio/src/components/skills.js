import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
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
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        {/* Add more skills */}
      </ul>
    </div>
  );
};

export default Skills;
