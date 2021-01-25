import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import Employees from '../views/Employees';

const HomeRoutes = ({ url }) => {
  return (
    <Switch>
      <Route exact path={url + '/'} component={Dashboard} />
      <Route exact path={url + 'employees'} component={Employees} />
    </Switch>
  );
};

export default HomeRoutes;
