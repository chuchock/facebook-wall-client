import React, { useContext } from 'react';
import AuthContext from '../context/authentication/authContext';
import './styles/Header.css';
import logo from '../assets/fb_logo.svg';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, signOff } = authContext;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} className="header-logo" alt="Facebook" />
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <button className="btn btn-blank" onClick={() => signOff()}>
        Sign off
      </button>
    </nav>
  );
};

export default Header;
