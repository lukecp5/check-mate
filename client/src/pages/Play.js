import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
        <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={friends}
        getOptionLabel={(option) => option.name}
        // defaultValue={friends[0].name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose Players"
            placeholder="Select Players"
          />
        )}
      />
      </Stack>
    )
}

export default Play
