import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';

const SearchGames = () => {
  // create state for holding returned google api data
  const [searchedGames, setSearchedGames] = useState([]);

  // create state for holding search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved gameId values
  // const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  //const [saveGame, { error }] = useMutation(SAVE_GAME);

  // useEffect(() => {
  //   return () => saveGameIds(savedGameIds);
  // });

  // create method to search for games and set state on form submit
  const handleGameSearchFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.boardgameatlas.com/api/search?name=${searchInput}&limit=10&client_id=${process.env.REACT_APP_CLIENT_ID}`
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


      const gameData = returnedGameData.map((game) => ({
        gameId: game.id,
        gameName: game.name,
        gameDescription: game.description_preview,
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

      //console.log("gameData: ", gameData)

      setSearchedGames(gameData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Grid container sx={{ justifyContent:'center'}}>
         
      <Grid item xs={12} sx={{ border: 2, display: 'flex', justifyContent: 'center', textAlign: 'center', borderRadius: 16, maxWidth: 1000}}>
        
        <Grid container>
          <Grid item xs={12} sx={{ m:3, ml:4, mr:4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Find Your Game!
            </Typography>
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
                />
              </Grid>

              <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                <Button type="submit" variant="contained">
                  Click to Find
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>  
      </Grid>       
    </Grid>

    
    <Grid container sx={{ justifyContent:'center' }}>

      <Grid item xs={12} sx={{ m:3 }}>
          <Typography variant="body1" align="center" gutterBottom>
            Developer Note: check the console for a console.log of the complete data return from the API.
          </Typography>
      </Grid>


      <Grid item xs={12} sx={{ m:3 }}>
            <Typography variant="h4" align="center" gutterBottom>
            {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : 'Search for a game to begin'}
            </Typography>
      </Grid>

          {searchedGames.map((game) => {
            return (
              <Grid item xs={12} sm ={8} md={4} lg={2} sx={{border:2, borderRadius:12, m:5, textAlign: "center" }} key={game.gameId}>
                <Typography variant="h5" align="center" sx={{mt:3, m:2, minHeight: 100}} gutterBottom>
                  {game.gameName}
                </Typography>

                <Card>
                  <CardMedia
                    component="img"
                    // width={80%}
                    image={game.image_url}
                    alt="Board game box cover"
                  />
                </Card>

                <Typography variant="body1" align="center" gutterBottom sx={{m:2}}>
                  {game.gameDescription}
                </Typography>

                <Button type="submit" variant="contained" sx={{mb:4}}>
                  Click for Some Reason
                </Button>

              </Grid>
            );
          })}
    </Grid>
    </>
  );
};

export default SearchGames;
