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
		<Router>
			<div className="App">
				<ThemeProvider theme={theme}>
					<Navbar />
					<FunFact />
						<Routes>
							<Route path="/" element={<Homepage/>}/>
							<Route path="/searchgames" element={<SearchGames/>}/>
							{/* <Route path="/friends" element={<Friends/>}/>
							<Route path="/login" element={<Login/>}/>
							<Route path="/startmatch" element={<StartMatch/>}/> */}
						</Routes>
					<Footer />
				</ThemeProvider>
			</div>
		</Router>
	);
}

export default App;
