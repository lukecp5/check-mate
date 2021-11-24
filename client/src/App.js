import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import SearchGames from "./pages/SearchGames";
import GameSearch from "./components/GameSearch";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import SubmitBtn from "./components/SubmitBtn";
import PieChartDemo from "./pages/PieChartDemo";
import FunFact from "./pages/FactArray";

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
			<ThemeProvider theme={theme}>
				<Navbar />
				<FunFact />
				<Homepage/>
				<PieChartDemo />
				<SearchGames />
				<GameSearch/>
				<SubmitBtn />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
