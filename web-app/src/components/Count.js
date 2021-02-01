import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Count = () => {
  return (
    <React.Fragment>
      <Title>Current Users</Title>
      <Typography component='p' variant='h4'>
        8
      </Typography>
      <Box m={2}></Box>
      <Title>Current Records</Title>
      <Typography component='p' variant='h4'>
        13
      </Typography>
    </React.Fragment>
  );
};

export default Count;
