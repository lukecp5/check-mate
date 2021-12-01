import React, { useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import usePagination from '@mui/material/usePagination';

const StatBox = styled(Card)(({ theme }) => ({
    color: "#ffffff",
    mt: '20px', 
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.tertiary.dark}, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.light})`, 
    marginBottom: '20px', 
    textAlign: "left", 
    height: 350
})); 

const FriendBox = styled(Card)(({ theme }) => ({
    color: "#ffffff",
    mt: '20px', 
    padding: '10px', 
    textAlign:'center', 
    background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, 
    marginBottom: '20px', 
    textAlign: "left", 
    height: 350
})); 

export default function Profile() {
    const [page, setPage] = useState(1); 

    const handlePageChange = (event, newPage) => {
        setPage(newPage); 
        console.log(event.target); 
    }

    return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={5}>
            <StatBox>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                        <Typography variant="h4">
                            Welcome back, User!
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body1" component="div" sx={{mt: '10px'}}>
                            Wins: 0 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Losses: 0 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Best Teammate: Chris 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Arch Nemesis: Ben 
                        </Typography>
                        <Typography variant="body1" component="div">
                            Favorite Game: Monopoly  
                        </Typography>
                    </Stack>
                </CardContent>
            </StatBox>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
            <FriendBox>
                <CardContent>
                    <Grid container spacing={2}> 
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={3} sm={4} md={4} key={index}>
                            <Avatar>B</Avatar>
                            <Typography xs={{textAlign:"center"}} varient="h6">Ben</Typography>
                        </Grid>
                        ))}
                    </Grid>
                    <Stack spacing={1} xs={{ width: "100%"}}>
                        <Pagination count={5} variant="outlined" page={page} onPageChange={handlePageChange}/> 
                    </Stack>
                </CardContent>
            </FriendBox>
        </Grid>
    </Grid>


    );
}
