import React from 'react';
import {
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
        <CircularProgress />
        <Typography component='h1' variant='h2'>
          {{ message }}
        </Typography>
      </div>
    </Container>
  );
};

export default CustomLoadingSpinner;
