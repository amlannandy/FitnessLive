import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';
import Routes from './routes/routes';
import CustomAlert from './components/CustomAlert';

import { loadUser } from './store/actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <CustomAlert />
          <Routes />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
