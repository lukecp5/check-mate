import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
import { PieChart } from 'react-minimal-pie-chart';
// Import the useQuery and useMutation hooks
import { useQuery, useMutation } from '@apollo/client';
// Import the USER_INFO query
import { USER_INFO } from '../utils/queries'
import FriendBox from './FriendBox';

//this styles the User's stat box. Orange/red box 
const StatBox = styled(Card)(({ theme }) => ({
    color: "#ffffff",
    padding: '10px',  
    background: `linear-gradient(to right, ${theme.palette.tertiary.dark}, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.light})`, 
    margin: '10px 0', 
    textAlign: "left", 
    borderRadius: 0,
})); 

//this styles the friend's avatars 
const UserAvatar = styled(Avatar)(({ theme }) => ({
    background: userRandomColor(), 
    width: 56, 
    height: 56,
})); 


//This changes the colors of the backgrounds of each of the friend's avatars 
// Theme colors added to array, Took out Green because of Green background
var colors = ['#00A1CB','#01A4A4','#113F8C','#E54028','#F18D05','#D70060'];
var randomColor = () => {
    return colors[Math.floor(Math.random()* colors.length)];
};

var userColors = ['#00A1CB','#01A4A4','#113F8C', '#61AE24', '#D0D102', '#32742C'];
var userRandomColor = () => {
    return userColors[Math.floor(Math.random()* colors.length)];
};

export default function Profile() {
    // //this handles the pagniation changes 
    // const [page, setPage] = useState(1); 

    // This is the state for the user's info
    const { loading, error, data } = useQuery(USER_INFO);
	const userInfo = data ? data.userInfo : { };
    if(error) {
        console.log(error);
    }
    const firstName = userInfo.firstName;   

    console.log(userInfo);

    // const handlePageChange = (event, newPage) => {
    //     setPage(newPage); 
    //     console.log(event.target); 
    // }

    const [chartData, setChartData] = useState ([
        { title: 'Tie', value: 5, color: '#E38627' },
        { title: 'Lose', value: 15, color: '#C13C37' },
        { title: 'Win', value: 20, color: '#6A2135' },
    ]);

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <StatBox>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                    <Avatar>{firstName}</Avatar>
                        {/* <UserAvatar aria-describedby={id} alt="User" /> */}
                        {/* TODO: Replace User with Username from DB */}
                        <Typography variant="h5" sx={{display: "flex", flexDirection: "column", justifyContent: "center"  }}>
                            Welcome back, {firstName}!
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        {/* TODO: Replace with total wins of that user */}
                        <Typography variant="body1" component="div" sx={{mt: '10px'}}>
                            Wins: 0 
                        </Typography>
                        {/* TODO: Replace with total losses of that user */}
                        <Typography variant="body1" component="div">
                            Losses: 0 
                        </Typography>
                        {/* TODO: Replace with friend who user plays with most */}
                        <Typography variant="body1" component="div">
                            Best Teammate: Chris 
                        </Typography>
                        {/* TODO: replace with friend who has beaten user the most */}
                        <Typography variant="body1" component="div">
                            Arch Nemesis: Ben 
                        </Typography>
                        {/* TODO: Replace with game user has played the most times */}
                        <Typography variant="body1" component="div">
                            Favorite Game: Monopoly  
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h4" sx={{ mt:2, textAlign: "center"  }}>
                            Career Stats
                        </Typography>
                        
                        <PieChart
                            style={{
                                fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                fontSize: '8px',
                            }}
                            data={chartData}
                            radius={35}
                            lineWidth={60}
                            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                            segmentsShift={1}
                            animate
                            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                            labelPosition={70}
                            labelStyle={{
                                fill: '#fff',
                                opacity: 0.75,
                                pointerEvents: 'none',
                                fontSize: '3px',
                                fontFamily: 'sans-serif',
                        }}
            />
                    </Stack>
                </CardContent>
            </StatBox>
        </Grid>
        <Grid item xs={12} sm={7} >
            <FriendBox/> 
        </Grid>
    </Grid>


    );
}
