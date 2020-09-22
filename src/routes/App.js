import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../domain/auth/Login';
import Signup from '../domain/auth/NewAccount';
import Wall from '../domain/Wall';

// import context
import PostState from '../context/posts/postState';
import AuthState from '../context/authentication/authState';

import authToken from '../config/token';
import PrivateRoute from '../components/routes/PrivateRoute';

// console.log('server', process.env.REACT_APP_BACKEND_URL);

// Check if we have a token
const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

const App = () => {
  return (
    <PostState>
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/wall" component={Wall} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </PostState>
  );
};

export default App;
