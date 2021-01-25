import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    height: 100,
    width: 100,
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const user = useSelector(state => state.auth.user);

  return (
    <Box p={3} alignItems='center' display='flex' flexDirection='column'>
      <Avatar className={classes.avatar} />
      <Box p={2} alignItems='center' display='flex' flexDirection='column'>
        <Typography color='textPrimary' gutterBottom variant='h6'>
          {user ? user.name : ''}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          {user ? user.email : ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
