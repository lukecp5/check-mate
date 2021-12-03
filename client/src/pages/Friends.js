import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Image from '../Images/friends.png';
// import { Link } from "react-router-dom";
import SubmitBtn from '../components/SubmitBtn'; 

const MyHeader = styled(Typography)(({ theme }) => ({
    color: 'white', 
    textShadow: `3px 3px 10px ${theme.palette.tertiary.dark}`, 
  })); 


export default function Friends() {
    return (
        <Grid container sx={{ justifyContent:'center', padding: '20px', color: '#ffffff', borderRadius: 0 }}>
                
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center',  backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '10px', borderRadius: 3, minHeight: 360}}>
                
                <Grid container>
                    <Grid item xs={12} sx={{ m:3, ml:4, mr:4, }}>
                        <MyHeader variant="h3" align="center" gutterBottom>
                            Find Your Friends!
                        </MyHeader>
                    </Grid>
        
                    <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                        <form 
                        // onSubmit={handleFriendFormSubmit}
                        >
                            <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                                <TextField
                                    required
                                    name="searchInput"
                                    // value={friendInput}
                                    // onChange={(e) => setFriendInput(e.target.value)}
                                    type="text"
                                    size="lg"
                                    placeholder="Enter name of Game"
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
    );
};