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

import { fetchRecords } from '../store/actions/records';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  button: {
    backgroundColor: '#83e85a',
    color: 'white',
    padding: theme.spacing(1.6),
    marginLeft: theme.spacing(1),
    width: 100,
  },
}));

const Records = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { records, isLoading } = useSelector(state => state.records);

  useEffect(() => {
    if (records.length === 0) {
      dispatch(fetchRecords());
    }
  }, [dispatch, records]);

  if (isLoading) {
    return <CustomLoadingSpinner />;
  }

  return (
    <Box>
      <Box p={2}>
        <TextField variant='outlined' label='Search by username' />
        <Button
          className={classes.button}
          size='large'
          variant='contained'
          color=''>
          Search
        </Button>
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
            {records.map((record, index) => (
              <TableRow key={record.email}>
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
