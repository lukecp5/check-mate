import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import tm from '../Images/terraformingmars.png'
// import { Container } from '@mui/material';
import  { Grid }  from '@mui/material';

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

const StyledButton = styled(Button)(({ theme }) => ({ 
    color: '#616161',
    "&:hover": {
        color: '#ffffff',
        background: 'transparent',
        border: "2px solid white",
    }
})); 

export default function BasicCard() {
  return (
  
    <Grid container spacing={1}>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
        <Card sx={{ maxWidth: 300, minHeight: 800, margin:"30px", color: "#ffffff", background: randomColor, }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src= "https://cdn.shoplightspeed.com/shops/636957/files/24072452/terraforming-mars.jpg" alt="surface of Mars" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
                Terraforming Mars
            </Typography>
            <Typography>
              Corporations are competing to transform Mars into a habitable planet by spending vast resources and using innovative technology to raise the temperature, create a breathable atmosphere, and make oceans of water. As terraforming progresses, more and more people will immigrate from Earth to live on the Red Planet.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 300, minHeight: 800, margin:"30px", color: "#ffffff", background: randomColor }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg" alt="team of CDC experts" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
              Pandemic
            </Typography>
            <Typography>
            Several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. The game board depicts several major population centers on Earth.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 300, minHeight: 800,  margin:"30px", color: "#ffffff", background: randomColor }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src= "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1541531739549" alt="stable of unstable unicorns" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
                Unstable Unicorns
            </Typography>
            <Typography>
            A strategic card game that will destroy your friendships...but in a good way. Build a Unicorn Army. Betray your friends. Unicorns are your friends now. Throw surprising curveballs at your friends with your very own Unicorn army. The Unstable Unicorns Card Game is a strategic game that will keep players on their toes. Build a unicorn army unleash the power of unicorns to have oodles of fun. Card games have never been this exciting.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 300, minHeight: 800, margin:"30px", color: "#ffffff", background: randomColor }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324738308.jpg" alt="trains and a conductor" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
                Ticket to Ride
            </Typography>
            <Typography>
            Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets by connecting two distant cities, and to the player who builds the longest continuous railway. So climb aboard for some railroading fun and adventure.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 300, minHeight: 800, margin:"30px", color: "#ffffff", background: randomColor }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src= "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254847937-51zyVWbt8aL.jpg" alt="Napoleon on horseback" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
              Risk
            </Typography>
            <Typography>
            Welcome to the world of Risk . It’s exciting. It’s unpredictable. It’s all about battling your way to global domination, one territory at a time. And it’s easy to get into the game, fast! In Risk, you focus on your strategy. You decide on your tactical scheme. You figure out where to place your troops, and who and where you will attack and how often. Every move is a risk that will bring either victory or defeat.
            </Typography>
          </CardContent>
          <CardActions>
            <StyledButton size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</StyledButton>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 300, minHeight: 800, margin:"30px", color: "#ffffff", background: randomColor }}>
          <CardContent sx={{ textAlign: 'center'}}>
              <img src= "https://cdn.shopify.com/s/files/1/0505/8019/3473/products/NM-Azul-Box-EN-Z_540x.jpg?v=1611288614" alt="stable of unstable unicorns" width='100%'/>
            <Typography variant="h4" gutterBottom component="div">
              Azul
            </Typography>
            <Typography>
             Enjoy hours of artistic fun with the Azul Board Game. Featuring beautiful Moorish artwork on a board game, your kiddos are sure to love adding to its beauty. Players are required to decorate the walls of the Royal palace of Evora, by placing the correct style and quantity of tiles without wasting supplies. Designed by the famous game author Michael Kiesling, the Azul board game is sure to be a favorite.
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

