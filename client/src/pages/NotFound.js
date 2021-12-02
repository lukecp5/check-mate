import React from "react";
import { Typography } from "@material-ui/core";
import { Box, styled } from '@mui/system';
import SubmitBtn from '../components/SubmitBtn'; 
import { Link } from 'react-router-dom';

const MyLink = styled(Link)(({ theme }) => ({
  color: 'white', 
})); 

const NotFound = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center'}}>
        <Typography variant="h1">OPPS!</Typography> 
        <Typography variant="body1">404 - PAGE NOT FOUND</Typography>        
        <Typography variant="body2">The page you are looking for might have been removed or is temporairly unavailble.</Typography>        
        <SubmitBtn><MyLink to="/">Go To Homepage</MyLink></SubmitBtn>
    </Box>
  );
};

export default NotFound;
