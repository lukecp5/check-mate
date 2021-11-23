import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { theme } from '../Theme/Theme'; 
import { styled } from '@mui/system';
import Logo from '../Images/Checkmatelogofinal.png'; 

const MyToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.grey.main, 
})); 

const NavBtn = styled(Button)(({ theme }) => ({
    '&:hover': {
        background: theme.palette.grey.dark, 
    } 
})); 


export default function ButtonAppBar(theme) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MyToolbar>
          <IconButton
            size="large"
            edge="start"
            color='inherit'
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography> */}
          <img src={Logo} width="200"/>  
          <NavBtn color="inherit">Login</NavBtn>
          <NavBtn edge="end" color="inherit">Sign Up!</NavBtn>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
