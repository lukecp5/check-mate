import React from 'react';
import { createTheme } from '@mui/material/styles';

//grey = palette.grey.700 

const theme = createTheme({
    palette: {
    // Blue 
      primary: {
        main: '#00A1CB', 
        light: '#01A4A4',
        dark: '#113F8C', 
      }, 
    // Green 
      secondary: {
        main: '#61AE24', 
        light: '#D0D102',
        dark: '#32742C',
      }, 
    //Orange/Pink 
      tertiary: {
        main: '#E54028', 
        light: '#F18D05',
        dark: '#D70060',
      },
      grey: {
        main: '#616161', 
        dark: '#424242', 
      }
    }, 
    typography: {
      fontFamily: 'Quicksand', 
      fontWeightLight: 400, 
      fontWeightRegular: 500, 
      fontWeightMedium: 600, 
      fontWeightBold: 700,
    }
  })

export default theme; 