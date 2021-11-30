import React from "react";
// Import React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

import SearchGames from "./components/SearchGames";
// import GameSearch from "./components/GameSearch";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
// import SubmitBtn from "./components/SubmitBtn";
// import PieChartDemo from "./pages/PieChartDemo";

import FunFact from "./pages/FactArray";
// import AltRules from "./pages/AltRules";
// import { withRouter } from 'react-router-dom';
import Profile from "./components/Profile"

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
		<Router>
			<div className="App">
				<ThemeProvider theme={theme}>
					<Navbar />
					<FunFact />
						<Routes>
							<Route path="/" element={<Homepage/>}/>
							<Route path="/searchgames" element={<SearchGames/>}/>
							<Route path="/profile" element={<Profile/>}/>
							{/* <Route path="/friends" element={<Friends/>}/>
							<Route path="/login" element={<Login/>}/>
							<Route path="/startmatch" element={<StartMatch/>}/> */}
						</Routes>
						{/* <AltRules/> */}
					<Footer />
				</ThemeProvider>
			</div>
		</Router>
</ApolloProvider>

	);
}

export default App;
