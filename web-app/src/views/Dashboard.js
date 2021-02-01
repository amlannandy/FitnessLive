import React from 'react';
import clsx from 'clsx';
import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  makeStyles,
  Container,
  Paper,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import Chart from '../components/Chart';
import Count from '../components/Count';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        FitnessLive
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph>
            Manage the well-being of your Company and Employess here
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button
                  component={RouterLink}
                  to='/employees'
                  variant='contained'
                  color='primary'>
                  View Employess
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={RouterLink}
                  to='/records'
                  variant='outlined'
                  color='primary'>
                  View Health Records
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Count />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Built by Amlan Kumar Nandy
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'>
          All Rights Reserved
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
};

export default Dashboard;
