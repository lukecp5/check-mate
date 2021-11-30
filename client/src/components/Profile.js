import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// // STYLED Button 
// const StyledButton = styled(Button)(({ theme }) => ({ 
//     color: '#616161',
//     padding: '5px',
//     "&:hover": {
//         color: '#ffffff',
//         background: 'transparent',
//         border: "2px solid white",
//         padding: 'calc(5px -2px)',
//     }
// })); 

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

export default function Profile() {
    return (
    <Grid>
        <Grid sx={{}}>
            <Card sx={{ color: "#ffffff", mt: '10px', padding: '10px', textAlign:'center', background: `linear-gradient(to right, #D70060, #F18D05)`, marginBottom: '20px', textAlign: 'left'}}>
                <CardContent >
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                        <Typography variant="h4">
                            Welcome back, User!
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
        <Grid container sx={{width: '100%', justifyContent: 'space-evenly'}}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <CardContent sx={{ textAlign: 'center'}}>
                        <Card sx={{ minWidth: 300, maxWidth: 600, minHeight: 400, margin: '20px', color: "#ffffff", background: randomColor, padding: '10px', }}>
                            <CardContent sx={{ textAlign: 'center'}}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Stats
                                </Typography>
                            </CardContent>
                    </Card>
                </CardContent>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <CardContent sx={{ textAlign: 'center'}}>
                        <Card sx={{ minWidth: 300, maxWidth: 600, minHeight: 400, margin: '20px', color: "#ffffff", background: randomColor, padding: '10px', }}>
                            <CardContent sx={{ textAlign: 'center'}}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Reviews
                                </Typography>
                            </CardContent>
                    </Card>
                </CardContent>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <CardContent sx={{ textAlign: 'center'}}>
                        <Card sx={{ minWidth: 300, maxWidth: 600, minHeight: 400, margin: '20px', color: "#ffffff", background: randomColor, padding: '10px', }}>
                            <CardContent sx={{ textAlign: 'center'}}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Friends
                                </Typography>
                            </CardContent>
                    </Card>
                </CardContent>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <CardContent sx={{ textAlign: 'center'}}>
                        <Card sx={{ minWidth: 300, maxWidth: 600, minHeight: 400, margin: '20px', color: "#ffffff", background: randomColor, padding: '10px', }}>
                            <CardContent sx={{ textAlign: 'center'}}>
                                <Typography variant="h4" gutterBottom component="div">
                                    Alternate Rules
                                </Typography>
                            </CardContent>
                    </Card>
                </CardContent>
            </Grid>
        </Grid>
    </Grid>

    );
}