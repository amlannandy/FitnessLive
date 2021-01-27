import { TOGGLE_RECORDS_LOADING, FETCH_RECORDS } from '../actions/records';

const initialState = {
  isLoading: false,
  records: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_RECORDS:
      return {
        ...state,
        records: payload,
        isLoading: false,
      };
    case TOGGLE_RECORDS_LOADING:
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
