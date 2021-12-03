import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';

//this styles the Friend's box, the green box 
const FriendBox = styled(Card)(({ theme }) => ({
    color: "#ffffff", 
    padding: '10px',  
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    margin: '10px 0', 
    textAlign: "center", 
    borderRadius: 0, 
})); 
