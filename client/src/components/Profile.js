import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';

// Import the useQuery and useMutation hooks
import { useQuery, useMutation } from '@apollo/client';
// // Import the USER_INFO query
import { USER_INFO } from '../utils/queries'

//this styles the User's stat box. Orange/red box 
const StatBox = styled(Card)(({ theme }) => ({
    color: "#ffffff",
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.tertiary.dark}, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.light})`, 
    margin: '10px 0', 
    textAlign: "left", 
    borderRadius: 0,
})); 

//this styles the Friend's box, the green box 
const FriendBox = styled(Card)(({ theme }) => ({
    color: "#ffffff", 
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    margin: '10px 0', 
    textAlign: "center", 
    borderRadius: 0, 
})); 

//this styles the friend's avatars 
const MyAvatar = styled(Avatar)(({ theme }) => ({
    margin: 20,  
    background: randomColor(), 
    width: 56, 
    height: 56,
    '&:hover': {
    cursor: 'pointer', 
    opacity: .7, 
    }
})); 

//this styles the friend's avatars 
const UserAvatar = styled(Avatar)(({ theme }) => ({
    background: userRandomColor(), 
    width: 56, 
    height: 56,
})); 

//this is mockup data for the friend's list. We will delete this after we get it pulling from the database
const myFriends = [
    {
        name: "Amanda", 
        initial: "A", 
    }, 
    {
        name: "Chris", 
        initial: "C", 
    }, 
    {
        name: "Hannah", 
        initial: "H", 
    }, 
    {
        name: "Ben", 
        initial: "B", 
    }, 
    {
        name: "Luke", 
        initial: "L", 
    }, 
    {
        name: "Daniel", 
        initial: "D", 
    }, 

]
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
    const [ totalWins, setWins ] = useState([3]);
  

	const userInfo = data ? data.userInfo : { };
    console.log("userInfo: ", userInfo);
  
    const { firstName } = data ? data.userInfo : { firstName: "Player" };
    const { wins } = data ? data.userInfo : { wins: "No Wins" };
    
    console.log("wins: ", ...wins);

    let winsArray = [...wins]
    console.log("winsArray: ", winsArray);
    const countWins = winsArray.map(item => item.wins).reduce((prev, curr) => prev + curr, 0);
    console.log(countWins);
    // setWins(countWins);
    
    // console.log("userInfo: ", userInfo);
    const handleWins = (wins) => {
        // let gameWins = Object.values(wins);
        // console.log("gameWins: ", gameWins);
        let winsArray = [...wins];
        const countWins = winsArray.map(item => item.wins).reduce((prev, curr) => prev + curr, 0);
        console.log(countWins);
        setWins(countWins);
    }
    // console.log("gameWins Length: ", gameWins.length);
    // setWins(gameWins);
    
    // handleWins(wins);

    // useEffect(() => {        
    //     handleWins(wins);
    // },[wins]);

    // useEffect(() => {        
    //     getUserInfo();
    // });
    
    // const getUserInfo = () => {
    //     console.log("userInfo: ", userInfo);
    //     let gameWins = userInfo.wins.map(w => w.wins).reduce((prev, curr) => prev + curr, 0);
    //     console.log("gameWins: ", gameWins);
    //     setWins(gameWins);
    //     // setWins(userInfo.wins[0].wins);
    // }
    
     

    console.log(userInfo);

    // const handlePageChange = (event, newPage) => {
    //     setPage(newPage); 
    //     console.log(event.target); 
    // }

    //this handles the popovers on the friends list 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <StatBox>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                        <UserAvatar alt="User" />
                        {/* TODO: Replace User with Username from DB */}
                        <Typography variant="h5">
                            Welcome back, {firstName}!
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        {/* TODO: Replace with total wins of that user */}
                        <Typography variant="body1" component="div" sx={{mt: '10px'}}>
                            Wins: {countWins}
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
                </CardContent>
            </StatBox>
        </Grid>
        <Grid item xs={12} sm={7} >
            <FriendBox>
                <CardContent>
                    <Grid container spacing={2} sx={{justifyContent: 'center'}}> 
                    <Typography variant="h4">My Friends</Typography>
                    {/* TODO: I have already set this up to pull from an array of objects. Would need to replace with our friend db  */}
                    {myFriends.map((friend, index) => (
                        <Grid 
                            item 
                            xs={6} md={4} lg={3} 
                            key={index} 
                            sx={{display: 'flex', justifyContent: 'center'}}
                        >
                            <Tooltip title="See Stats">
                                <MyAvatar aria-describeby={id} onClick={handleClick}>{friend.initial}</MyAvatar> 
                            </Tooltip>
                                <Typography 
                                    varient="h6" 
                                    sx={{alignSelf: 'center'}}
                                >{friend.name}
                                </Typography>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                sx={{width: '100%'}}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                            >
                                {/* TODO: Replace with friend's name */}
                                <Typography variant="h6">{myFriends[0].name}</Typography>
                                {/* TODO: Replace with how many times they have played together */}
                                <Typography variant="body2">Teamup Times: 20</Typography>
                                {/* TODO: Replace with friend's game they have played the most */}
                                <Typography variant="body2" sx={{marginBottom: 2}}>Favorite Game: Monopoly</Typography>
                                <Grid container spacing={2} sx={{marginBottom: 2}}> 
                                    <Grid item>
                                        <Typography variant="div">.</Typography>
                                        <Typography variant="body1">Wins:</Typography>
                                        <Typography variant="body1">Loses:</Typography>
                                    </Grid>
                                    <Grid item>
                                        {/* TODO: Replace with Friend's name */}
                                        <Typography variant="body1">{myFriends[0].name}</Typography>
                                        {/* TODO: Replace with Friends Total Wins */}
                                        <Typography variant="body2">12</Typography>
                                        {/* TODO: Replace with Friends Total Losses */}
                                        <Typography variant="body2">3</Typography>
                                        
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">Me</Typography>
                                        {/* TODO: Replace with Users Total Wins */}
                                        <Typography variant="body2">18</Typography>
                                        {/* TODO: Replace with Users Total Losses */}
                                        <Typography variant="body2">0</Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h6" sx={{textAlign: 'center'}}>Total Wins</Typography>
                                {/* TODO: Replace this with a .map for our user's common games. Shows the wins from each game the user and friend have played together */}
                                <Grid container spacing={2}> 
                                    <Grid item>
                                        <Typography variant="div">.</Typography>
                                        <Typography variant="body1">Monopoly:</Typography>
                                        <Typography variant="body1">Yahtzee:</Typography>
                                        <Typography variant="body1">Life:</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">{myFriends[0].name}</Typography>
                                        <Typography variant="body2">5</Typography>
                                        <Typography variant="body2">1</Typography>  
                                        <Typography variant="body2">3</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">Me</Typography>
                                        <Typography variant="body2">4</Typography>
                                        <Typography variant="body2">10</Typography>
                                        <Typography variant="body2">1</Typography>
                                    </Grid>
                                </Grid>
                            </Popover>
                        </Grid>
                        ))}
                    </Grid>
                    {/* <Stack>
                        <Pagination 
                            count={5} 
                            variant="outlined" 
                            page={page} 
                            onPageChange={handlePageChange}
                            sx={{mt: 5, alignSelf: 'center'}}
                        /> 
                    </Stack> */}
                </CardContent>
            </FriendBox>
        </Grid>
    </Grid>


    );
}
