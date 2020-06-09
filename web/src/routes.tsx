import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" exact />
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
}

export default Routes;
