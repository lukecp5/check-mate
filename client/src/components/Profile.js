import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import  { Grid }  from '@mui/material';

// STYLED Button 
const StyledButton = styled(Button)(({ theme }) => ({ 
    color: '#616161',
    padding: '5px',
    "&:hover": {
        color: '#ffffff',
        background: 'transparent',
        border: "2px solid white",
        padding: 'calc(5px -2px)',
    }
})); 

export default function Profile() {
    return (
    
      <Grid container spacing={1}>
  
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
          <Card sx={{ maxWidth: 300, minHeight: 900, margin:"30px", color: "#ffffff", background: '#61AE24', padding: '10px', }}>
            <CardContent sx={{ textAlign: 'center'}}>
              <Typography variant="h4" gutterBottom component="div">
                  Welcome back, User! 
              </Typography>
            </CardContent>
            <CardActions>
              <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
            </CardActions>
          </Card>
        </Grid>
        </Grid> 
    );
}
