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

  const freindList = [
      {
          name: "Amanda", 
          initial: "A"
      }
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

{selectedFriendData ? (  
    <Grid container sx={{ justifyContent:'center' }}>
      {friendsList.map((friend) => {
        return (
          <Grid item xs={12} sm={8} md={6} lg={4} xl={2} sx={{display: "flex", justifyContent:"center"}} key={game.gameId}>
            <Card sx={{ borderRadius: 0, maxWidth: 300, maxHeight: 900, minHeight: 900, margin:"30px", color: "#ffffff", background: randomColor, padding: '10px', }}>
              <CardContent sx={{ textAlign: 'center' }}>
              
                <CardMedia
                  component="img"            
                  image={game.image_url}
                  alt="Board game box cover"
                />
              
                <Typography variant="h5" gutterBottom component="div">
                  {game.gameName}
                </Typography>
  
                <Typography>
                  {game.gameDescription}
                </Typography>
  
                <CardActions>
                  <StyledButton onClick={() => {
                    handleLearnMoreClick(game.gameId);
                  }}
                   size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
                 </CardActions>
              </CardContent>
        </Card>
        </Grid>
              );
            })}
      </Grid>
      ) : null}
    </>
    )
}; 