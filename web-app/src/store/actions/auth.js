import { setAlert } from '../actions/alert';
//import history from '../../history';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const TOGGLE_AUTH_LOADING = 'TOGGLE_AUTH_LOADING';

const URL = 'http://192.168.0.151:5000/api/v1/auth/';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const res = await fetch(URL + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      const { token, user } = data;
      localStorage.setItem('fitness-live-token', token);
      dispatch({ type: AUTHENTICATE, payload: { user, token } });
    } else {
      const errors = data.errors;
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'error'));
      });
      dispatch({ type: TOGGLE_AUTH_LOADING });
    }
  } catch (error) {
    console.log(error);
    const errors = error.data.errors;
    errors.forEach(error => {
      dispatch(setAlert(error.msg, 'error'));
    });
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const res = await fetch(URL + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (data.success) {
      const { token, user } = data;
      localStorage.setItem('fitness-live-token', token);
      dispatch({ type: AUTHENTICATE, payload: { user, token } });
    } else {
      const errors = data.errors;
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'error'));
      });
      dispatch({ type: TOGGLE_AUTH_LOADING });
    }
  } catch (error) {
    console.log(error);
    const errors = error.data.errors;
    errors.forEach(error => {
      dispatch(setAlert(error.msg, 'error'));
    });
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const token = localStorage.getItem('fitness-live-token');
    if (!token) {
      dispatch({ type: TOGGLE_AUTH_LOADING });
      return;
    }
    const res = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data.success) {
      const { token, user } = data;
      localStorage.setItem('fitness-live-token', token);
      dispatch({ type: AUTHENTICATE, payload: { user, token } });
    } else {
      dispatch({ type: TOGGLE_AUTH_LOADING });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    localStorage.removeItem('fitness-live-token');
    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};
