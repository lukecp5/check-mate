import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const SubmitBtn = styled(Button)(({ theme }) => ({
    display: 'block', 
    height: 40,
    background: `linear-gradient(to right, ${theme.palette.tertiary.dark}, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.light})`, 
    color: 'white', 
    margin: 20, 
    fontSize: 20, 
    '&:hover': {
      cursor: 'pointer', 
      opacity: .8, 
    }
  })); 

  export default SubmitBtn; 