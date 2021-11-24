import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import SearchGames from "./pages/SearchGames";
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import SubmitBtn from "./components/SubmitBtn";
// import PieChartDemo from "./pages/PieChartDemo";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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
			<div className="App">
				<ThemeProvider theme={theme}>
					<Router>
						<Navbar />
						<SubmitBtn />
						{/* <PieChartDemo />
						<SearchGames /> */}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route component={NoMatch} />
						</Switch>
						<Footer />
					</Router>
				</ThemeProvider>			
			</div>
		</ApolloProvider>
	);
}

export default App;
