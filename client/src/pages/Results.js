import React from 'react'
import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Typography, TextField, Card } from '@mui/material';
import SubmitBtn from '../components/SubmitBtn';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// > Import the GameContext(An object containing: {name: [selected game]}) and the method to set the current game
// > This will be used to display as the header and send to the DB for wins, losses, ties, etc.
import { useGameContext } from '../utils/GameContext';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const trophy = <EmojiEventsIcon fontSize="small" sx={{color: 'gold'}} /> 

const MyCard = styled(Card)(({ theme }) => ({ 
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    color: 'white',  
    borderRadius: 0,
})); 

// const RulesBtn = styled(Button)(({ theme }) => ({ 
//     display: 'block', 
//     height: "auto",
//     background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, 
//     color: 'white', 
//     margin: 20, 
//     fontSize: 20, 
//     '&:hover': {
//       cursor: 'pointer', 
//       opacity: .8, 
//     }
// })); 
  

const friends = [
    {name: "Amanda"}, 
    {name: "Hannah"}, 
    {name: "Ben"}, 
    {name: "Luke"}, 
    {name: "Danny"},
]

const Results = () => {
    // > Extract the global "Game Name" state from the context, as well as the method to update it if needed.
    // > The "Game Name" state is the name of the game that the user selected from the search games page
    const { currentGame, setGame } = useGameContext();

    return (
        <Stack spacing={3} 
          sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', textAlign: 'center', flexDirection: 'column'}}>
            <MyCard sx={{ p: 10}}>
                {/* TO DO: Change Trophy Size */}
            <Typography variant="h5">{trophy}</Typography>
            <Typography variant="h3">{ currentGame.name }</Typography>
            <Typography variant="h5" sx={{p: 2}}>Choose Your Winners</Typography>
            <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={friends}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={trophy}
                    style={{ marginRight: 8 }}
                    checked={selected}
                />
                {option.name}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Choose Winners" placeholder="Select Winners" />
            )}
        />
        </MyCard>
        <Stack direction= "row" sx={{justifyContent: 'center'}}>
          <SubmitBtn size='large' sx={{width: 100}}>
            <Link to="/results">Done!</Link>
          </SubmitBtn>
          {/* TO DO: Style Play Again Button */}
          {/* <RulesBtn to="/results" size= 'large' sx={{width: 200}}>
              <Link> Play Again?</Link>
          </RulesBtn> */}
        </Stack>
    </Stack>
  );
}

export default Results
