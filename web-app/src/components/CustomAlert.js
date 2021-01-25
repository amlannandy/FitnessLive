import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/core';

const CustomAlert = () => {
  const alerts = useSelector(state => state.alert);

  if (!alerts) {
    return null;
  }

  return alerts.map(alert => (
    <Alert key={alert.id} severity={alert.type}>
      {alert.message}
    </Alert>
  ));
};

export default CustomAlert;
