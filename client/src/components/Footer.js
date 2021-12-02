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
    }, 
    display: 'flex', 
    justifyContent:'flex-end', 
})); 

export default function Footer() {
  return (
        <MyToolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Stack
                direction="column"
                >
                <img src={logoicon} width="50" alt="Dice Logo"/>  
                <Typography>
                    © 2021 CheckMate
                </Typography>
                <Typography>
                    All Rights Reserved
                </Typography>
            </Stack>
            <Stack
                direction="column"
            >
                {/* <Typography> 
                    Contributors:
                </Typography> */}
                <NavBtn color="inherit" href="https://github.com/AmandaC0022" target="_blank">Amanda Morgan</NavBtn>
                <NavBtn color="inherit" href="https://github.com/stevenslade" target="_blank">Ben Slinde</NavBtn>
                <NavBtn color="inherit" href="https://github.com/d4nnyq88" target="_blank">Danny Quigley</NavBtn>
                <NavBtn color="inherit" href="https://github.com/hannahnmcdonald" target="_blank">Hannah McDonald</NavBtn>
                <NavBtn color="inherit" href="https://github.com/lukecp5" target="_blank">Luke Poirrier</NavBtn>
            </Stack>
        </MyToolbar>
  );
}
