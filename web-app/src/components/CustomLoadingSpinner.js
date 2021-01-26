import React from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CustomLoadingSpinner = ({ message = 'Loading...' }) => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Box m={2}>
          <CircularProgress />
        </Box>
        <Typography component='h1' variant='body1'>
          {message}
        </Typography>
      </div>
    </Container>
  );
};

export default CustomLoadingSpinner;
