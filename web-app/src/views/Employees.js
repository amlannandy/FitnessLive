import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button,
  Box,
  TextField,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEmployees, filterEmployees } from '../store/actions/employees';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  textInput: {
    width: 500,
  },
}));

const Employees = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { employees, filteredEmployees, isLoading } = useSelector(
    state => state.employees
  );

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employees]);

  if (isLoading) {
    return <CustomLoadingSpinner />;
  }

  const filterHandler = searchQuery => {
    dispatch(filterEmployees(searchQuery));
  };

  return (
    <Box>
      <Box p={2}>
        <TextField
          variant='outlined'
          className={classes.textInput}
          label='Search by username'
          onChange={event => filterHandler(event.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>Username</TableCell>
              <TableCell align='left'>Email Address</TableCell>
              <TableCell align='left'>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee, index) => (
              <TableRow key={employee.email}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='left'>{employee.name}</TableCell>
                <TableCell align='left'>{employee.username}</TableCell>
                <TableCell align='left'>{employee.email}</TableCell>
                <TableCell align='left'>
                  <Button size='small' variant='outlined' color='secondary'>
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Employees;
