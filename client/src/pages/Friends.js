import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
import Image from '../Images/friends.png';
import SubmitBtn from '../components/SubmitBtn'; 
import FriendBox from '../components/FriendBox';

const MyHeader = styled(Typography)(({ theme }) => ({
    color: 'white', 
    textShadow: `3px 3px 10px ${theme.palette.tertiary.dark}`, 
  })); 

export default function Friends() {

    const [searchedFriend, setSearchedFriend] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [selectedFriendData, setSelectedFriendData] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(searchInput); 

        if (!searchInput) {
          return false;
        }
    
        setSearchedFriend();
        setSearchInput('');
      };

    return (
        <>
        <Grid container 
            sx={{ 
                justifyContent:'center', 
                padding: '20px', 
                color: '#ffffff', 
                borderRadius: 0 
            }}>      
            <Grid item xs={12} 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    textAlign: 'center',  
                    backgroundImage: `url(${Image})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    padding: '10px', 
                    borderRadius: 3, 
                    minHeight: 360
                }}>
                <Grid container>
                    <Grid item xs={12} sx={{ m:3, ml:4, mr:4, }}>
                        <MyHeader variant="h3" align="center" gutterBottom>
                            Find Your Friends!
                        </MyHeader>
                    </Grid>
                    <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                        <form 
                        onSubmit={handleSubmit}
                        >
                            <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                                <TextField
                                    required
                                    name="searchInput"
                                    value={searchInput}
                                    onChange={(e) => setSearchedFriend(e.target.value)}
                                    type="text"
                                    size="lg"
                                    placeholder="Enter Username"
                                    sx= {{background: '#ffffff', borderRadius: 2, textAlign: 'center'}}
                                />
                            </Grid>
                            <Grid item sx={{display: 'flex', justifyContent: 'center'}}>
                                <SubmitBtn type="submit">Search</SubmitBtn>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>  
            </Grid>       
        </Grid>
        <Grid container>
            <Grid item>
                <FriendBox /> 
            </Grid>
        </Grid>
{/* {selectedFriendData ? (  
    ) : null} */}
    </>
    )
}; 