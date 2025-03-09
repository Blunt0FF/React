import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="adminNav">
      <NavLink
        to="/about"
        className={({ isActive }) => `adminLink ${isActive ? 'active' : ''}`}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => `adminLink ${isActive ? 'active' : ''}`}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => `adminLink ${isActive ? 'active' : ''}`}>
        Settings
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => `adminLink ${isActive ? 'active' : ''}`}>
        Profile
      </NavLink>
      <Link to="/" className='adminLink'>Back</Link>
    </nav>
  );
}