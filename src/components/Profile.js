import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/authentication/authContext';
import './styles/profile.css';
import avatar from '../assets/avatar.jpg';
import portada from '../assets/portada.jpg';

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div className="profile-container">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center">
            <img className="img-fluid cover-photo" alt="" src={portada} />
            <div className="profile-photo">
              <img className="" alt="" src={avatar} />
            </div>
          </div>
        </div>

        <div className="mx-auto text-center mt-2">
          <div>
            {user ? (
              <h1>
                {user.name} {user.lastName}
              </h1>
            ) : null}
          </div>
          <div>
            <a href="/wall" alt="presentation" className="nav-link disabled">
              Add presentation
            </a>
          </div>
        </div>

        <div className="row">
          <div className="form-separator" />
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="/wall">
              Biography
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/wall">
              Information
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/wall">
              Friends 0
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/wall">
              Photos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/wall">
              File
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
