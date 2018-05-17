import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

const App = () =>(
	<Router>
		<Wrapper>
			<Header /> 
		</Wrapper>
	</Router>
);

export default App;
