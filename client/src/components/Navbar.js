import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import Logo from '../Images/Checkmatelogofinal.png'; 
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const MyLogo = styled("img")(() => ({
  width: 300,  
})); 

const NavBtn = styled(Button)(({ theme }) => ({ 
  '&:hover': {
      background: theme.palette.grey.dark, 
  } 
})); 

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Register</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>How To Play</MenuItem>
                <MenuItem onClick={handleClose}>Start A Game</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
          <MyLogo src={Logo} /> 
          {auth && (
            <div>
              <Avatar sx={{backgroundColor: "primary.main"}}>AM</Avatar>
            </div>
          )}
        </Toolbar>

      </AppBar>
    </Box>
  );
}
