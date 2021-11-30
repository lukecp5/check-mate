import React, { useState } from 'react';
//import { useMutation } from '@apollo/client';
//import { SAVE_RULES } from '../utils/mutations';
//import { saveGameIds, getSavedGameIds } from '../utils/localStorage';

//import Auth from '../utils/auth';

import Button from '@mui/material/Button';
import { 
    Typography, 
    TextField, 
    ListItemText, 
    ListItemButton, 
    List } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

const AltRules = () => {
    const [searchedGames, setSearchedGames] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [selectedIndex, setSelectedIndex] = React.useState('');

    const [altRules, setAltRules] = useState('');

    const [altRulesName, setAltRulesName] = useState('');

    const [gameId, setGameID] = useState('');

    const [user, setCurrentUser] = useState('Timmy');

    const handleListItemClick = (event, index, gameId) => {
        setSelectedIndex(index);
        setGameID(gameId);
    };

    const handleRulesFormSubmit = async (event) => {
        event.preventDefault();        
        console.log("gameId: ", gameId);
        console.log("altRulesName: ", altRulesName);
        console.log("altRules: ", altRules);
        console.log("user:", user)
    }
    
    const handleGameSearchFormSubmit = async (event) => {
        event.preventDefault();
    
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
                                        <ListItemButton key={game.gameId} 
                                        sx={{m:1}}
                                        // selected={game.gameId}
                                        onClick={(event) => handleListItemClick(event, game.gameName, game.gameId )}
                                    >
                                        <ListItemText primary={game.gameName} />
                                    </ListItemButton>  
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
        
        <Grid item xs={12} md ={6}>
        <Box sx={{ border: 2, m:1, display: 'flex', justifyContent: 'center', borderRadius: 16 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" sx={{ m:3}}>
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
                <Grid item xs={12}>
                <Box sx={{ border: 2, m:2, display: 'flex', justifyContent: 'center', borderRadius: 12 }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" align="left" sx={{mb:1}}>
                            RulesetName
                        </Typography>
                        <Typography variant="h5" sx={{ mb:2 }}>
                            Submitted by User
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            kagoinei gp bp4or bp4omwb plmr bwlmrplb mpwm pbgmw rpbm pwrombp owrmpb owm promb pwromb powrm.
                        </Typography>
                    </CardContent>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                <Box sx={{ border: 2, m:2, display: 'flex', justifyContent: 'center', borderRadius: 12 }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" align="left" sx={{mb:1}}>
                            RulesetName
                        </Typography>
                        <Typography variant="h5" sx={{ mb:2 }}>
                            Submitted by User
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            kagoinei gp bp4or bp4omwb plmr bwlmrplb mpwm pbgmw rpbm pwrombp owrmpb owm promb pwromb powrm.
                        </Typography>
                    </CardContent>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Grid>
    </Grid>

        

    );
  };
  
  export default AltRules;