import React, { useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const StatBox = styled(Card)(({ theme }) => ({
    color: "#ffffff",
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.tertiary.dark}, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.light})`, 
    margin: '10px 0', 
    textAlign: "left", 
})); 

const FriendBox = styled(Card)(({ theme }) => ({
    color: "#ffffff", 
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    margin: '10px 0', 
    textAlign: "center", 
})); 

const MyAvatar = styled(Avatar)(({ theme }) => ({
    margin: 20,  
    background: randomColor(), 
    width: 56, 
    height: 56,
})); 

//This changes the colors of the backgrounds of each of the cards
// Theme colors added to array, Took out Green because of Green background
var colors = ['#00A1CB','#01A4A4','#113F8C','#E54028','#F18D05','#D70060'];
var randomColor = () => {
    return colors[Math.floor(Math.random()* colors.length)];
};
var elements = document.getElementsByClassName(Card);
    for (var i=0; i<elements.length; i++) {
    elements[i].style.backgroundColor = randomColor();
};

export default function Profile() {
    const [page, setPage] = useState(1); 

    const handlePageChange = (event, newPage) => {
        setPage(newPage); 
        console.log(event.target); 
    }

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <StatBox>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                        <Typography variant="h5">
                            Welcome back, User!
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body1" component="div" sx={{mt: '10px'}}>
                            Wins: 0 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Losses: 0 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Best Teammate: Chris 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Arch Nemesis: Ben 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Favorite Game: Monopoly  
                        </Typography>
                    </Stack>
                </CardContent>
            </StatBox>
        </Grid>
        <Grid item xs={12} sm={7} >
            <FriendBox>
                <CardContent>
                    <Grid container spacing={2}> 
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={6} sm={4} lg={3} key={index} sx={{display: 'flex', justifyContent: 'center'}}>
                            <MyAvatar>B</MyAvatar> 
                            <Typography varient="h6" sx={{alignSelf: 'center',}}>Ben</Typography>
                        </Grid>
                        ))}
                    </Grid>
                    <Stack>
                        <Pagination 
                            count={5} 
                            variant="outlined" 
                            page={page} 
                            onPageChange={handlePageChange}
                            sx={{mt: 5, alignSelf: 'center'}}
                        /> 
                    </Stack>
                </CardContent>
            </FriendBox>
        </Grid>
    </Grid>


    );
}
