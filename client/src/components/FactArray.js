import React, { useState, useEffect, useCallback } from 'react';
//import { Container } from '@mui/material';
import funFactArray from "../utils/factarray";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

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

    const MyCard = styled(Card)(({ theme }) => ({
        color: "#ffffff", 
        marginTop: 10, 
        marginBottom: 10, 
        padding: '10px', 
        textAlign:'center', 
        background: `linear-gradient(to left, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        borderRadius: 0, 
        minHeight: '120px',
        textAlign: 'center',
    })); 

    return (
    <MyCard>
      <CardContent>
        <Typography>
            { randomFact }
        </Typography>
      </CardContent>
    </MyCard>
    );
};

export default FunFact;