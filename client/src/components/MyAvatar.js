import React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

//This changes the colors of the backgrounds of each of the cards
// Theme colors added to array
var colors = ['#00A1CB','#01A4A4','#113F8C','#61AE24','#D0D102','#32742C','#E54028','#F18D05','#D70060'];
var randomColor = () => {
    return colors[Math.floor(Math.random()* colors.length)];
};

//this styles the friend's avatars 
const StyledMyAvatar = styled(Avatar)(({ theme }) => ({
    margin: 20,  
    background: randomColor(), 
    width: 56, 
    height: 56,
    '&:hover': {
    cursor: 'pointer', 
    opacity: .7, 
    }
})); 

const MyAvatar = () => {
    return (
        <div>
            <StyledMyAvatar/> 
        </div>
    )
}

export default MyAvatar
