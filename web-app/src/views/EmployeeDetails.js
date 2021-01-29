import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Container,
  Typography,
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import PocketData from '../components/PocketData';
import { fetchEmployee } from '../store/actions/employees';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: 120,
    width: 120,
  },
  space: {
    marginRight: theme.spacing(1),
  },
}));

const EmployeeDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { employee, isLoading } = useSelector(state => state.employees);

  useEffect(() => {
    dispatch(fetchEmployee(id));
  }, [dispatch, id]);

  if (isLoading || !employee) {
    return <CustomLoadingSpinner />;
  }

  const healthData = employee.data
    ? [
        {
          value: employee.data.heartRate,
          label: 'Heart Rate',
          color: '#ff304f',
          textColor: 'white',
          unit: 'bpm',
        },
        {
          value: employee.data.oxygenSaturation,
          label: 'Oxygen Saturation',
          color: '#cabbe9',
          textColor: 'white',
          unit: '%',
        },
        {
          value: employee.data.bodyTemperature,
          label: 'Body Temperature',
          color: '#0b8457',
          textColor: 'white',
          unit: '° C',
        },
        {
          value: employee.data.glucose,
          label: 'Glucose',
          color: '#226089',
          textColor: 'white',
          unit: 'mg/dL',
        },
        {
          value: employee.data.bloodPressure.split(' ')[0],
          label: 'Blood Pressure',
          color: '#facf5a',
          textColor: 'white',
          unit: employee.data.bloodPressure.split(' ')[1],
        },
        {
          value: employee.data.electroCardiogram,
          label: 'Electro Cardiogram',
          color: '#61305d',
          textColor: 'white',
          unit: 'ms',
        },
        {
          value: employee.data.respiration,
          label: 'Respiration',
          color: '#293462',
          textColor: 'white',
          unit: 'bpm',
        },
        {
          value: employee.data.steps,
          label: 'Activity',
          color: '#ff6d24',
          textColor: 'white',
          unit: 'steps',
        },
      ]
    : null;

  return (
    <Box className={classes.paper}>
      <Typography component='h3' variant='h5'>
        Employee Details
      </Typography>
      <Box p={2} className={classes.paper} textAlign='center'>
        <Avatar className={classes.avatar} src={employee.imageUrl}>
          <AccountCircle className={classes.avatar} />
        </Avatar>
        <p>
          {employee.name} <br /> {employee.username}
        </p>
      </Box>
      <Container maxWidth='md' component='main'>
        <Card>
          <CardHeader title='Basic Details' />
          <CardContent>
            <PocketData title='Email' subtitle={employee.email} />
            <PocketData title='Email' subtitle={employee.email} />
            <PocketData title='Email' subtitle={employee.email} />
          </CardContent>
        </Card>
      </Container>
      {!healthData ? null : (
        <Container maxWidth='md' component='main'>
          <Grid container spacing={2} alignItems='flex-end'>
            {healthData.map(data => (
              <Grid item key={data.label} xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader
                    subheader={data.label}
                    subheaderTypographyProps={{
                      align: 'center',
                      color: data.textColor,
                    }}
                    style={{
                      backgroundColor: data.color,
                      color: data.textColor,
                    }}
                  />
                  <CardContent>
                    <div className={classes.cardContent}>
                      <Typography
                        component='h6'
                        variant='h6'
                        color='textPrimary'
                        className={classes.space}>
                        {data.value}
                      </Typography>
                      <Typography variant='h6' color='textSecondary'>
                        {data.unit}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default EmployeeDetails;
