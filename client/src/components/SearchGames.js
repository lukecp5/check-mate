import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import Image from '../Images/gamebackgroundimage.png';
import Find from '../Images/findyourgame2.png';
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({ 
  color: '#616161',
  "&:hover": {
      color: '#ffffff',
      background: 'transparent',
      border: "2px solid white",
  }
})); 



const SearchGames = () => {
  // create state for holding returned google api data
  const [searchedGames, setSearchedGames] = useState([]);

  // create state for holding search field data
  const [searchInput, setSearchInput] = useState('');

  // create a state to hold the value of the selected game to be used once learn more is clicked
  //const [selectedGame, setSelectedGame] = useState('');

  const [selectedGameData, setSelectedGameData] = useState('');

  //This changes the colors of the backgrounds of each of the cards
    // Theme colors added to array
      var colors = ['#00A1CB','#01A4A4','#113F8C','#61AE24','#D0D102','#32742C','#E54028','#F18D05','#D70060'];
      var randomColor = () => {
          return colors[Math.floor(Math.random()* colors.length)];
      };
      var elements = document.getElementsByClassName(Card);
          for (var i=0; i<elements.length; i++) {
          elements[i].style.backgroundColor = randomColor();
      };


  const handleLearnMoreClick = (selectedGameId) => {
    const newArray = searchedGames.filter (item => item.gameId === selectedGameId);
    setSelectedGameData(newArray);
}

  useEffect(() => {
    if (selectedGameData) {
    console.log("selectedGameData: ", selectedGameData);}
  }, [selectedGameData]);


  // create method to search for games and set state on form submit
  const handleGameSearchFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.boardgameatlas.com/api/search?name=${searchInput}&limit=6&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const data  = await response.json();
      console.log( data );
      const returnedGameData = data.games;

      //console.log("gameData: ", gameData);
      // console.log("Array gameData?: ", Array.isArray(returnedGameData));
      // console.log("typeof data: ", typeof data);
      // console.log(Array.isArray(data));

      // console.log ("id: ", data.games[0].id);
      // console.log ("name: ", data.games[0].name);
      // console.log ("description: ", data.games[0].description_preview);
      // console.log ("image_url: ", data.games[0].image_url);
      // console.log ("images_thumb: ", data.games[0].images.thumb);
      // console.log ("min_players: ", data.games[0].min_players);
      // console.log ("max_players: ", data.games[0].max_players);
      // console.log ("min_age: ", data.games[0].min_age);
      // console.log ("rules_url: ", data.games[0].rules_url)
      // console.log ("official_url: ", data.games[0].official_url);


      const setLength = (description) => {
        if(description.length > 450){
              return (description.slice(0,400) + "...");
        } else {
              return description;
        }
            };
      
      const gameData = returnedGameData.map((game) => ({
        gameId: game.id,
        gameName: game.name,
        gameDescription: setLength(game.description_preview),
        fullGameDescription: game.description_preview,
        image_url: game.image_url,
        image_thumb: game.images.thumb,
        minPlayers: game.min_players,
        maxPlayers: game.max_players,
        minAge: game.min_age,
        rulesUrl: game.rules_url,
        officialUrl: game.official_url

        // game: game.designer || ['No designer to display'],
        // image: game.imageLinks?.thumbnail || '',
      }));

      setSearchedGames(gameData);
      setSearchInput('');
      setSelectedGameData('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Grid container sx={{ justifyContent:'center', padding: '20px', color: '#ffffff' }}>
         
      <Grid item xs={12} sx={{ border: 2, display: 'flex', justifyContent: 'center', textAlign: 'center',  backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '10px', borderRadius: 3, minHeight: 360}}>
        
        <Grid container>
          <Grid item xs={12} sx={{ m:3, ml:4, mr:4, }}>
            {/* <Typography variant="h4" align="center" sx={{ color: '#D70060', background: 'rgb(255,255,255,0.80)', maxWidth: '400px', textAlign: 'center'}} gutterBottom>
              Find Your Game!
            </Typography> */}
            <img alt="" src= {Find}/>
          </Grid>

          <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
            <form onSubmit={handleGameSearchFormSubmit}>
              <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                <TextField
                  name="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    size="lg"
                    placeholder="Enter name of Game"
                    sx= {{background: '#ffffff', color: '#616161', borderRadius: 2, textAlign: 'center'}}
                />
              </Grid>

              <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                <Button type="submit" variant="contained" sx= {{background: '#ffffff', color: '#616161', "&:hover": {
                      color: '#ffffff',
                      background: '#D70060',
                      // border: "2px solid white",
                  }}}>
                  Search
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>  
      </Grid>       
    </Grid>

<<<<<<< HEAD
    
    <Grid container sx={{ justifyContent:'center' }}>
{/* 
      <Grid item xs={12} sx={{ m:3 }}>
          <Typography variant="body1" align="center" gutterBottom>
            Developer Note: check the console for a console.log of the complete data return from the API.
          </Typography>
      </Grid> */}


      {/* <Grid item xs={12} sx={{ m:3 }}>
            <Typography variant="h5" align="left" gutterBottom>
            {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : ''
            }
            </Typography>
      </Grid> */}

          {searchedGames.map((game) => {
            return (
              // <Grid item xs={12} sm ={8} md={4} lg={2} sx={{border:2, borderRadius: 3, m:5, textAlign: "center" }} key={game.gameId}>
              //   <Typography variant="h5" align="center" sx={{mt:3, m:2, minHeight: 100}} gutterBottom>
              //     {game.gameName}
              //   </Typography>

              //   <Card>
              //     <CardMedia
              //       component="img"
              //       // width={80%}
              //       image={game.image_url}
              //       alt="Board game box cover"
              //     />
              //   </Card>

              //   <Typography variant="body1" align="center" gutterBottom sx={{m:2}}>
              //     {game.gameDescription}
              //   </Typography>

              //   <Button type="submit" variant="contained" sx={{mb:4}}>
              //     Click for Some Reason
              //   </Button>

              // </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={game.gameId}>
      <Card sx={{ maxWidth: 300, maxHeight: 900, minHeight: 900, margin:"30px", color: "#ffffff", background: randomColor, padding: '10px', }}>
        <CardContent sx={{ align: 'center'}}>
        <CardMedia
            component="img"
            // width={80%}
            image={game.image_url}
            alt="Board game box cover"
            />
          <Typography variant="h5" gutterBottom component="div">
              {game.gameName}
          </Typography>
          <Typography>
            {game.gameDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
        </CardActions>
=======
  {!selectedGameData ? (  
  <Grid container sx={{ justifyContent:'center' }}>
    {searchedGames.map((game) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={game.gameId}>
          <Card sx={{ maxWidth: 300, maxHeight: 900, minHeight: 900, margin:"30px", color: "#ffffff", background: randomColor, padding: '10px', }}>
            <CardContent sx={{ textAlign: 'center' }}>
            
              <CardMedia
                component="img"            
                image={game.image_url}
                alt="Board game box cover"
              />
            
              <Typography variant="h5" gutterBottom component="div">
                {game.gameName}
              </Typography>

              <CardActions>
                <StyledButton onClick={() => {
                  handleLearnMoreClick(game.gameId);
                }}
                 size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
               </CardActions>

              <Typography>
                {game.gameDescription}
              </Typography>
            </CardContent>
>>>>>>> main
      </Card>
      </Grid>
            );
          })}
    </Grid>
    ) : null}


          {/* This starts the hard code output to be replaced by filtered data */}
  {selectedGameData ? (        
    <Grid container align="center" sx={{ justifyContent:'center', padding: '20px' }}>
      <Grid item xs={12} sx={{ m:3, ml:4, mr:4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {selectedGameData[0].gameName}
        </Typography>

        <Card align='center' sx={{ m:2, maxWidth: 345, justifyContent:'center' }}>
          <CardMedia
            component="img"
            image={selectedGameData[0].image_url}
            alt="Board game box cover"
            />
        </Card>

        <Typography variant="h5" sx={{ m:4, p:4, border: 2, borderRadius: 12, maxWidth: 1100}}>
          {selectedGameData[0].fullGameDescription}
        </Typography>

        <Grid container justifyContent="center" spacing="5" sx={{ m:2, border:2, borderRadius: 12, maxWidth: 700 }}>
          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Minimum Players: {selectedGameData[0].minPlayers}
            </Typography>
          </Grid>

          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Max Players: {selectedGameData[0].maxPlayers}
            </Typography>
          </Grid>

          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Minimum Age: {selectedGameData[0].minAge}
            </Typography>
          </Grid>

        </Grid>

        <Grid container justifyContent="center" spacing="5" sx={{ m:2}}>

       {selectedGameData[0].rulesUrl ? ( 
          <Grid item >
            <Button href= {selectedGameData[0].rulesUrl} target="_blank" variant="contained">Official Rules</Button>
          </Grid>
        ) : null}

        {selectedGameData[0].officialUrl ? ( 
          <Grid item >
            <Button href= {selectedGameData[0].officialUrl} target="_blank" variant="contained">Game Site</Button>
          </Grid>
        ) : null}

          <Grid item >
            <Button component={Link} to="/match"variant="contained">Schedule a Game</Button>
          </Grid>

          <Grid item >
            <Button component={Link} to="/altrules" variant="contained">Alternate Rulesets</Button>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  ) : null}
    </>
  );
};

export default SearchGames;
