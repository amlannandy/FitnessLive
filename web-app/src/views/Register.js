import React, { useReducer } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alert';
import { register } from '../store/actions/auth';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formReducer = (state, action) => {
  return {
    ...state,
    [action.target.name]: action.target.value,
  };
};

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const { isLoading, isAuthenticated } = useSelector(state => state.auth);
  const [formData, setFormData] = useReducer(formReducer, initialFormData);

  const registerHandler = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      dispatch(setAlert("Passwords don't match", 'error'));
      return;
    }
    dispatch(register(`${firstName} ${lastName}`, email, password));
  };

  if (!isLoading && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h2'>
          Register
        </Typography>
        <form className={classes.form} onSubmit={registerHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                disabled={isLoading}
                onChange={setFormData}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                disabled={isLoading}
                onChange={setFormData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                type='email'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                disabled={isLoading}
                onChange={setFormData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                disabled={isLoading}
                onChange={setFormData}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                id='confirmPassword'
                autoComplete='current-password'
                disabled={isLoading}
                onChange={setFormData}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={isLoading}
            className={classes.submit}>
            Register
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
