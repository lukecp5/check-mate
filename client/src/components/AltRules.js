import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
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

import { Grid, Box, CardContent, CardMedia } from '@mui/material';

const AltRules = () => {

    const { error, data } = useQuery(USER_INFO);
	const userInfo = data ? data.userInfo : { name: '', email: '', friends: [] };
    if(error) {
        console.log(error);
    }
    const username = userInfo.username;

    const [searchedGames, setSearchedGames] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [selectedIndex, setSelectedIndex] = useState('');

    const [altRules, setAltRules] = useState('');

    const [altRulesName, setAltRulesName] = useState('');

    const [gameId, setGameID] = useState('');

    const [user, setCurrentUser] = useState('');

    const [addAltRules ] = useMutation(ADD_ALTRULES);

    let [getAltRules, { data: dataDB = [] }  ] = useLazyQuery(FIND_ALT_RULES, {fetchPolicy: "network-only", nextFetchPolicy: "network-only"});

    
    const handleListItemClick = (event, index, gameId) => {
        setSelectedIndex(index);
        setGameID(gameId);
        getAltRules({variables: {game_id: gameId} });
    };

    const handleRulesFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await addAltRules({
                variables: { game_id: gameId, user: user, description: altRules, rule_set_name: altRulesName },
            });
            getAltRules({variables: {game_id: gameId} });
        } catch (err) {
            console.log(err);
        }
        setAltRulesName('');
        setAltRules('');   
    };
    
    const handleGameSearchFormSubmit = async (event) => {
        event.preventDefault();
        setCurrentUser(username);
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

                {!dataDB.findaltrules ? null : dataDB.findaltrules.map((game) => {
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