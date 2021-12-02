import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SubmitBtn from '../components/SubmitBtn';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const WelcomeMessage = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  color: 'white', 
  padding: 20, 
  marginTop: 10, 
  marginBottom: 10, 
  borderRadius: 0, 
})); 

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <WelcomeMessage> 
        <Typography 
          sx={{textAlign: 'center', fontSize:40}}
        > 
          Welcome to CheckMate!
        </Typography>
        <Typography varient="body1">CheckMate is the app to keep track of your game nights with friends and family! Whether you're a competitive person or not, it's a great way to compare yourself to your opponents. Share your statistics with friends and see who the best is. Anyone can create an account, play on teams, and keep track of their wins and losses.</Typography>
      </WelcomeMessage>
      
      <Box 
        component="form" 
        noValidate 
        autoComplete="off" 
        onSubmit={handleFormSubmit} 
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap'}}
      >
        <div>
          <TextField 
            required 
            id="email" 
            type="email" 
            name="email" 
            onChange={handleChange} 
            label="Username"
          />
        </div>
          <TextField 
            required 
            id="pwd" 
            type="password" 
            name="password" 
            onChange={handleChange} 
            label="Password"
          />
        {error ? (
            <Typography component="body1" sx={{color: "red"}}>Whoops! Your credients are incorrect. Try Again.</Typography>
        ) : null}
        <SubmitBtn type="submit">Login</SubmitBtn> 
        <Typography>Don't have an account?</Typography>
        <Link to="/signup">Signup Here!</Link>
      </Box>
    </div>
  );
}

export default Login;
