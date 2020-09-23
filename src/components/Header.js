import React, { useContext } from 'react';
import AuthContext from '../context/authentication/authContext';
import './styles/Header.css';
import logo from '../assets/fb_logo.svg';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, signOff } = authContext;

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/wall">
        <img src={logo} className="header-logo" alt="Facebook" />
      </a>

      <button type="button" className="btn btn-blank" onClick={() => signOff()}>
        Logout
      </button>
    </nav>
  );
};

export default Header;
