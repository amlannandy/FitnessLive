import { AUTHENTICATE, LOGOUT, TOGGLE_AUTH_LOADING } from '../actions/auth';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATE:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGOUT:
      return initialState;
    case TOGGLE_AUTH_LOADING:
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
