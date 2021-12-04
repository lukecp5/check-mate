import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { USER_INFO, FIND_ALT_RULES } from '../utils/queries'
import {ADD_ALTRULES} from '../utils/mutations';
import Button from '@mui/material/Button';
import { 
    Typography, 
    TextField, 
    ListItemText, 
    ListItemButton, 
    List } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
import { Grid, Box, CardContent, CardMedia } from '@mui/material';

const AltRules = () => {

    const { loading, error, data } = useQuery(USER_INFO);
	const userInfo = data ? data.userInfo : { name: '', email: '', friends: [] };
    if(error) {
        console.log(error);
    }
    const firstName = userInfo.firstName;

    const [searchedGames, setSearchedGames] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [selectedIndex, setSelectedIndex] = useState('');

    const [altRules, setAltRules] = useState('');

    const [altRulesName, setAltRulesName] = useState('');

    const [gameId, setGameID] = useState('');

    const [user, setCurrentUser] = useState('');

    const [addAltRules ] = useMutation(ADD_ALTRULES);

    //const [findAltRules ] = useQuery(FIND_ALT_RULES);

    const [returnedDatafromDB, setReturnedDatafromDB ]  = useState([]);

    // Query to the db to get the alt rules
    const   { data: dataDB }  = useQuery(FIND_ALT_RULES);

    const rulesfromDB = dataDB?.findaltrules || [];
    

    const handleListItemClick = (event, index, gameId) => {
        setSelectedIndex(index);
        setGameID(gameId);
        //This is where I could execute a database search 
        // or if I already pulled everthing I could do a filter here or maybe something I haven't thought of yet.
        console.log("dataDB: ", rulesfromDB);
        console.log("gameId: ", gameId);

        const filteredData = rulesfromDB.filter (item => item.game_id === gameId);
        setReturnedDatafromDB(filteredData);

    };

    const handleRulesFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await addAltRules({
                variables: { game_id: gameId, user: user, description: altRules, rule_set_name: altRulesName },
            });
        } catch (err) {
            console.log(err);
        }
        console.log("gameId: ", gameId);
        console.log("altRulesName: ", altRulesName);
        console.log("altRules: ", altRules);
        console.log("user:", user)

    };
    
    const handleGameSearchFormSubmit = async (event) => {
        event.preventDefault();
        setCurrentUser(firstName);
        if (!searchInput) {
          return false;
        }
    
        try {
          const response = await fetch(
            `https://api.boardgameatlas.com/api/search?name=${searchInput}&limit=5&client_id=${process.env.REACT_APP_CLIENT_ID}`
          );
    
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
    
          const data  = await response.json();
          
          const returnedGameData = data.games;  
    
          const gameData = returnedGameData.map((game) => ({
            gameId: game.id,
            gameName: game.name,
            image_url: game.image_url,
            image_thumb: game.images.thumb,
            rulesUrl: game.rules_url,   
          }));
    
          setSearchedGames(gameData);
          setSearchInput('');
          setSelectedIndex('');
        } catch (err) {
          console.error(err);
        }
      };
  
    return (
        <Grid container>
            <Grid item xs={12} md ={6}>
                <Box sx={{ border: 2, m:1, display: 'flex', justifyContent: 'center',       borderRadius: 16 }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ m:3, ml:4, mr:4 }}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Find your game in order to display or add to Alternate Rules sets
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mb:2, ml:5, textAlign: 'left'}}>
                            <form onSubmit={handleGameSearchFormSubmit}>
                                <Grid item xs={12} sx={{ mb:2, textAlign: 'left'}}>
                                    <TextField
                                        name="searchInput"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        placeholder="Enter name of Game"
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ mb:2, textAlign: 'left'}}>
                                    <Button type="submit" variant="contained">
                                        Search for Game
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>

                        {searchedGames.length
                                ? null:
                        <Grid item xs={12} sx= {{mt:2, mb:2, ml:6, mr:6}}>
                            <h2>
                                Search for a Game to begin
                            </h2>
                        </Grid>
                        } 

                        <Grid item xs={12} sx= {{mb:2, ml:6, mr:6}}>
                            <List>
                                {searchedGames.map((game) => {
                                    return (
                                        <CardContent sx={{ align: 'center'}} key={game.gameId}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: 50, width: 50}}
                                                    image={game.image_url}
                                                    alt="Board game box cover"
                                                />
                                        
                                                <ListItemButton key={game.gameId} 
                                                    sx={{m:1}}
                                                    onClick={(event) => handleListItemClick(event, game.gameName, game.gameId )}
                                                >
                                                    <ListItemText primary={game.gameName} />
                                                </ListItemButton>
                                            </Box> 
                                    </CardContent> 
                                    )
                                })}
                            </List>                            
                        </Grid> 

                        <Grid item xs={12} sx={{ m:1 }}>
                        {selectedIndex.length ? (
                            <Typography variant="h5" align="center" gutterBottom>
                                You are submitting Alternate rules for
                            </Typography>
                        ) : null}
                        </Grid>

                        <Grid item xs={12}>
                        <form onSubmit={handleRulesFormSubmit}>
                            <Grid container>
                            <Grid item xs={12} sx={{ m:1 }}>
                                {selectedIndex.length ? (
                                    <Typography variant="h6" align="center" gutterBottom>
                                        {selectedIndex}
                                    </Typography>
                            ) : null}
                            </Grid>

                            <Grid item xs={12} sx={{ width: 400, maxWidth: '100%', ml:3, mr: 3, mt:2, mb:2, }}>
                                {selectedIndex.length ? ( 
                                <TextField
                                    name="altRulesName"
                                    value={altRulesName}
                                    onChange={(e) => setAltRulesName(e.target.value)} 
                                    label="New Rule Set Name" 
                                    id="altRuleName"
                                />
                                 ) : null}                        
                            </Grid>

                            <Grid item xs={12} sx={{ width: 500, maxWidth: '100%', ml:3, mr: 3, mt:2, mb:2, }}>
                                {selectedIndex.length ? ( 
                                <TextField
                                    name="altRules"
                                    value={altRules}
                                    onChange={(e) => setAltRules(e.target.value)}
                                    fullWidth 
                                    multiline 
                                    minRows="3" 
                                    label="New Rule Set" 
                                    id="altRuleDesc"
                                />
                                 ) : null}                        
                            </Grid>
                            </Grid>
                        

                            <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                                {selectedIndex.length ? ( 
                                    <Button type="submit" variant="contained">Submit your Ruleset</Button>
                                ) : null}
                            </Grid>
                        </form>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        
        {/* THIS IS THE START OF THE ALTERNATE RULES DISPLAY */}
        {/* Right now it populates from a map over a state value's initial state (returnedDatafromDB) it needs to populte from the Database pull and either the pull needs to filter just games with matching Ids (gameID) or we can pull all the lat rules and run a filter for the matching game ids. */}
        <Grid item xs={12} md ={6}>
        <Box sx={{ border: 2, m:1, display: 'flex', justifyContent: 'center', borderRadius: 16 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ m:3, textAlign: 'center'}}>
                        Browse the alternate rulesets and modifiers available or add your own.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ m:1 }}>
                        {selectedIndex.length ? (
                            <Typography variant="h6" align="center" gutterBottom>
                                Currently viewing rules for {selectedIndex}
                            </Typography>
                        ) : null}
                </Grid>

                {returnedDatafromDB.map((game) => {
                    return (
                        <Grid item xs={12} key={game._id}>
                            <Box sx={{ border: 2, m:2, display: 'flex', justifyContent: 'left', borderRadius: 12 }}>
                                <CardContent>
                                    <Typography variant="h5" color="text.primary" sx={{mb:1}}>
                                        {game.rule_set_name}
                                    </Typography>
                                    <Typography variant="h5" sx={{ mb:2 }}>
                                        Submitted by: {game.user}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {game.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Grid>
                    )
                })}

            </Grid>
        </Box>
        </Grid>
    </Grid>

        

    );
  };
  
  export default AltRules;