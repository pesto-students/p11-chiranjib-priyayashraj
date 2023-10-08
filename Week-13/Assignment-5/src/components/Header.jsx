import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
      </ul>
    </nav>
  );
}

export default Header;