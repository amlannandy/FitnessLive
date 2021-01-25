import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Dashboard from '../views/Dashboard';
import Employees from '../views/Employees';

const HomeRoutes = ({ url }) => {
  return (
    <Switch>
      <PrivateRoute exact path={url + '/'} component={Dashboard} />
      <PrivateRoute exact path={url + 'employees'} component={Employees} />
    </Switch>
  );
};

export default HomeRoutes;
