import {
  TOGGLE_EMPLOYEES_LOADING,
  FETCH_EMPLOYEES,
  FILTER_EMPLOYEES,
} from '../actions/employees';

const initialState = {
  isLoading: false,
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
