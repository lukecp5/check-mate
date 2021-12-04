import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import { theme } from '../Theme/Theme'; 
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import logoicon from '../Images/checkmate-favicon.png'; 
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';

const MyToolbar = styled(Toolbar)(({ theme }) => ({
    background: theme.palette.grey.main, 
    // Change font to white
    color: "#ffffff",
})); 

const NavBtn = styled(Button)(({ theme }) => ({
    display: 'flex', 
    justifyContent:'flex-end', 
    '&:hover': {  
        background: 'transparent', 
    }, 

})); 

export default function Footer() {
    // TODO: Replace shareUrl with deployed heroku url 
    const shareUrl = 'http://github.com';
    return (
        <MyToolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" spacing={1} sx={{alignItems: 'center'}}>
                    <img src={logoicon} width="50" alt="Dice Logo"/>  
                    <div direction= 'row'>
                    <Typography>
                        © 2021 CheckMate 
                    </Typography>
                    <Typography>
                         All Rights Reserved
                    </Typography>
                    </div>
                    <Stack direction="row" spacing={2} sx={{marginTop: 2}}>
                        <FacebookShareButton url={shareUrl}><FacebookIcon size={30} round={true}/></FacebookShareButton>
                        <TwitterShareButton url={shareUrl}><TwitterIcon size={30} round={true} /></TwitterShareButton>
                        <LinkedinShareButton url={shareUrl}><LinkedinIcon size={30} round={true} /></LinkedinShareButton>
                    </Stack>
                        {/* <div direction='row'>
                            <NavBtn>
                                <FacebookIcon sx={{ margin: '10px', fontSize: 30}}/>
                            </NavBtn>
                            <NavBtn>
                                <InstagramIcon sx={{ margin: '10px', fontSize: 30}}/>
                            </NavBtn>
                            <NavBtn>
                                <TwitterIcon  sx={{ margin: '10px', fontSize: 30}}/>
                            </NavBtn>
                        </div> */}
                </Stack>
                {/* <Stack direction="column">
                    <img src={logoicon} width="50" alt="Dice Logo"/>  
                </Stack> */}
                <Stack direction="column">
                    <NavBtn color='inherit' sx={{'&:hover': {color: '#D70060'}}} href="https://github.com/AmandaC0022" target="_blank">Amanda Morgan</NavBtn>
                    <NavBtn color="inherit" sx={{'&:hover': {color: '#D0D102'}}} href="https://github.com/stevenslade" target="_blank">Ben Slinde</NavBtn>
                    <NavBtn color="inherit" sx={{'&:hover': {color: '#61AE24'}}} href="https://github.com/d4nnyq88" target="_blank">Danny Quigley</NavBtn>
                    <NavBtn color="inherit" sx={{'&:hover': {color: '#00A1CB'}}} href="https://github.com/hannahnmcdonald" target="_blank">Hannah McDonald</NavBtn>
                    <NavBtn color="inherit" sx={{'&:hover': {color: '#F18D05'}}} href="https://github.com/lukecp5" target="_blank">Luke Poirrier</NavBtn>
                </Stack>
        </MyToolbar>
  );
}
