import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Portofolio</a>
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>Project</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
