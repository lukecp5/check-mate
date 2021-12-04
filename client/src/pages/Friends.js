import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
import Image from '../Images/friends.png';
import SubmitBtn from '../components/SubmitBtn'; 
import FriendBox from '../components/FriendBox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { useQuery, useLazyQuery} from '@apollo/client';
import { FIND_FRIENDS } from '../utils/queries';

const StyledButton = styled(Button)(({ theme }) => ({ 
    color: '#616161',
    background: 'white', 
    height: "auto",
    marginTop: 30, 
    fontSize: 15, 
    "&:hover": {
        color: '#ffffff',
        background: 'transparent',
        border: "2px solid white",
    }
  })); 

const MyHeader = styled(Typography)(({ theme }) => ({
    color: 'white', 
    textShadow: `3px 3px 10px ${theme.palette.tertiary.dark}`, 
  })); 

const MyCard = styled(Card)(({ theme }) => ({
    color: 'white', 
    borderRadius: 0, 
    padding: 20, 
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, 
})); 

const myFriends = [
    {
        name: "Amanda", 
        initial: "A", 
    }, 
    {
        name: "Chris", 
        initial: "C", 
    }, 
    {
        name: "Hannah", 
        initial: "H", 
    }, 
    {
        name: "Ben", 
        initial: "B", 
    }, 
    {
        name: "Luke", 
        initial: "L", 
    }, 
    {
        name: "Daniel", 
        initial: "D", 
    }, 

]

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
    
        // setSearchedFriend("");
        // setSearchInput('');
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
                                    // value={searchInput}
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

        {setSearchedFriend ? (
            <Grid container align="center" sx={{justifyContent:'center'}}>
            <Grid item xs={12} md={8}>
                <MyCard>
                    <CardContent>
                        <Avatar sx={{width: '72px', height: '72px'}}>A</Avatar>
                        <Typography variant="h5">AmandaC0022</Typography>
                        <CardActions sx={{justifyContent:'center'}}>
                            <StyledButton>Add Friend</StyledButton>
                        </CardActions>
                    </CardContent>
                </MyCard>
            </Grid>
        </Grid>
        ) : null }
        <Grid container align="center" sx={{display:"flex", justifyContent:"center"}}>
            <Grid item>
                <FriendBox /> 
            </Grid>
        </Grid>
{/* {selectedFriendData ? (  
    ) : null} */}
    </>
    )
}; 