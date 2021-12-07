import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, CardMedia, Card } from '@mui/material';
import { styled } from '@mui/system';
import Image from '../Images/friends.png';
import SubmitBtn from '../components/SubmitBtn'; 
import FriendBox from '../components/FriendBox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { ADD_FRIEND } from '../utils/mutations';
import { FIND_FRIENDS } from '../utils/queries';
import randomColor from '../utils/randomColor';


const StyledButton = styled(Button)(({ theme }) => ({ 
    color: '#616161',
    background: 'white', 
    height: "auto",
    marginTop: 30, 
    fontSize: 15, 
    "&:hover": {
        color: '#ffffff',
        background: 'transparent',
        border: "2px solid white",
    }
  })); 

const MyHeader = styled(Typography)(({ theme }) => ({
    color: 'white', 
    textShadow: `3px 3px 10px ${theme.palette.tertiary.dark}`, 
  })); 

const MyCard = styled(Card)(({ theme }) => ({
    color: '#616161', 
    borderRadius: 0, 
    padding: 20, 
    // background: randomColor, 
})); 

// const myFriends = [
//     {
//         name: "Amanda", 
//         initial: "A", 
//     }, 
//     {
//         name: "Chris", 
//         initial: "C", 
//     }, 
//     {
//         name: "Hannah", 
//         initial: "H", 
//     }, 
//     {
//         name: "Ben", 
//         initial: "B", 
//     }, 
//     {
//         name: "Luke", 
//         initial: "L", 
//     }, 
//     {
//         name: "Daniel", 
//         initial: "D", 
//     }, 

// ]


export default function Friends() {

    const [searchedFriend, setSearchedFriend] = useState('');

    // > The value of the search input when the user submits the form
    const [search, setSearch] = useState('');

    // > The results of the search after calling initiateSearchQuery
    const [searchResults, setSearchResults] = useState([]);

    const [selectedFriendData, setSelectedFriendData] = useState('');

    // > useLazyQuery definition that sets up the query to use the 'search' state variable as input. It gives us the results of the query as well as a function to call the query whenever needed
    const [initiateSearchQuery, { loading, error, data, refetch }] = useLazyQuery(FIND_FRIENDS, {
        variables: {
            search: search
        }
    });

    useEffect(() => {
        if(error) {
            console.log(error);
        }
        if (data) {
            setSearchResults(data.findFriends);
        }
        // console.log(data);
    }, [data]);

    // useEffect(() => {
    //     if(!data) {
    //         return;
    //     }
    //     console.log(friendId);
    // }, [friendId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearch(searchedFriend);
        await initiateSearchQuery();
        if (!search) {
          return false;
        }
            await setSearchResults(data.findFriends);
            // console.log(data.findFriends[0].firstName);
    };
    
    const [friendId, setFriendId] = useState();

    const [addFriend, {completed} ] = useMutation(ADD_FRIEND, {
        variables: {
            friendID: friendId
        },
        onCompleted: () => {
            console.log('Friend added!');
        }
    });

    const handleAddFriend = async (event) => {
    event.preventDefault();
    let currentFriendId = event.target.id;
    setFriendId(currentFriendId);
    // console.log("Before Add Friend Mutation: " + friendId);
    if(friendId) {
    await addFriend(friendId);
    // console.log("Friend ID of friend to add: " + friendId);
    }
    return;    
}

    return (
        
        <>
        <Grid container 
            sx={{ 
                justifyContent:'center', 
                // padding: '20px', 
                color: '#ffffff', 
                borderRadius: 0 
            }}>      
            <Grid item xs={12} align="center"
                sx={{ 
                    // display: 'flex', 
                    // justifyContent: 'center', 
                    // textAlign: 'center',  
                    backgroundImage: `url(${Image})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    padding: "10px", 
                    // borderRadius: 3, 
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
                                    name="search"
                                    // value={searchInput}
                                    onChange={(e) => setSearchedFriend(e.target.value)}
                                    value={searchedFriend}
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
    <Grid container spacing={2} align="center" sx={{ p:2, justifyContent: 'center', display: 'flex'}}>
        {searchResults ? (
            searchResults.map((friend, index) => (
        // <Grid>
            // <Grid container spacing={2} align="center" sx={{ p:2, justifyContent: 'center', display: 'flex'}}>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <MyCard>
                        <CardContent>
                            <Avatar sx={{width: '72px', height: '72px'}}>A</Avatar>
                            <Typography variant="h5">{friend.username}</Typography>
                            <CardActions sx={{justifyContent:'center'}}>
                                <StyledButton key={friend._id} onMouseUp={handleAddFriend} id={friend._id}>Add Friend</StyledButton>
                            </CardActions>
                        </CardContent>
                    </MyCard>
                </Grid>
            ))) : null }
    </Grid>
        <Grid container align="center" sx={{display:"flex", justifyContent:"center"}}>
            <Grid item>
                <FriendBox /> 
            </Grid>
        </Grid>
{/* {selectedFriendData ? (  
    ) : null} */}
    </>
    )
}; 