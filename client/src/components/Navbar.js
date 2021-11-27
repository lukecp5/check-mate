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

const MyLogo = styled("img")(() => ({
  width: 300,  
})); 

const useStyles = makeStyles((theme) => ({
  abRoot: {
    backgroundColor: '#616161',
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
    // padding: '5px',
    marginRight: theme.spacing(10),
    "&:hover": {
      color: "#61AE24",
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
    <AppBar position="static" classes={{root: classes.abRoot}}>
      <CssBaseline />
      <Toolbar>
        <MyLogo src={Logo} /> 
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/start" className={classes.link}>
              Start a Match
            </Link>
            <Link to="/searchGames" className={classes.link}>
              Search Games
            </Link>
            <Link to="/friends" className={classes.link}>
              Add Friends
            </Link>
            <Link to="/login" className={classes.link}>
              Login/Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
