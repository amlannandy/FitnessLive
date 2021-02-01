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

import BarGraph from '../components/BarGraph';
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
  mainGrid: {
    marginTop: 40,
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
          limit: 80,
        },
        {
          value: employee.data.oxygenSaturation,
          label: 'Oxygen Saturation',
          color: '#cabbe9',
          textColor: 'white',
          unit: '%',
          limit: 95,
        },
        {
          value: employee.data.bodyTemperature,
          label: 'Body Temperature',
          color: '#0b8457',
          textColor: 'white',
          unit: '° C',
          limit: 37,
        },
        {
          value: employee.data.glucose,
          label: 'Glucose',
          color: '#226089',
          textColor: 'white',
          unit: 'mg/dL',
          limit: 140,
        },
        {
          value: employee.data.bloodPressure.split(' ')[0],
          label: 'Blood Pressure',
          color: '#facf5a',
          textColor: 'white',
          unit: employee.data.bloodPressure.split(' ')[1],
          limit: 110,
        },
        {
          value: employee.data.electroCardiogram,
          label: 'Electro Cardiogram',
          color: '#61305d',
          textColor: 'white',
          unit: 'ms',
          limit: 120,
        },
        {
          value: employee.data.respiration,
          label: 'Respiration',
          color: '#293462',
          textColor: 'white',
          unit: 'bpm',
          limit: 17,
        },
        {
          value: employee.data.steps,
          label: 'Activity',
          color: '#ff6d24',
          textColor: 'white',
          unit: 'steps',
          limit: 10000,
        },
      ]
    : null;

  return (
    <Box className={classes.paper}>
      <Typography component='h3' variant='h5'>
        Employee Details
      </Typography>
      <Grid className={classes.mainGrid} container spacing={3}>
        <Grid item md={5}>
          <Box p={1} className={classes.paper} textAlign='center'>
            <Avatar className={classes.avatar} src={employee.imageUrl}>
              <AccountCircle className={classes.avatar} />
            </Avatar>
            <p>
              {employee.name} <br /> {employee.username}
            </p>
          </Box>
        </Grid>
        <Grid item md={7}>
          <BarGraph healthData={healthData} />
        </Grid>
      </Grid>
      <Container maxWidth='md' component='main'>
        <Box m={2}>
          <Card>
            <CardHeader title='Basic Details' />
            <Box p={2}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <PocketData title='Email' subtitle={employee.email} />
                  <PocketData title='Phone Number' subtitle={employee.phone} />
                  <PocketData title='Age' subtitle={employee.age + ' years'} />
                </Grid>
                <Grid item md={6}>
                  <PocketData title='Gender' subtitle={employee.gender} />
                  <PocketData
                    title='Height'
                    subtitle={employee.height + ' cm'}
                  />
                  <PocketData
                    title='Weight'
                    subtitle={employee.weight + ' kg'}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
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
