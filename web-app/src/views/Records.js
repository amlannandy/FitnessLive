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

import { fetchRecords, filterRecords } from '../store/actions/records';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  textInput: {
    width: 500,
  },
}));

const Records = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { records, filteredRecords, isLoading } = useSelector(
    state => state.records
  );

  useEffect(() => {
    if (records.length === 0) {
      dispatch(fetchRecords());
    }
  }, [dispatch, records]);

  if (isLoading) {
    return <CustomLoadingSpinner />;
  }

  const filterHandler = searchQuery => {
    dispatch(filterRecords(searchQuery));
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
              <TableCell align='left'>Problem</TableCell>
              <TableCell align='left'>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRecords.map((record, index) => (
              <TableRow key={record.id}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='left'>{record.name}</TableCell>
                <TableCell align='left'>{record.username}</TableCell>
                <TableCell align='left'>{record.title}</TableCell>
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

export default Records;
