import store from '../store';
import { setAlert } from './alert';
import { db } from '../../firebase';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const FILTER_EMPLOYEES = 'FILTER_EMPLOYEES';
export const TOGGLE_EMPLOYEES_LOADING = 'TOGGLE_EMPLOYEES_LOADING';

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

export const filterEmployees = searchQuery => dispatch => {
  const employees = store.getState().employees.employees;
  let filteredEmployees;
  if (searchQuery === '') {
    filteredEmployees = employees;
  } else {
    filteredEmployees = employees.filter(emp =>
      emp.username.startsWith(searchQuery)
    );
  }
  dispatch({ type: FILTER_EMPLOYEES, payload: filteredEmployees });
};

export const fetchEmployee = id => async dispatch => {
  try {
    dispatch({ type: TOGGLE_EMPLOYEES_LOADING });
    const res = await db.collection('users').doc(id).get();
    const data = res.data();
    const employee = {
      id: res.id,
      ...data,
    };
    dispatch({ type: FETCH_EMPLOYEE, payload: employee });
  } catch (error) {
    dispatch({ type: TOGGLE_EMPLOYEES_LOADING });
    dispatch(setAlert(error.message, 'error'));
  }
};
