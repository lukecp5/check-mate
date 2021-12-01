import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import { theme } from '../Theme/Theme'; 
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import logoicon from '../Images/checkmate-favicon.png'; 


const MyToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.grey.main, 
    // Change font to white
    color: "#ffffff",
})); 

const NavBtn = styled(Button)(({ theme }) => ({
    '&:hover': {
        background: theme.palette.grey.dark, 
        color: theme.palette.secondary.main,
    } 
})); 

export default function Footer() {
  return (
        <MyToolbar>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                padding="10px"
                // Centers items:
                margin="auto"
                >
                <img src={logoicon} width="50" alt="Dice Logo"/>  
                <Typography>
                    © 2021 CheckMate All Rights Reserved
                </Typography>
                <Typography> 
                    Contributors:
                </Typography>
                <Typography>
                        <NavBtn color="inherit" href="https://github.com/AmandaC0022" target="_blank">Amanda Morgan</NavBtn>
                        <NavBtn color="inherit" href="https://github.com/stevenslade" target="_blank">Ben Slinde</NavBtn>
                        <NavBtn color="inherit" href="https://github.com/d4nnyq88" target="_blank">Danny Quigley</NavBtn>
                        <NavBtn color="inherit" href="https://github.com/hannahnmcdonald" target="_blank">Hannah McDonald</NavBtn>
                        <NavBtn color="inherit" href="https://github.com/lukecp5" target="_blank">Luke Poirrier</NavBtn>
                </Typography>
            </Stack>
        </MyToolbar>
  );
}
