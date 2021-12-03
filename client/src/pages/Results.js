import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const trophy = <EmojiEventsIcon fontSize="small" sx={{color: 'gold'}} /> 

const friends = [
    {name: "Amanda"}, 
    {name: "Hannah"}, 
    {name: "Ben"}, 
    {name: "Luke"}, 
    {name: "Danny"},
]

const Results = () => {
    return (
        <Stack spacing={3} 
          sx={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', textAlign: 'center', flexDirection: 'column'}}>
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
    </Stack>
  );
}

export default Results
