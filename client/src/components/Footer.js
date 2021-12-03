import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import { theme } from '../Theme/Theme'; 
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import logoicon from '../Images/checkmate-favicon.png'; 

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const MyToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.grey.main, 
    // Change font to white
    color: "#ffffff",
})); 

//This changes the colors of the backgrounds of each of the cards
// Theme colors added to array
// var colors = ['#00A1CB','#01A4A4','#113F8C','#61AE24','#D0D102','#32742C','#E54028','#F18D05','#D70060'];
// var randomColor = () => {
//     return colors[Math.floor(Math.random()* colors.length)];
// };

const NavBtn = styled(Button)(({ theme }) => ({
    display: 'flex', 
    justifyContent:'flex-end', 
    '&:hover': { 
        color: '#61AE24',
        background: 'transparent'
    }, 

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
            <Stack direction="row">
                <NavBtn>
                    <FacebookIcon sx={{ margin: '20px', fontSize: 40}}/>
                </NavBtn>
                <NavBtn>
                    <InstagramIcon sx={{ margin: '20px', fontSize: 40}}/>
                </NavBtn>
                <NavBtn>
                    <TwitterIcon  sx={{ margin: '20px', fontSize: 40}}/>
                </NavBtn>
            </Stack>
            <Stack
                direction="column"
            >
                {/* <Typography variant="h6"> 
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
