import { NavLink } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <ul className="navbar-list">
        <li><NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active" className="nav-link">Profile</NavLink></li>
        <li><NavLink to="/auth/login" activeClassName="active" className="nav-link">Login</NavLink></li>
        <li><NavLink to="/auth/signup" activeClassName="active" className="nav-link">Sign Up</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
