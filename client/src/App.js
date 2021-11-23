import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from 'components/Navbar'; 
import Footer from 'components/Footer'; 
import SearchGames from './pages/SearchGames';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';

// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <SearchGames />
      <Footer /> 
    </div>
  );
}

export default App;
