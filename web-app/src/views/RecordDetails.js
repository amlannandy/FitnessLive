import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core';

import PocketData from '../components/PocketData';
import { fetchRecord } from '../store/actions/records';
import CustomLoadingSpinner from '../components/CustomLoadingSpinner';

const RecordDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { record, isLoading } = useSelector(state => state.records);

  useEffect(() => {
    dispatch(fetchRecord(id));
  }, [dispatch, id]);

  if (isLoading || !record) {
    return <CustomLoadingSpinner />;
  }

  const getDate = timestamp => {
    var time = timestamp.toDate();
    return time.toDateString();
  };

  return (
    <div>
      <Typography
        component='h2'
        variant='h4'
        color='textPrimary'
        gutterBottom
        style={{ marginBottom: 20 }}>
        Record Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6}>
          <img
            src={record.imageUrl}
            alt='No Document Attached'
            style={{ height: 400, width: 400 }}
          />
        </Grid>
        <Grid item lg={6} md={6}>
          <div>
            <PocketData title='Problem' subtitle={record.title} />
            <PocketData title='Description' subtitle={record.subtitle} />
            <PocketData title='Submitted by' subtitle={record.name} />
            <PocketData title='Username' subtitle={record.username} />
            <PocketData
              title='Record issued on'
              subtitle={getDate(record.dateIssued)}
            />
            <PocketData
              title='Record submitted on'
              subtitle={getDate(record.dateUploaded)}
            />
            <Button variant='contained' color='primary'>
              Download
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecordDetails;
