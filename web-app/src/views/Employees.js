import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEmployees } from '../store/actions/employees';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const Employees = () => {
  const dispatch = useDispatch();
  const { employees, isLoading } = useSelector(state => state.employees);

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(fetchEmployees());
    }
  }, []);

  return (
    <div>
      <h1>Employees</h1>
    </div>
  );
};

export default Employees;
