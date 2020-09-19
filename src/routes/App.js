import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../domain/Login';
import Wall from '../domain/Wall';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/wall" component={Wall} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
