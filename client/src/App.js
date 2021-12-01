import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import SearchGames from "./pages/SearchGames";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';

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


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');

	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};

});

const client = new ApolloClient({
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
							<Route path="/login" element={<Login/>} />
							<Route path="/signup" element={<Signup/>} />
							<Route path="/profile" element={<Profile/>}/>
							{/* <Route path="/friends" element={<Friends/>}/>
							<Route path="/startmatch" element={<StartMatch/>}/> */}
							<Route path="*" element={<NotFound/>}/>
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
