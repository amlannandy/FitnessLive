import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import auth from './reducers/auth';
import alert from './reducers/alert';

const rootReducer = combineReducers({
  auth: auth,
  alert: alert,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;