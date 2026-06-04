import { NavLink } from 'react-router-dom';
import Klogo from '../../data/Picture/Klogo.png';
import './FloatingNavbar.css';

function FloatingNavbar() {
  return (
    <nav className="floating-navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <img src={Klogo} alt="KD" className="navbar-logo" />
        </NavLink>
        <ul className="navbar-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About/Skills</NavLink></li>
          {/* <li><NavLink to="/about#skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li> */}
          <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default FloatingNavbar;
