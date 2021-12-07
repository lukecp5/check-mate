import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// Import the useQuery and useMutation hooks
import { useQuery } from '@apollo/client';
// // Import the USER_INFO query
import { USER_INFO } from '../utils/queries'
import FriendBox from '../components/FriendBox';
import PieChartPlayer from '../components/PieChartPlayer';
import randomColor from '../utils/randomColor';

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
    background: randomColor(userColors), 
    color:'white', 
    width: 72, 
    height: 72,
})); 

var colors = ['#00A1CB','#01A4A4','#113F8C','#E54028','#F18D05','#D70060'];
var userColors = ['#00A1CB','#01A4A4','#113F8C', '#61AE24', '#D0D102', '#32742C'];


export default function Profile() {
    // //this handles the pagniation changes 
    // const [page, setPage] = useState(1); 
    // This is the state for the user's info
    const { loading, error, data } = useQuery(USER_INFO);  
    const [ totalWins, setWins ] = useState([3]);
    
    //this takes the firstName from the db and returns just the first letter for the avatars
    const initial = () => {
        return firstName.charAt(0); 
    }

	const userInfo = data ? data.userInfo : { };
    //console.log("userInfo: ", userInfo);
  
    const { firstName } = data ? data.userInfo : { firstName: "Player" };
    const { wins } = data ? data.userInfo : { wins: [{ wins: 0 }] };
    const { losses } = data ? data.userInfo : { losses: [{ losses: 0 }] };
    const { ties } = data ? data.userInfo : { ties: [{ ties: 0 }] };
    
    // console.log("wins: ", ...wins);
    // console.log("losses: ", ...losses);
    // console.log("ties: ", ...ties);

    let winsArray = [...wins]
    //console.log("winsArray: ", winsArray);
    const countWins = winsArray.map(item => item.wins).reduce((prev, curr) => prev + curr, 0);
    //console.log("countWins:", countWins);

    let lossesArray = [...losses]
    //console.log("lossesArray: ", lossesArray);
    const countLosses = lossesArray.map(item => item.losses).reduce((prev, curr) => prev + curr, 0);
    //console.log(countLosses);
    
    let tiesArray = [...ties]
    //console.log("tiesArray: ", tiesArray);
    const countTies = tiesArray.map(item => item.ties).reduce((prev, curr) => prev + curr, 0);
    //console.log(countTies);
    
    // setWins(countWins);
    // console.log("userInfo: ", userInfo);
    const handleWins = (wins) => {
        // let gameWins = Object.values(wins);
        // console.log("gameWins: ", gameWins);
        let winsArray = [...wins];
        const countWins = winsArray.map(item => item.wins).reduce((prev, curr) => prev + curr, 0);
        //console.log(countWins);
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

    //console.log(userInfo);

    // const handlePageChange = (event, newPage) => {
    //     setPage(newPage); 
    //     console.log(event.target); 
    // }

    /////////////////////Start of Ben messing around in here////////////////////////
    
    const favoriteGame = () => {
        //make an object
            let favoriteGameObj = {};
            let currentKey = '';
        //iterate over each array win, lose, draw, one at a time adding to the favortie Game Obj, the object has the name of a game with an acrueing counter of wins, then acrues loses into the count then finally ties

        //Win array iteration
        for (let i=0; i <winsArray.length; i++) {
            currentKey = winsArray[i].game;
            // console.log("currentKey: ", currentKey);
            if (favoriteGameObj[currentKey] === undefined){
                favoriteGameObj[currentKey] = 1;
            } else {
                favoriteGameObj[currentKey] ++;                
            }
        }

        //Lose array iteration i and j are in use, go with k 

        for (let k=0; k <lossesArray.length; k++) {
            currentKey = lossesArray[k].game;
            // console.log("currentKey: ", currentKey);
            if (favoriteGameObj[currentKey] === undefined){
                favoriteGameObj[currentKey] = 1;
            } else {
                favoriteGameObj[currentKey] ++;                
            }
        }

        //Tie array iteration i and j and k are in use, go with l

        for (let l=0; l <tiesArray.length; l++) {
            currentKey = tiesArray[l].game;
            // console.log("currentKey: ", currentKey);
            if (favoriteGameObj[currentKey] === undefined){
                favoriteGameObj[currentKey] = 1;
            } else {
                favoriteGameObj[currentKey] ++;                
            }
        }

        //Make a key array to iterate
        const keyArray = (Object.keys(favoriteGameObj))
        //make variables to store the highest values, initial Them with the first value in the array
        let highestKey = keyArray[0];
        let highestKeyValue = favoriteGameObj[keyArray[0]];
        let faveGameReturnArray = [];

        // Iterate across the key array taking the obj value from favoriteGaemObj at the key and comparing to the current value, replace if higher.  Start with the second index position.       
        for (let j=1; j <keyArray.length; j++){
            
            if(favoriteGameObj[keyArray[j]] > highestKeyValue){
                highestKeyValue = favoriteGameObj[keyArray[j]];
                highestKey = keyArray[j];
            }
        }

        //return the highest value key
        faveGameReturnArray.push(highestKey, highestKeyValue);
        return faveGameReturnArray;
    }
    // The JSX didn't like using favoriteGame() so I had to add this seemingly extra useless variable so the JSX could use it
    const faveGame = favoriteGame();


    // here we calculate the game the player has won the most, we go over the winning array again but then do the key sort at that point
    
    const WinningestGame = () => {
        //make an object to hold the games from the array as keys and the numbers of wins as the value
        let winningestGameObj = {};
        let currentKey = '';
            //iterate over the win array adding up each win in a win object.
    
            //Win array iteration
            for (let i=0; i <winsArray.length; i++) {
                currentKey = winsArray[i].game;
                // console.log("currentKey: ", currentKey);
                if (winningestGameObj[currentKey] === undefined){
                    winningestGameObj[currentKey] = 1;
                } else {
                    winningestGameObj[currentKey] ++;                
                }
            }

            //Make a key array to iterate over the keys in the object finding the one with the highest value
            const keyArray = (Object.keys(winningestGameObj))
            //make variables to store the highest values, initial Them with the first value in the array
            let highestKey = keyArray[0];
            let highestKeyValue = winningestGameObj[keyArray[0]];
            let winningestGameReturnArray = [];

            for (let j=1; j <keyArray.length; j++){
                if(winningestGameObj[keyArray[j]] > highestKeyValue){
                    highestKeyValue = winningestGameObj[keyArray[j]];
                    highestKey = keyArray[j];
                }
            }
        winningestGameReturnArray.push(highestKey, highestKeyValue);
        return winningestGameReturnArray;
    }

    const winningestGame = WinningestGame();


    // same thing but losing
    
    const LosingestGame = () => {
        //make an object to hold the games from the array as keys and the numbers of wins as the value
        let losingestGameObj = {};
        let currentKey = '';
            //iterate over the win array adding up each win in a win object.
    
            //Win array iteration
            for (let i=0; i <lossesArray.length; i++) {
                currentKey = lossesArray[i].game;
                if (losingestGameObj[currentKey] === undefined){
                    losingestGameObj[currentKey] = 1;
                } else {
                    losingestGameObj[currentKey] ++;                
                }
            }

            //Make a key array to iterate over the keys in the object finding the one with the highest value
            const keyArray = (Object.keys(losingestGameObj))
            //make variables to store the highest values, initial Them with the first value in the array
            let highestKey = keyArray[0];
            let highestKeyValue = losingestGameObj[keyArray[0]];
            let losingestGameReturnArray = [];

            for (let j=1; j <keyArray.length; j++){
                if(losingestGameObj[keyArray[j]] > highestKeyValue){
                    highestKeyValue = losingestGameObj[keyArray[j]];
                    highestKey = keyArray[j];
                }
            }       

        losingestGameReturnArray.push(highestKey, highestKeyValue);
        return losingestGameReturnArray;
    }

    const losingestGame = LosingestGame();

    const totalGamesPlayed = (winsArray.length + lossesArray.length + tiesArray.length);

    const careerPercentWins = (Math.trunc((winsArray.length/ totalGamesPlayed) * 100));

    ///////////////////End of Ben messing around in here?//////////////////////////


    return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <StatBox>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                    <UserAvatar>{initial()}</UserAvatar>
                        {/* <UserAvatar aria-describedby={id} alt="User" /> */}
                        {/* TODO: Replace User with Username from DB */}
                        <Typography variant="h5" sx={{display: "flex", flexDirection: "column", justifyContent: "center"  }}>
                            Welcome back, {firstName}!
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{marginTop: 4}}>
                        <Typography variant="body1" component="div">
                            Most Won Game: {winningestGame[0]} - You have won this game {winningestGame[1]} times!
                        </Typography>
                        {/* TODO: replace with friend who has beaten user the most */}
                        <Typography variant="body1" component="div">
                            Most Lost Game: {losingestGame[0]} - Lost a total of {losingestGame[1]} times.
                        </Typography>
                        {/* TODO: Replace with game user has played the most times */}
                        <Typography variant="body1" component="div">
                            Favorite Game: {faveGame[0]} - Played this game {faveGame[1]} times!
                        </Typography>
                        <Typography variant="body1" component="div">
                            Career Percent Wins: {careerPercentWins}%
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h4" sx={{ mt:2, textAlign: "center"  }}>
                            Career Stats - Total Games {totalGamesPlayed}
                        </Typography>
                        
                       {countWins > 1 ? <PieChartPlayer win={countWins} lose={countLosses} tie={countTies}/> : null}

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
