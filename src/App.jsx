import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () =>(
	<Router>
		<Wrapper>
			<Header /> 
			<Route path="/" component={Home} />
		</Wrapper>
	</Router>
);

export default App;
