import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 300, margin:"30px", color: "#ffffff", background: `linear-gradient(to right, #D70060, #F18D05)`, }}>
      <CardContent>
        <Typography>
            Top Player:
        </Typography>
        <Typography>
            Player Name
        </Typography>
        <Typography>
            <EmojiEventsIcon/>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    
  );
}
