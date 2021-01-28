import store from '../store';
import { setAlert } from './alert';
import { db } from '../../firebase';

export const TOGGLE_RECORDS_LOADING = 'TOGGLE_RECORDS_LOADING';
export const FETCH_RECORDS = 'FETCH_RECORDS';
export const FILTER_RECORDS = 'FILTER_RECORDS';

export const fetchRecords = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_RECORDS_LOADING });
    const res = await db.collection('healthRecords').get();
    const docs = res.docs;
    const records = [];
    docs.forEach(doc => {
      const data = doc.data();
      records.push({
        id: doc.id,
        ...data,
      });
    });
    dispatch({ type: FETCH_RECORDS, payload: records });
  } catch (error) {
    console.log(error);
    dispatch({ type: TOGGLE_RECORDS_LOADING });
    dispatch(setAlert(error.message, 'error'));
  }
};

export const filterRecords = searchQuery => dispatch => {
  const records = store.getState().records.records;
  let filteredRecords;
  if (searchQuery === '') {
    filteredRecords = records;
  } else {
    filteredRecords = records.filter(rec =>
      rec.username.startsWith(searchQuery)
    );
  }
  dispatch({ type: FILTER_RECORDS, payload: filteredRecords });
};
