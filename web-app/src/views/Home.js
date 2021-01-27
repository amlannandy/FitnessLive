import React from 'react';
import clsx from 'clsx';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  IconButton,
  Divider,
  Typography,
  List,
  Toolbar,
  AppBar,
  Drawer,
  CssBaseline,
} from '@material-ui/core';
import {
  Dashboard,
  People,
  NoteOutlined,
  ExitToApp,
  ChevronLeft,
  Menu,
} from '@material-ui/icons';

import UserInfo from '../components/UserInfo';
import HomeRoutes from '../routes/HomeRoutes';
import { logout } from '../store/actions/auth';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
}));

const Home = ({ match: { url } }) => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector(state => state.auth);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  if (!isLoading && !isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}>
            <Menu />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}>
            Fitness Live Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='persistent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <UserInfo />
        <Divider />
        <List>
          <ListItem button component={Link} to='/'>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button component={Link} to='/employees'>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary='Employees' />
          </ListItem>
          <ListItem button component={Link} to='/records'>
            <ListItemIcon>
              <NoteOutlined />
            </ListItemIcon>
            <ListItemText primary='Records' />
          </ListItem>
          <ListItem button onClick={logoutHandler}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary='Log out' />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <HomeRoutes url={url} />
        </Container>
      </main>
    </div>
  );
};

export default Home;
