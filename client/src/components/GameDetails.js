// import React from 'react'; 
// import { Grid, Typography, CardMedia, Card, CardActions, CardContent} from '@mui/material';
// import { styled } from '@mui/system';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import { Link } from "react-router-dom";

// var colors = ['#00A1CB','#01A4A4','#113F8C','#61AE24','#D0D102','#32742C','#E54028','#F18D05','#D70060'];
// var randomColor = () => {
//     return colors[Math.floor(Math.random()* colors.length)];
// };

// const MyCard = styled(Card)(({ theme }) => ({ 
//     background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
//     color: 'white',  
//     borderRadius: 0,
// })); 

// const RulesBtn = styled(Button)(({ theme }) => ({ 
//     display: 'block', 
//     height: "auto",
//     background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, 
//     color: 'white', 
//     margin: 20, 
//     fontSize: 20, 
//     '&:hover': {
//       cursor: 'pointer', 
//       opacity: .8, 
//     }
// })); 

// const GameDetails = () => {
//     return (
//         <Grid container align="center" justifyContent="center" sx={{mb:5, mt: 5}}>
//       <Grid item xs={8} md={5}>
//         <MyCard sx={{width: '70%', m: 5, p: 3}}>
//           <CardContent>
//             <CardMedia 
//               component="img"
//               image={selectedGameData[0].image_url}
//               alt="Board game box cover"
//             />
//             {/* <Typography variant="h4" gutterBottom sx={{marginTop: 5}}>
//             {selectedGameData[0].gameName}
//             </Typography> */}
//           </CardContent>
//         </MyCard>
//       </Grid>
//       <Grid item xs={12} md={7}>
//         <Box sx={{mr: 20}}>
//           <Typography variant="h4" gutterBottom sx={{marginTop: 5}}>
//             {selectedGameData[0].gameName}
//           </Typography>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//               <Tab label="About" {...a11yProps(0)} />
//               <Tab label="Official Rules" {...a11yProps(1)} />
//               <Tab label="Alternate Rules" {...a11yProps(2)} />
//             </Tabs>
//           </Box>
//           <TabPanel value={value} index={0}>
//             <Typography variant="body1" sx={{textAlign: 'left', fontSize: '20px'}}>
//               {selectedGameData[0].fullGameDescription}
//             </Typography>
//             <Stack direction="row" spacing={3} sx={{marginTop: 5}}>
//               <Typography>
//                 Minimum Players: {selectedGameData[0].minPlayers}
//               </Typography>
//               <Typography>
//                 Max Players: {selectedGameData[0].maxPlayers}
//               </Typography>
//               <Typography>
//                 Minimum Age: {selectedGameData[0].minAge}
//               </Typography>
//               </Stack>
//               <Stack direction= "row" sx={{justifyContent: 'center', p: 5}}>
//                 <SubmitBtn component={Link} to="/play" size= 'large' sx={{width: 100}}>Play!</SubmitBtn>
//               </Stack>
//             {/* {selectedGameData[0].officialUrl ? ( 
//               <Button href= {selectedGameData[0].officialUrl} target="_blank" variant="contained">Game Site</Button>
//             ) : null} */}
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             {selectedGameData[0].rulesUrl ? ( 
//               // <Button href= {selectedGameData[0].rulesUrl} target="_blank" variant="contained">Official Rules</Button>
//               <RulesBtn href= {selectedGameData[0].rulesUrl} size= 'large' sx={{width: 200}}> Official Rules </RulesBtn>
//             ) : (
//               <Typography sx={{color:'red'}}>Sorry! We can't find the link.</Typography>
//             )}
//           </TabPanel>
//           {/* TODO: Change this from a link to display the list of alternate rules created my different users */}
//           <TabPanel value={value} index={2}>
//             {/* <Button component={Link} to="/altrules" variant="contained">Alternate Rulesets</Button> */}
//             <Stack direction= "row" sx={{justifyContent: 'center'}}>
//               <RulesBtn component={Link} to="/altrules" size= 'large' sx={{width: 300}}>Add an Alternate Rule</RulesBtn>
//             </Stack>
//           </TabPanel>
//           {/* <SubmitBtn component={Link} to="/play">Play!</SubmitBtn> */}
//           {/* <RulesBtn component={Link} to="/altrules">Add A Rule</RulesBtn> */}
//         </Box>
//       </Grid>
//   </Grid>      
//     )
// }

// export default GameDetails
