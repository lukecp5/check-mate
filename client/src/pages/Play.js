import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import SubmitBtn from '../components/SubmitBtn';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Typography, TextField, Card } from '@mui/material';

const MyCard = styled(Card)(({ theme }) => ({ 
  background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
  color: 'white',  
  borderRadius: 0,
})); 


const Play = () => {
    // const [friends, setFriends] = useState(" "); 

    const friends = [
        {name: "Amanda"}, 
        {name: "Hannah"}, 
        {name: "Ben"}, 
        {name: "Luke"}, 
        {name: "Danny"},
    ]

    return (
        <Stack spacing={3} 
          sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', textAlign: 'center', flexDirection: 'column', p: 5}}>
            <MyCard sx={{ p: 10}}>
              <Typography variant="h3" sx={{p: 2}}>Game Name</Typography>
              <Typography variant="h5" sx={{p: 2}}>Choose Your Players</Typography>
              <Autocomplete
              multiple
              sx={{ width: 300, p: 2 }}
              id="tags-outlined"
              options={friends}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                // Change font color to white
                // sx={{ color: '#ffffff'}}
                  {...params}
                  label="Choose Players"
                  placeholder="Select Players"
                />
              )}
            />
        </MyCard>
        <Stack direction= "row" sx={{justifyContent: 'center'}}>
          <SubmitBtn size='large' sx={{width: 100}}>
            <Link to="/results">Ok!</Link>
          </SubmitBtn>
        </Stack>
      </Stack>
    )
}

export default Play
