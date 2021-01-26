import { setAlert } from './alert';
import { db } from '../../firebase';

export const TOGGLE_EMPLOYEES_LOADING = 'TOGGLE_EMPLOYEES_LOADING';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';

export const fetchEmployees = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_EMPLOYEES_LOADING });
    const res = await db.collection('users').get();
    const docs = res.docs;
    const employess = [];
    docs.forEach(doc => {
      const data = doc.data();
      employess.push({
        id: doc.id,
        ...data,
      });
    });
    dispatch({ type: FETCH_EMPLOYEES, payload: employess });
  } catch (error) {
    console.log(error);
    dispatch({ type: TOGGLE_EMPLOYEES_LOADING });
    dispatch(setAlert(error.message, 'error'));
  }
};
