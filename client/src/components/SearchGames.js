import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import Image from '../Images/gamebackgroundimage.png';
import Find from '../Images/findyourgame2.png';

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
  const [selectedGame, setSelectedGame] = useState('');

  // create state to hold saved gameId values
  // const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  //const [saveGame, { error }] = useMutation(SAVE_GAME);

  // useEffect(() => {
  //   return () => saveGameIds(savedGameIds);
  // });

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


      const handleLearnMoreClick = (gameId) => {
        setSelectedGame(gameId); 
        // console.log("selectedGame: ", selectedGame );
        // use a useEffect to execute additional code
      }

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
              return (description.slice(0,450) + "...");
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
            <img src= {Find}/>
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

    
  <Grid container sx={{ justifyContent:'center' }}>
    {searchedGames.map((game) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={game.gameId}>
          <Card sx={{ maxWidth: 300, maxHeight: 900, minHeight: 900, margin:"30px", color: "#ffffff", background: randomColor, padding: '10px', }}>
            <CardContent sx={{ textAlign: 'center'}}>
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
            </CardContent>
        <CardActions>
          <StyledButton onClick={() => {
                  handleLearnMoreClick(game.gameId);
          }}
                 size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
        </CardActions>
      </Card>
      </Grid>
            );
          })}
    </Grid>



          {/* This starts the hard code output to be replaced by filtered data */}
    <Grid container align="center" sx={{ justifyContent:'center', padding: '20px' }}>
      <Grid item xs={12} sx={{ m:3, ml:4, mr:4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Selected game title
        </Typography>

        <Card align='center' sx={{ m:2, maxWidth: 345, justifyContent:'center' }}>
          <CardMedia
            component="img"
            image="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324032557.jpg"
            alt="Board game box cover"
            />
        </Card>

        <Typography variant="h5">
            Game description
        </Typography>

        <Grid container justifyContent="center" spacing="5" sx={{ m:2}}>
          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Minimum Players: Min#
            </Typography>
          </Grid>

          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Max Players: Max #
            </Typography>
          </Grid>

          <Grid item sx={{ minWidth: 200}}>
            <Typography>
              Minimum Age: Min Age
            </Typography>
          </Grid>

        </Grid>

        <Button href= "http://www.fryxgames.se/TerraformingMars/TMRULESFINAL.pdf" variant="contained">Official Rules</Button>
      </Grid>
    </Grid>
    </>
  );
};

export default SearchGames;
