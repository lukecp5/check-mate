import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { USER_INFO, FIND_ALT_RULES } from '../utils/queries'
import {ADD_ALTRULES} from '../utils/mutations';
import Button from '@mui/material/Button';
import { 
    Typography, 
    TextField, 
     } from '@mui/material';

import { Grid, Box, CardContent } from '@mui/material';

const AltRulesComp = (props) => {

    const { error, data } = useQuery(USER_INFO);
	const userInfo = data ? data.userInfo : { name: '', email: '', friends: [] };
    if(error) {
        console.log(error);
    }
    const username = userInfo.username;

    const [altRules, setAltRules] = useState('');

    const [altRulesName, setAltRulesName] = useState('');

    const [gameId] = useState(props.selectedGameId);

    const [addAltRules ] = useMutation(ADD_ALTRULES);

    let [getAltRules, { data: dataDB = [] }  ] = useLazyQuery(FIND_ALT_RULES, {fetchPolicy: "network-only", nextFetchPolicy: "network-only"});

    useEffect (() => {
        getAltRules({variables: {game_id: gameId} });
    }, []);

    const handleRulesFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addAltRules({
                variables: { game_id: gameId, user: username, description: altRules, rule_set_name: altRulesName },
            });
            getAltRules({variables: {game_id: gameId} });
        } catch (err) {
            console.log(err);
        }
        setAltRulesName('');
        setAltRules('');   
    };
  
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ border: 2, m:1, display: 'flex', justifyContent: 'center',       borderRadius: 16 }}>
                    <Grid container>

                        <Grid item xs={12}>
                        <form onSubmit={handleRulesFormSubmit}>
                            <Grid container>
                            <Grid item xs={12} sx={{ m:1 }}>
                                {/* {selectedIndex.length ? ( */}
                                    <Typography variant="h6" align="center" sx={{m:3}}>
                                        Enter your own rules set or modifications by entering a name for the ruleset and then a description
                                    </Typography>
                             {/* ) : null} */}
                            </Grid>

                            <Grid item xs={12} sx={{ width: 400, maxWidth: '100%', ml:3, mr: 3, mt:2, mb:2, }}>
                                {/* {selectedIndex.length ? (  */}
                                <TextField
                                    name="altRulesName"
                                    value={altRulesName}
                                    onChange={(e) => setAltRulesName(e.target.value)} 
                                    label="New Rule Set Name" 
                                    id="altRuleName"
                                />
                                 {/* ) : null}                         */}
                            </Grid>

                            <Grid item xs={12} sx={{ width: 500, maxWidth: '100%', ml:3, mr: 3, mt:2, mb:2, }}>
                                {/* {selectedIndex.length ? (  */}
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
                              {/* ) : null}                         */}
                            </Grid>
                            </Grid>
                        

                            <Grid item xs={12} sx={{ mb:2, textAlign: 'center'}}>
                                {/* {selectedIndex.length ? (  */}
                                    <Button type="submit" variant="contained">Submit your Ruleset</Button>
                                {/* ) : null} */}
                            </Grid>
                        </form>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        
        {/* THIS IS THE START OF THE ALTERNATE RULES DISPLAY */}
        
        <Grid item xs={12}>
        <Box sx={{ border: 2, m:1, display: 'flex', justifyContent: 'center', borderRadius: 16 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ m:3, textAlign: 'center'}}>
                        Browse the alternate rulesets and modifiers available or add your own.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ m:1 }}>
                        {/* {selectedIndex.length ? ( */}
                            <Typography variant="h6" align="center" gutterBottom>
                                Currently viewing rules for
                            </Typography>
                        {/* ) : null} */}
                </Grid>

                {/* THIS CARD BELOW IS FOR styling SO MODIFY THIS GET IT LOOKING HOWYOU WANT THEN APPLY THE STYLES TO THE CARD BELOW*/}

                <Grid item xs={12}>
                            <Box sx={{ border: 2, m:2, display: 'flex', justifyContent: 'left', borderRadius: 12 }}>
                                <CardContent>
                                    <Typography variant="h5" color="text.primary" sx={{mb:1}}>
                                        Rule Set Name
                                    </Typography>
                                    <Typography variant="h5" sx={{ mb:2 }}>
                                        Submitted by: UserName
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        this is a hardcoded card, its here for styling, this will be deleted in production but the mapped card below(in the JSX) will be used
                                    </Typography>
                                </CardContent>
                            </Box>
                </Grid>

                {/* THIS CARD BELOW IS THE MAP FOR PRODUCTION USE It WONT POPULATE UNTIL I CAN EVERYTHING HOOKED BACK UP AGAIN IN SEARCH GAMES */}

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
  
  export default AltRulesComp;