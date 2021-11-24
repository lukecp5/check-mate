import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { Container } from '@mui/material';

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

  // create method to search for books and set state on form submit
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
      <div>
        <Container>
          <h1>Search for Games!</h1>
          <form onSubmit={handleGameSearchFormSubmit}>
              <div>
                <input
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Enter name of Game"
                />
              </div>
              <div>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </div>
          </form>
        </Container>
      </div>

      <Container>
        <h1> the data lacks formrtting at the moment, but it shows everything we are currently capturing.  There is also a console log of all the returned data if you want to look and see if there is something else you think we should capture.</h1>
        <h2>
          {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : 'Search for a game to begin'}
        </h2>
        <div>
          {searchedGames.map((game) => {
            return (
              <div key={game.gameId}>
                <h2>{game.gameName}</h2>
                <h4>Game ID: {game.gameId}</h4>
                <h4>gameDescription: {game.gameDescription}</h4>
                {game.minPLayers ? ( 
                <h4>minPlayers: {game.minPlayers}</h4>
                ) : null}
                {game.maxPlayers ? (
                <h4>maxPlayers: {game.maxPlayers}</h4>
                ) : null}
                {game.minAge ? (
                  <h4>minAge: {game.minAge}</h4>
                ): null}
                {game.officialUrl ? (
                <h4>officialUrl: {game.officialUrl}</h4>
                ) : null}
                {game.rulesUrl ? (
                <h4>rulesUrl: {game.rulesUrl}</h4>
                ) : null}

                {game.image_thumb ? (
                  <h4>image_thumb</h4>
                ) : null}
                {game.image_thumb ? (
                  <img src={game.image_thumb} alt="box cover of boardgame"></img>
                ) : null}

                {game.image_url ? (
                  <h4>image_url</h4>
                ) : null}
                {game.image_url ? (
                  <img src={game.image_url} alt="box cover of boardgame"></img>
                ) : null}

              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SearchGames;
