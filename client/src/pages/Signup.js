import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitBtn from '../components/SubmitBtn'; 
import { Typography } from '@mui/material';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username, 
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box 
      onSubmit={handleFormSubmit}
      component="form"
      autoComplete="off"
      sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection:'column', flexWrap: 'wrap', alignItems: 'center'}}
    >
      <TextField
        required
        label="First Name"
        name="firstName"
        type="firstName"
        id="firstName"
        onChange={handleChange}
      />
      <TextField
        required
        label="Last Name"
        name="lastName"
        type="lastName"
        id="lastName"
        onChange={handleChange}
      />
      <TextField
        required
        label="Username"
        name="username"
        type="username"
        id="username"
        onChange={handleChange}
      />
      <TextField
        required
        label="Email"
        name="email"
        type="email"
        id="email"
        onChange={handleChange}
      />
      <TextField
        required
        label="Password"
        name="password"
        type="password"
        id="pwd"
        onChange={handleChange}
      />
      <SubmitBtn type="submit">Register</SubmitBtn>
      <Typography>Already have an account?</Typography>
      <Link to="/login">Sign in here</Link>
    </Box>
  );
}

export default Signup;
