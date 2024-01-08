import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <h2>Welcome to My Portfolio</h2>
      <p>
        Hi, I'm Melat Hailu, a passionate full-stack developer based in Addis Ababa, Ethiopia.
      </p>
      {/* Add more content */}
    </div>
  );
};

export default Home;
