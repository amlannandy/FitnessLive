import {
  TOGGLE_EMPLOYEES_LOADING,
  FETCH_EMPLOYEES,
} from '../actions/employees';

const initialState = {
  isLoading: false,
  employees: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        isLoading: false,
      };
    case TOGGLE_EMPLOYEES_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    default:
      return state;
  }
};

export default reducer;
