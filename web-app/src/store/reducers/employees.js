import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  FILTER_EMPLOYEES,
  TOGGLE_EMPLOYEES_LOADING,
} from '../actions/employees';

const initialState = {
  isLoading: false,
  employee: null,
  employees: [],
  filteredEmployees: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        filteredEmployees: payload,
        isLoading: false,
      };
    case TOGGLE_EMPLOYEES_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    case FETCH_EMPLOYEE:
      return {
        ...state,
        employee: payload,
        isLoading: false,
      };
    case FILTER_EMPLOYEES:
      return {
        ...state,
        filteredEmployees: payload,
      };
    default:
      return state;
  }
};

export default reducer;
