import {
  TOGGLE_RECORDS_LOADING,
  FETCH_RECORD,
  FETCH_RECORDS,
  FILTER_RECORDS,
} from '../actions/records';

const initialState = {
  isLoading: false,
  records: [],
  record: null,
  filteredRecords: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_RECORDS:
      return {
        ...state,
        records: payload,
        filteredRecords: payload,
        isLoading: false,
      };
    case TOGGLE_RECORDS_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    case FILTER_RECORDS:
      return {
        ...state,
        filteredRecords: payload,
      };
    case FETCH_RECORD:
      return {
        ...state,
        record: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
