import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import SubmitBtn from './SubmitBtn';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Typography, TextField, Card } from '@mui/material';
import  { Grid }  from '@mui/material';

const MyCard = styled(Card)(({ theme }) => ({ 
  background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
  color: 'white',  
  borderRadius: 0,
})); 

const MyTextField = styled(TextField)(({ theme }) => ({ 
  '&:active': {
    color: 'white'
  }
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
      <Grid container sx={{justifyContent: 'center', }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2} direction="column" align="center" sx={{marginBottom: '16px'}}>
              <MyCard sx={{ p: 5}}>
                <Typography variant="h3" sx={{pt: 3}}>Game Name</Typography>
                <Typography variant="h5" sx={{p: 3}}>Choose Your Players</Typography>
                <Autocomplete
                multiple
                sx={{ p: 3, color: 'white' }}
                style={{ width: 350 }}
                id="tags-outlined"
                options={friends}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                renderInput={(params) => (
                  <MyTextField
                    {...params}
                    label="Choose Players"
                    placeholder="Select Players"
                  />
                )}
              />
          </MyCard>
          <SubmitBtn size='large' sx={{width: 100, alignSelf: 'center'}}>Ok!</SubmitBtn>
          </Stack>
        </Grid>
      </Grid>
    )
}

export default Play
