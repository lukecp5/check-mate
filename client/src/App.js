import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import SearchGames from "./pages/SearchGames";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";

import PieChartDemo from "./pages/PieChartDemo";
import FunFact from "./pages/FactArray";
import AltRules from "./pages/AltRules";

import { setContext } from '@apollo/client/link/context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});


function App() {
	return (
		<ApolloProvider client={client}>
			
				<ThemeProvider theme={theme}>
					<Navbar />
					<FunFact />
					<Homepage/>
					<AltRules />
					<PieChartDemo />
					<SearchGames />
					<Footer />
				</ThemeProvider>
			
		</ApolloProvider>	
	);
}

export default App;
