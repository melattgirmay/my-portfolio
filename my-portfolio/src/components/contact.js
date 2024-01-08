import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me at: melatgirmay20@gmail.com
      </p>
      {/* Add contact information */}
    </div>
  );
};

export default Contact;
