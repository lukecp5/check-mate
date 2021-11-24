import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import tm from '../Images/terraformingmars.png'

//This changes the colors of the backgrounds of each of the buttons
// window.onload = () => {
//     var colors = [];
//     var randomColor = () => {
//         return colors[Math.floor(Math.random()* colors.length)];
//   };
// var elements = document.getElementsByClassName();
//     for (var i=0; i<elements.length; i++) {
//         elements[i].style.backgroundColor = randomColor();
//   };
// };

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 300, margin:"30px", color: "#ffffff", background: `linear-gradient(to right, #D70060, #F18D05)`, }}>
      <CardContent sx={{ textAlign: 'center'}}>
          <img src= {tm} width='270'/>
        <Typography>
            <h2> Terraforming Mars </h2>
        </Typography>
        <Typography>
            Corporations are competing to transform Mars into a habitable planet by spending vast resources and using innovative technology to raise the temperature, create a breathable atmosphere, and make oceans of water. As terraforming progresses, more and more people will immigrate from Earth to live on the Red Planet.
        </Typography>
        <Typography>
            {/* <EmojiEventsIcon/> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ background: "#ffffff", margin: 'auto' }}>Learn More</Button>
      </CardActions>
    </Card>
    
  );
}

