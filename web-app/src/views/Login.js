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
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link as RouterLink } from 'react-router-dom';

import { login } from '../store/actions/auth';

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

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialFormData = { email: '', password: '' };
  const { isLoading, isAuthenticated } = useSelector(state => state.auth);
  const [formData, setFormData] = useReducer(formReducer, initialFormData);

  const loginHandler = e => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login(email, password));
  };

  if (!isLoading && isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h2'>
          Login
        </Typography>
        <form className={classes.form} onSubmit={loginHandler}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={isLoading}
            className={classes.submit}>
            Login
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link component={RouterLink} to='/register' variant='body2'>
                New user? Register here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
