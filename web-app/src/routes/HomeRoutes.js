import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Records from '../views/Records';
import Dashboard from '../views/Dashboard';
import Employees from '../views/Employees';

const HomeRoutes = ({ url }) => {
  return (
    <Switch>
      <Route exact path={url + '/'} component={Dashboard} />
      <Route exact path={url + 'employees'} component={Employees} />
      <Route exact path={url + 'records'} component={Records} />
    </Switch>
  );
};

export default HomeRoutes;
