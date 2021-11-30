import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { styled } from '@mui/system';
import Logo from '../Images/Checkmatelogofinal.png'; 
import  { Grid }  from '@mui/material';
// AVATAR/PROFILE
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

const MyLogo = styled("img")(() => ({
  width: 300,  
})); 

const useStyles = makeStyles((theme) => ({
  abRoot: {
    backgroundColor: '#616161',
  },
  right: {
    marginLeft: 'auto'
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    // padding: '5px',
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    fontFamily: 'Quicksand',
    fontWeight: 600,
    align: 'right',
    // padding: '5px',
    marginRight: theme.spacing(10),
    "&:hover": {
      color: "#61AE24",
      // TO DO: Link Hover Effects
      // background: 'transparent',
      // borderBottom: "2px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
<<<<<<< HEAD
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ backgroundColor: 'grey.main'}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to='/login'>Login</Link></MenuItem>
                <MenuItem onClick={handleClose}>Register</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>How To Play</MenuItem>
                <MenuItem onClick={handleClose}>Start A Game</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
          <Link to='/'>
            <MyLogo src={Logo} /> 
          </Link>
          {auth && (
            <div>
              <Avatar sx={{backgroundColor: "primary.main"}}>AM</Avatar>
=======
    <AppBar position="static" classes={{root: classes.abRoot}}>
      <CssBaseline />
      <Toolbar>
        <MyLogo src={Logo} /> 
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Grid className={classes.right}>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/startmatch" className={classes.link}>
                Start a Match
              </Link>
              <Link to="/searchgames" className={classes.link}>
                Search Games
              </Link>
              <Link to="/friends" className={classes.link}>
                Add Friends
              </Link>
              <Link to="/login" className={classes.link}>
                Login/Sign Up
              </Link>
              {/* IF LOGGED in Avatar Button & REMOVE 'LOGIN/SIGN Up Link */}
              {/* <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack> */}
>>>>>>> main
            </div>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
