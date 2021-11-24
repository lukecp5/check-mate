import React, { useState, useEffect, useCallback } from 'react';

import { Container } from '@mui/material';
import funFactArray from "../utils/factarray";

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
            <div>
                <Container>
                    <h1>Fun Facts</h1>
                    <p> { randomFact }</p>
                </Container>
            </div>
        </>
    );
};

export default FunFact;