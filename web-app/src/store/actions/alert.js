import { v4 as uuid } from 'uuid';

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const setAlert = (msg, type, duration = 3000) => dispatch => {
  const id = uuid();
  dispatch({ type: SET_ALERT, payload: { id, msg, type, duration } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), duration);
};
