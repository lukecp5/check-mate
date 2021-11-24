import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@mui/material';
import funFactArray from "../utils/factarray";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

console.log (funFactArray);


const FunFact = () => {

    const [randomFact, setnewFact] = useState(`${funFactArray[4]}`);

    const pickNewIndex = useCallback(() => {
        const index = Math.floor(Math.random() * funFactArray.length);
        setnewFact(funFactArray[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(pickNewIndex, 10000);
        return () => clearInterval(intervalID);
    }, [pickNewIndex])


    return (
        <>
        <Card sx={{ color: "#ffffff", background: `linear-gradient(to left, #113F8C, #01A4A4)` }}>
      <CardContent>
        <Typography>
            { randomFact }
        </Typography>
      </CardContent>
    </Card>
        </>
    );
};

export default FunFact;