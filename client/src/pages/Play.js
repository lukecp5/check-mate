import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SubmitBtn from '../components/SubmitBtn';
import { Link } from 'react-router-dom';

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
          sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', textAlign: 'center', flexDirection: 'column'}}>
          <Typography variant="h3">Game Name</Typography>
          <Typography variant="h5">Choose Your Players</Typography>
          <Autocomplete
          multiple
          sx={{ width: 300 }}
          id="tags-outlined"
          options={friends}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose Players"
              placeholder="Select Players"
            />
          )}
        />
        <SubmitBtn><Link to="/results">Ok!</Link></SubmitBtn>
      </Stack>
    )
}

export default Play
