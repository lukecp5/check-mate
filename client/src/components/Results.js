import React, { useState } from 'react'
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
import { ADD_WIN } from '../utils/mutations'
import SubmitBtn from './SubmitBtn';
import { Link } from 'react-router-dom';
// import  { Grid }  from '@mui/material';
import Button from '@mui/material/Button';

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
  
const friends = [
    {firstName: "Amanda"}, 
    {firstName: "Hannah"}, 
    {firstName: "Ben"}, 
    {firstName: "Luke"}, 
    {firstName: "Daniel"},
]

const Results = (props) => {
    const [addWin, { error }] = useMutation(ADD_WIN);
    const [winners, setWinners ] = useState([]);
    const [selectedArray, setSelected] = useState([]);
    // > gameId is sent in props, it is props.gameId, I don't think we need it but was not certain so its there
    // > game Name is in props as props.gameName
    const gameId = props.gameId;
    const gameName = props.gameName;
    // console.log("winnersArray: ", winnersArray);
    console.log("gameName: ", gameName);
    console.log("gameId: ", gameId);
       
    const handleWins = (event, selectedWinners) => {
        setWinners(selectedWinners);
        console.log("selectedWinners: ", selectedWinners);
        
    }

  const handlePlayAgain = (event) => {
        event.preventDefault(); 
        console.log("This button should take you back to Choose Teammates / Play component"); 
    }

    const handleSubmitClick = async (event) => {
        event.preventDefault();
        
        const winnersArray = winners.map(v => ({...v, wins: [{ game: gameName, wins: 1}]}));
        console.log("winnersArray: ", winnersArray);
        console.log("winnersArray: ", ...winnersArray);
        console.log("winner data wins ", winnersArray[0].wins[0].wins);
        console.log("winner data game ", winnersArray[0].wins[0].game);

        
        // console.log("selected: ", selected)
        try {
            await addWin(...winnersArray)
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
