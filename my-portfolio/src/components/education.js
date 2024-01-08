import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
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
      <h2>Education</h2>
      <p>
        Bachelor's Degree in Computer Science - Unity University, 2021- Current
      </p>
      {/* Add more education details */}
    </div>
  );
};

export default Education;
