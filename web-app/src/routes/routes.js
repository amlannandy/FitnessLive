import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import PageNotFound from '../views/PageNotFound';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
