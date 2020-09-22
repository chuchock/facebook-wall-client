import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Biography from '../components/Biography';
import AuthContext from '../context/authentication/authContext';
import './styles/wall.css';

const Wall = () => {
  const authContext = useContext(AuthContext);
  const { authenticatedUser } = authContext;

  useEffect(() => {
    authenticatedUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Profile />
      <Biography />
    </>
  );
};

export default Wall;
