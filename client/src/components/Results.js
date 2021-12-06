import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Typography, TextField, Card } from '@mui/material';
import { ADD_WIN, ADD_LOSS, ADD_TIE } from '../utils/mutations'
import SubmitBtn from './SubmitBtn';
import { Link } from 'react-router-dom';
// import  { Grid }  from '@mui/material';
import Button from '@mui/material/Button';

import { useQuery } from '@apollo/client';
import { GET_FRIENDS } from '../utils/queries';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const trophy = <EmojiEventsIcon fontSize="small" sx={{color: 'gold'}} /> 
const checkedIcon = <CheckBoxIcon fontSize="small" /> 

const MyCard = styled(Card)(({ theme }) => ({ 
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    color: 'white',  
    borderRadius: 0,
})); 

const MyLink = styled(Link)(({ theme }) => ({ 
    textDecoration: 'none', 
    color: 'white'
})); 

const RulesBtn = styled(Button)(({ theme }) => ({ 
    display: 'block', 
    height: "auto",
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, 
    color: 'white', 
    margin: 20, 
    fontSize: 20, 
    '&:hover': {
      cursor: 'pointer', 
      opacity: .8, 
    }
})); 
  
// const friends = [
//     {firstName: "Amanda"}, 
//     {firstName: "Hannah"}, 
//     {firstName: "Ben"}, 
//     {firstName: "Luke"}, 
//     {firstName: "Daniel"},
// ]

const Results = (props) => {
    // > State variable to hold a user's friends, and the Query to get all friends of the logged in user
    const [friends, setFriends] = useState([]);
    const { loading, error, data, refetch } = useQuery(GET_FRIENDS);
    useEffect(() => {
        if(data != null) {
            if(data.getFriends != null) {
            console.log(data.getFriends); 
            setFriendsList([...data.getFriends[0].friends]);
            console.log("Friend List State Variable: " + friends);
        }else{
            setFriendsList(['No Friends']);
            console.log("No friends found");
        }
        }
        }, [data]);
        
    // > Function that sets the state variable that contains a user's friends
    async function setFriendsList(friends) {
        await setFriends(friends);
        console.log("Friends: ", friends);
    }

    // > State variable that holds information about the winners, losses, and tires 
    // > that the user selects, and the second array contains the actual data being sent to the server
    const [winners, setWinners ] = useState([]);
    const [winArray, setWinArray] = useState([]);

    const [losers, setLosers] = useState([]);
    const [loseArray, setLoseArray] = useState([]);

    const [tires, setTires] = useState([]);
    const [tieArray, setTieArray] = useState([]);



    // > Set up local variables based off of props passed down from searchGames component
    const gameId = props.gameId;
    const gameName = props.gameName;
    console.log("gameName: ", gameName);

    // > onChange function for the wins, lose, and tie checkboxes. Updates the state variable
    const handleWins = (event, selectedWinners) => {
        setWinners(selectedWinners);
        console.log("selectedWinners: ", selectedWinners);
    }
    const handleLosses = (event, selectedLosers) => {
        setLosers(selectedLosers);
        console.log("selectedLosers: ", selectedLosers);
    }
    const handleTies = (event, selectedTires) => {
        setTires(selectedTires);
        console.log("selectedTires: ", selectedTires);    
    }

    // > Mutations to add a win, loss, or tie to the database
    const [addWin] = useMutation(ADD_WIN, {
        variables: {...winArray[0]},
        onCompleted: () => console.log('Wins have been submitted to the database!') 
    });
    const [addTie] = useMutation(ADD_TIE, {
        variables: {...tieArray[0]},
        onCompleted: () => console.log('Ties have been submitted to the database!') 
    });
    const [addLoss] = useMutation(ADD_LOSS, {
        variables: {...loseArray[0]},
        onCompleted: () => console.log('Losses have been submitted to the database!') 
    });



  const handlePlayAgain = (event) => {
        event.preventDefault(); 
        console.log("This button should take you back to Choose Teammates / Play component"); 
    }

    const handleSubmitClick = async (event) => {
        try {
        event.preventDefault();
        // > Submit wins
        const winnersArray = winners.map(v => ({...v, game: gameName, wins: 1}));
        await setWinArray(winnersArray);
        for (let i = 0; i < winnersArray.length; i++) {
            await addWin({variables: {...winnersArray[i]}});
            console.log("winnersArray[i]: ", winnersArray[i]);
        }
        // > Submit losses
        const losersArray = losers.map(v => ({...v, game: gameName, losses: 1}));
        await setLoseArray(losersArray);
        for (let i = 0; i < losersArray.length; i++) {
            await addLoss({variables: {...losersArray[i]}});
            console.log("losersArray[i]: ", losersArray[i]);
        }
        // > Submit ties
        const tiresArray = tires.map(v => ({...v, game: gameName, ties: 1}));
        await setTieArray(tiresArray);
        for (let i = 0; i < tiresArray.length; i++) {
            await addTie({variables: {...tiresArray[i]}});
            console.log("tiresArray[i]: ", tiresArray[i]);
        }
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <Stack spacing={3} 
          sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', textAlign: 'center', flexDirection: 'column'}}>
            <MyCard sx={{ p: 10}}>
                {/* TO DO: Change Trophy Size */}
            <Typography variant="h5">{trophy}</Typography>
            <Typography variant="h3">{props.gameName}</Typography>
            <Typography variant="h5" sx={{p: 2}}>Choose Your Winners</Typography>
            <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={friends}
            disableCloseOnSelect
            getOptionLabel={(option) => option.firstName}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={trophy}
                    style={{ marginRight: 8 }}
                    checked={selected}

                />
                {option.firstName}
                </li>
            )}
            onChange={handleWins}

            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Choose Winners" placeholder="Select Winners" />
            )}
        />

        <Typography variant="h5" sx={{p: 2}}>Choose Your Losers</Typography>
            <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={friends}
            disableCloseOnSelect
            getOptionLabel={(option) => option.firstName}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                />
                {option.firstName}
                </li>
            )}

            onChange={handleLosses}
            style={{ width: 500 }}            
            renderInput={(params) => (
                <TextField {...params} label="Choose Losers" placeholder="Select Losers" />
                )}
            />
            <Typography variant="h5" sx={{p: 2}}>Choose Your Ties</Typography>
            <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={friends}
            disableCloseOnSelect
            getOptionLabel={(option) => option.firstName}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                />
                {option.firstName}
                </li>
            )}
            onChange={handleTies}
            style={{ width: 350 }}
            renderInput={(params) => (
                <TextField {...params} label="Choose Ties" placeholder="Select Ties" />
            )}
        />
        </MyCard>
        <Stack direction= "row" sx={{justifyContent: 'center'}}>
          <SubmitBtn size='large' sx={{width: 180}} onClick={handleSubmitClick}>
            Submit
          </SubmitBtn>
          <RulesBtn size= 'large' sx={{width: 180}} onClick={handlePlayAgain}>
              Play Again?
          </RulesBtn>
        </Stack>
    </Stack>
  );
}

export default Results
